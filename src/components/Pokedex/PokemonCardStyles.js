import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #333',
      color: '#111',
      borderRadius: 10,
      width: 200,
      height: 240,
      cursor: 'pointer',
      transition: '0.1s ease-in-out',
      background:
        'linear-gradient(127deg, rgba(144,144,144,1) 0%, rgba(255,255,255,1) 25%, rgba(204,204,204,1) 50%, rgba(255,255,255,1) 75%, rgba(179,179,179,1) 100%)',
      '&:hover': {
        opacity: 1,
        transform: 'scale(1.05)',
      },
    },
    cardTitle: {
      textAlign: 'center',
    },
    cardDesc: {
      textAlign: 'center',
      padding: '10px',
      borderRadius: 10,
      background: '#f2f2f2',
    },
    typeBtn: {
      fontSize: '10px',
      background: 'blue',
    },
  })
);
