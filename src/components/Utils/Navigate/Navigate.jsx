import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const PrevPage = ({ id }) => {
  const navigate = useNavigate();
  const previous = (id) => {
    if (id >= 1 && id <= 151) {
      if (id === 1) {
        navigate('/pokedex/151');
      } else {
        navigate(`/pokedex/${id - 1}`);
      }
    }
    if (id >= 152 && id <= 251) {
      if (id === 152) {
        navigate('/pokedex/251');
      } else {
        navigate(`/pokedex/${id - 1}`);
      }
    }
    if (id >= 252 && id <= 386) {
      if (id === 252) {
        navigate('/pokedex/386');
      } else {
        navigate(`/pokedex/${id - 1}`);
      }
    }
  };
  return (
    <Box display={'flex'}>
      <IconButton sx={{ p: 0 }} onClick={() => previous(id)}>
        <ArrowBackIcon />
      </IconButton>
    </Box>
  );
};

export const NextPage = ({ id }) => {
  const navigate = useNavigate();
  const next = (id) => {
    if (id >= 1 && id <= 151) {
      if (id === 151) {
        navigate('/pokedex/1');
      } else {
        navigate(`/pokedex/${id + 1}`);
      }
    }
    if (id >= 152 && id <= 251) {
      if (id === 251) {
        navigate('/pokedex/152');
      } else {
        navigate(`/pokedex/${id + 1}`);
      }
    }
    if (id >= 252 && id <= 386) {
      if (id === 386) {
        navigate('/pokedex/252');
      } else {
        navigate(`/pokedex/${id + 1}`);
      }
    }
  };
  return (
    <Box display={'flex'}>
      <IconButton sx={{ p: 0 }} onClick={() => next(id)}>
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export const BackToPokedex = ({ id }) => {
  const navigate = useNavigate();
  const back = (id) => {
    if (id >= 1 && id <= 151) {
      navigate('/pokedex/firstgen');
    }
    if (id >= 152 && id <= 251) {
      navigate('/pokedex/secondgen');
    }
    if (id >= 252 && id <= 386) {
      navigate('/pokedex/thirdgen');
    }
  };
  return (
    <Box>
      <IconButton sx={{ p: 0 }}>
        <ArrowBackIcon onClick={() => back(id)} />
      </IconButton>
      <Typography variant='caption' sx={{ cursor: 'pointer', mx: 1, lineHeight: 1 }} onClick={() => back(id)}>
        BACK TO POKEDEX
      </Typography>
    </Box>
  );
};
