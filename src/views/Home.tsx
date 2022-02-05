import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { getPlayersReference, setRoomReference } from '../services/firebaseDb';
import { set } from "firebase/database";
import { useGenerationCards } from '../hooks/useGenerationCards';


export const Home = (): JSX.Element => {
    const navigate  = useNavigate();

    const saveUser = (name: string | undefined, roomId: string | undefined) => {
      set(getPlayersReference(roomId, name), {
         name,
         isGM: false,
         // eslint-disable-next-line react-hooks/rules-of-hooks
         table: useGenerationCards(),
         winner: false
      });
    }

    const createRoom = (roomId: string | undefined) => {
      set(setRoomReference(roomId), {
        players: [],
        start: false,
        winner: false
     });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formName = data.get('name')?.toString() ? data.get('name')?.toString() : 'guest';
        const formRoomId = data.get('roomnumber')?.toString() ?  data.get('roomnumber')?.toString(): '';

        switch(event.nativeEvent.submitter.name) {
            case 'createRoom':
                createRoom(formRoomId); 
                saveUser(formName, formRoomId);
                navigate(`/online/${formRoomId}/${formName}`);
                break;
            case 'online':
                saveUser(formName, formRoomId);
                navigate(`/online/${formRoomId}/${formName}`);
                break;
            case 'offline':
                navigate("/offline");
                break;
        };
      };

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Loteria Mexicana Game
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="roomnumber"
              label="Game room"
              type="text"
              id="roomnumber"
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              name="online"
              value="online"
              sx={{ mt: 3, mb: 2 }}
            >
              Join Room
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              name="offline"
              sx={{ mt: 3, mb: 2 }}
            >
              Play Offline
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              name="createRoom"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Room
            </Button>
          </Box>
        </Box>
      </Container>
    )
}