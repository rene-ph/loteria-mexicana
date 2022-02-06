import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ICurrentUser } from "../../models/user";

type Props = {
    currentPlayers: Array<ICurrentUser>
}

export const PlayerList = ({ currentPlayers }: Props) : JSX.Element => {
    return(
        <>
           <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography  variant="h4" component="div">
                        List of Players
                    </Typography>
                    { currentPlayers.map( (player: any, index: number) => {
                return (<Typography  key={index} variant="h5" component="div">
                            {player.name} 
                        </Typography>)
                    })}
                </CardContent>
            </Card>
  
        </>
    );
}