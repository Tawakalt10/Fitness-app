import React, {useState} from 'react';
import {Box} from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercise from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
     <Exercises/>
     <SearchExercise/>
    </Box>
  )
}

export default Home