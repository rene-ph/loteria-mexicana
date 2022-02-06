import { useEffect, useState } from 'react';

import { onValue, set} from "firebase/database";
import { Box, 
         Button, 
         Grid,
         Typography,
         Modal }from '@mui/material';
import { useParams } from "react-router-dom";

import { getRoomReference, getPlayersReference, updateRoomReference } from '../services/firebaseDb';
import { IRoom, ICurrentUser } from '../models/index';

import { Table, CardAnnounced, PlayerList } from '../components/index';
import { LoteriaBtn, LoteriaBtnWrapper } from '../components/Loteria/Loteria.styled';

const initRoom: IRoom = {
    id: "",
    players: [],
    start: false,
    winner: ''
}

const initCurrentUser: ICurrentUser = {
    name: '',
    isGM: false,
    table: [],
    winner: false
}

const startGame = (roomId: string | undefined) => {
    set(updateRoomReference(roomId, "start"), true);
}

const stopGame = (roomId: string | undefined) => {
    set(updateRoomReference(roomId, "start"), false);
}

const restartGame = (roomId: string | undefined) => {
    set(updateRoomReference(roomId, "winner"), null);
}

const updateWinner = (roomId: string | undefined, userName: string | undefined) => {
    set(updateRoomReference(roomId, "winner"), userName);
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export const PlayOnline = () : JSX.Element => {  
    const [room, setRoom] = useState<IRoom>(initRoom);
    const [user, setUser] = useState<ICurrentUser>(initCurrentUser);
    const [winner, setWinner] = useState<string>("");
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const { roomId, userId } = useParams();
    const currentPlayers =  Object.values(room.players);

    useEffect(() => {
        if (roomId && userId) {
            onValue(getPlayersReference(roomId, userId), (snapshot) => {
                const data = snapshot.val();
                setUser(data);
            });

            onValue(getRoomReference(), (snapshot) => {
                const data = snapshot.val();
                setRoom(data[roomId]);
            });
            onValue(updateRoomReference(roomId, "winner"), (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setWinner(data);
                    setOpenModal(true);
                    stopGame(roomId);
                } else {
                    setOpenModal(false)
                    setWinner("");
                }
            });
        }
    }, []);
    
    return(<>
           { currentPlayers.length > 0 ? (
               <>
                <Grid container direction="row">
                    <Grid item xs={2}>
                        <PlayerList 
                            currentPlayers={currentPlayers}
                        />
                        { user.isGM && (
                            <>
                                <Button variant="contained" onClick={() => startGame(roomId)}>Start</Button>
                                <Button variant="contained" onClick={() => stopGame(roomId)}>Stop</Button>
                                <Button variant="contained" onClick={() => restartGame(roomId)}>Restart</Button>
                            </>
                        )}
                    </Grid>
                    <Grid item xs={10} container direction="row" style={{marginTop: '60px'}}>
                        <Grid item xs={8}>
                            <Grid container justifyContent="center">
                                <Table initCard={user.table} />
                            </Grid>
                        </Grid>
                        { room.start && (
                            <Grid item xs={4}>
                                <Grid container alignItems={"stretch"}>
                                    <Grid item xs={8}>
                                        <CardAnnounced start={room.start}  roomId={roomId} isGM={user.isGM}/>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <LoteriaBtn onClick={(e) => updateWinner(roomId, userId)}>
                                        <LoteriaBtnWrapper>
                                            L<br/>
                                            O<br/>
                                            T<br/>
                                            E<br/>
                                            R<br/>
                                            I<br/>
                                            A
                                        </LoteriaBtnWrapper>
                                    </LoteriaBtn>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                        {!room.start && (
                            <Grid item xs={4}> 
                                <h3>Wait for the game to start :)</h3>
                            </Grid>
                        )}
                    </Grid>
                </Grid>

                <Modal open={openModal} onClose={handleClose}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Winner
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {winner}
                        </Typography>
                    </Box>
                </Modal>
               </>
           ): null }
          
          </>)
};

