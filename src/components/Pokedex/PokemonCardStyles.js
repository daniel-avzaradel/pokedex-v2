import { createStyles, makeStyles } from '@mui/styles';

const boxWidth = 180;
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
      height: 220,
      cursor: 'pointer',
      transition: '0.2s ease-in-out',
      '&:hover': {
        opacity: 1,
        transform: 'scale(1.05)',
      },
    },
    imgBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(0,0,0,0.8)',
      backgroundBlendMode: 'darken',
      width: '150px',
      border: '3px solid goldenrod',
      borderRadius: 4,
      zIndex: 3,
      marginBottom: 10,
    },
    cardTitle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'rgba(240, 240, 240, 0.9)',
      border: '2px solid #666',
      borderRadius: 6,
      margin: 0,
    },
    cardDesc: {
      textAlign: 'center',
      borderRadius: 6,
    },
    typeBtn: {
      display: 'flex',
      justifyContent: 'center',
      margin: '0 1px',
      padding: '2px 10px',
      borderRadius: 10,
    },
  }),
);
