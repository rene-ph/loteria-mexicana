import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import wincondition from '../../assets/wincondition.jpeg';

import { ICurrentUser } from "../../models/user";

type Props = {
    currentPlayers: Array<ICurrentUser>
}

const displayWinTimes = (times: number) => {
    if (times > 0) {
        return [...Array(times)].map((_x, i) => (
            <StarIcon key={i} 
                style={{
                    position: 'relative',
                    top: '4px'
                }}/>
          ))
    }

    return <SentimentVeryDissatisfiedIcon  
        style={{
            position: 'relative',
            top: '5px'
        }}/>;
}

export const PlayerList = ({ currentPlayers }: Props) : JSX.Element => {
    return(
        <>
           <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography  variant="h4" component="div">
                        List of Players
                    </Typography>
                    { currentPlayers.map( (player: ICurrentUser, index: number) => {
                return (<Typography  key={index} variant="h5" component="div">
                            {player.name}
                        </Typography>)
                    })}
                </CardContent>
            </Card>
            <br/>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography  variant="h4" component="div">
                        List of Winners
                    </Typography>
                    { currentPlayers.map( (player: ICurrentUser, index: number) => {
                        if (player.winTimes > 0) {
                            return (<Typography  key={index} variant="h5" component="div">
                                    {player.name} - 
                                    { displayWinTimes(player.winTimes)}
                                </Typography>)
                        } else {
                            return <></>
                        }
                    })}
                </CardContent>
            </Card>
            <br/>
            <br/>
            <Card >
                <CardContent>
                    <Typography  variant="h5" component="div">
                      Win Conditions
                    </Typography>
                    <img src={wincondition} alt="win condition" />
                </CardContent>
            </Card>          
        </>
    );
}