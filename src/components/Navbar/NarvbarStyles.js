import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    pokeball: {
      cursor: 'pointer',
      transition: '0.6s ease-in-out',
      '&:hover': {
        transform: 'rotate(720deg)',
      },
    },
  })
);
