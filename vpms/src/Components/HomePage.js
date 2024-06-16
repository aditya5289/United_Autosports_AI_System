import React from 'react';
import { Container, Typography, Box } from '@mui/material';
//import myImage from './assets/f1-car.jpg'; // Adjust the path according to your file structure

function HomePage() {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to F1 Vehicle Information
        </Typography>
        <Typography variant="h5" component="p" paragraph>
          Dive into the world of Formula 1 and explore comprehensive details about your favorite racing machines.
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          Get the latest updates on F1 cars, their specifications, performance metrics, and much more. Whether you're a hardcore fan or a casual enthusiast, we have something for everyone.
        </Typography>
        {/* <Box display="flex" justifyContent="center" my={4}>
          <img src={myImage} alt="F1 Car" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box> */}
        <Typography variant="body1" component="p" paragraph>
          Stay tuned for race schedules, team updates, and in-depth analysis. Join our community of F1 fans and share your passion for the fastest cars on the planet.
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
