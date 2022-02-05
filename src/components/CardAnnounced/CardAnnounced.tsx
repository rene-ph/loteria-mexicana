import Grid from '@mui/material/Grid';
import { useEffect, useState, useRef } from 'react';

import { Card } from '../Card/Card';
import { LinearProgressBar } from '../LinearProgressBar/LinearProgressBar';
import { getCardAnnounced } from './hooks';

type Props = {
  start?: boolean;
}

export const CardAnnounced = ({start}: Props): JSX.Element => {

    const [card, setCard] = useState(getCardAnnounced());
    const [currentValue, setCurrentValue] = useState(0);
    const timerBarRef = useRef<NodeJS.Timer>();
    const timerCardRef = useRef<NodeJS.Timer>();

    const progressBarInterval = 21;
    const progressBarSize = 100;

    useEffect(() => {
      timerBarRef.current = setInterval(() => {
        if (currentValue >= progressBarSize) {
          setCurrentValue(0);
        } else {
          setCurrentValue((oldValue) => oldValue + 1);
        }
      }, progressBarInterval);
      return () => clearInterval(timerBarRef.current as NodeJS.Timeout);

    },[currentValue]);

    useEffect(() => {
      timerCardRef.current = setInterval(() => {
        setCard(getCardAnnounced());
      }, 3000);
      return () => clearInterval(timerCardRef.current as NodeJS.Timeout);
    }, [card]);

    if (!start) {
      return <>
          <h2>Wait for the Game to Start</h2>
      </>
    }

    return ( 
    <Grid container 
          direction={"column"}
          justifyContent={"center"} 
          style={{height: '100%'}}>
        <Grid item xs={8} 
              alignSelf={"center"}>
          <Grid container
                direction={"column"}
                justifyContent={"flex-end"}
                style={{height: '100%'}}>
            <Card imageUrl={card}
                  hasTokenEnabled={false} 
                  style={{ height: "300px"}} />
          </Grid>
        </Grid>
        <Grid item xs={4} style={{paddingTop: '30px'}} >
          <LinearProgressBar currentValue={currentValue} />
        </Grid>
    </Grid>
    );
}