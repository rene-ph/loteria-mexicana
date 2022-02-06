import Grid from '@mui/material/Grid';
import { useEffect, useState, useRef } from 'react';

import { Card } from '../Card/Card';
import { getCardAnnounced } from './hooks';
import { updateRoomReference } from '../../services/firebaseDb';
import { onValue, set} from "firebase/database";

type Props = {
  start?: boolean;
  roomId?: string;
  isGM?: boolean;
}

export const CardAnnounced = ({start, roomId, isGM}: Props): JSX.Element => {

    const [card, setCard] = useState(null);    
    const timerCardRef = useRef<NodeJS.Timer>();

    useEffect(() => {
      onValue(updateRoomReference(roomId, "initCard"), (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setCard(data);
        } 
    });
    },[start]);

    useEffect(() => {
      // This condition with the isGM is needed in order to not repeat the interval since we have multiple persons using this component
      // at the same time 
      if (start && isGM) {
        timerCardRef.current = setInterval(() => {
            const cardGenerated = getCardAnnounced();
            set(updateRoomReference(roomId, "initCard"), cardGenerated);
        }, 4000);
        return () => clearInterval(timerCardRef.current as NodeJS.Timeout);
      }
    }, [start]);

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