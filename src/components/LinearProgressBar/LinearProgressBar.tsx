import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


interface Props {
  currentValue: number;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 30,
    width: '90%',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:'#e1e294',
      transition: 'none'
    },
  }));

export const LinearProgressBar = ({ currentValue }: Props) : JSX.Element  => {
    return (
        <BorderLinearProgress variant="determinate" value={currentValue} />
    )
}