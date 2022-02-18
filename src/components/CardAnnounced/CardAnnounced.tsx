import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

import { Card } from '../Card/Card';
import { getCardAnnounced } from './hooks';
import { updateRoomReference } from '../../services/firebaseDb';
import { onValue, set} from "firebase/database";

type Props = {
  start?: boolean;
  roomId?: string;
  isGM?: boolean;
  nextCard?: boolean;
}

export const CardAnnounced = ({ start, roomId, isGM, nextCard }: Props): JSX.Element => {

    const [card, setCard] = useState(null);

    useEffect(() => {
      onValue(updateRoomReference(roomId, "initCard"), (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setCard(data);
        } 
    });
    },[start, roomId]);

    useEffect(() => {
      if (start && isGM && (nextCard || !nextCard)) {
          const cardGenerated = getCardAnnounced();
          set(updateRoomReference(roomId, "initCard"), cardGenerated);
      }
    }, [start, isGM, roomId, nextCard]);

    return ( 
    <Grid container 
          direction={"column"}
          justifyContent={"center"} 
          style={{height: '100%'}}>
        <Grid item xs={8} 
              alignSelf={"center"}>
          <Grid container
                direction={"column"}
                justifyContent={"flex-start"}
                style={{height: '100%'}}>
            { card && (
              <Card imageUrl={card}
                    hasTokenEnabled={false} 
                    style={{ height: "400px"}} />
            )}
            { !card && (
              <h3>The game will start soon,  Good luck!</h3>
            )}
          </Grid>
        </Grid>
    </Grid>
    );
}