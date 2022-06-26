import { createStyles, makeStyles } from '@mui/styles';

const boxWidth = 220;
export const useStyles = makeStyles(() =>
  createStyles({
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '6px solid goldenrod',
      color: '#111',
      borderRadius: 10,
      width: boxWidth,
      height: 260,
      cursor: 'pointer',
      transition: '0.1s ease-in-out',
      '&:hover': {
        opacity: 1,
        transform: 'scale(1.05)',
      },
    },
    imgBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
      backgroundBlendMode: 'overlay',
      width: '180px',
      height: '100px',
      border: '3px solid goldenrod',
      borderRadius: 4,
      zIndex: 3,
    },
    cardTitle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'rgba(240, 240, 240, 0.8)',
      border: '2px solid #666',
      borderRadius: 6,
      margin: 0,
    },
    cardDesc: {
      textAlign: 'center',
      padding: '10px',
      borderRadius: 6,
    },
    typeBtn: {
      display: 'flex',
      justifyContent: 'center',
      margin: '0 4px',
      padding: '2px 12px',
      borderRadius: 10,
    },
  }),
);
