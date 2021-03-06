import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import Squirtle from '../../assets/squirtle.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box flex={5} p={2} minHeight={'100vh'}>
      <Box px={4}>
        <Typography variant='h5' color='primary' py={2}>
          Pokedex v2.0
        </Typography>
        <Typography paragraph>
          This project is an improvement of my 'Pokedex' graduation project submission in the JavaScript Full Stack Development program at
          Developers Institute in Tel Aviv, Israel. The main purpose of this project is to showcase some of the skills acquired during this
          period and after, while progressing through my web development journey as a React.JS Frontend Developer.
        </Typography>
        <Typography paragraph>
          After graduating from Developers Institute in July 2021, I was hired as part of Developers Institute's internship program as an
          Intern Frontend Software Engineer by serverless development startup platform Appdrag for four months. Two months later I landed my
          first job as a developer working on a cloud platform for the biotech israeli company Compugen as part of the discovery and
          development team helping develop their computational discovery platform to identify novel drug targets.
        </Typography>
        <Typography paragraph></Typography>
        <br />
        <Typography paragraph p={0} m={0}>
          Daniel Avzaradel
        </Typography>
        <Typography paragraph variant='caption'>
          Frontend Software Engineer
        </Typography>
        <Box py={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <img src={Squirtle} alt='Squirtle' width={260} />
          </Box>
          <Link
            style={{
              textDecoration: 'none',
            }}
            to='/pokedex'
          >
            <Button variant='contained' sx={{ marginLeft: { xs: 0, sm: 2 } }}>
              POKEDEX ENTRIES
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
