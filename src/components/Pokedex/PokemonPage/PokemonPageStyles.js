import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    cardmedia: {
      display: 'flex',
      px: 2,
      opacity: '0.8',
      backgroundSize: '7px 7px',
      backgroundImage: 'repeating-linear-gradient(45deg, #444cf7 0, #444cf7 0.7000000000000001px, #e5e5f7 0, #e5e5f7 50%)',
      backgroundBlendMode: 'overlay',
    },
    typeBtn: {
      display: 'flex',
      justifyContent: 'center',
      padding: '2px 10px',
      borderRadius: 10,
      fontSize: '0.6rem',
    },
  }),
);
