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
      width: 240,
      height: 280,
      cursor: 'pointer',
      transition: '0.1s ease-in-out',
      background:
        'linear-gradient(127deg, rgba(144,144,144,1) 0%, rgba(255,255,255,1) 25%, rgba(204,204,204,1) 50%, rgba(255,255,255,1) 75%, rgba(179,179,179,1) 100%)',
      '&:hover': {
        opacity: 1,
        transform: 'scale(1.05)',
      },
    },
    imgBox: {
      background: '#f6f6f6',
      border: '1px solid black',
      width: '200px',
      height: '100px',
      borderRadius: 4,
    },
    cardTitle: {
      textAlign: 'center',
      background: '#f6f6f6',
      border: '1px solid #333',
      width: '170px',
      borderRadius: 6,
      margin: 2,
      padding: '20px',
    },
    cardDesc: {
      textAlign: 'center',
      padding: '10px',
      borderRadius: 6,
    },
    typeBtn: {
      display: 'flex',
      justifyContent: 'center',
      padding: '4px 12px',
      margin: '0 2px',
      borderRadius: 4,
      border: '1px solid #333',
    },
  })
);
