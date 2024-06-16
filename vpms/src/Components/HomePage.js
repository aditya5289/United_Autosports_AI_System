import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered, faInfoCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to F1 Vehicle Information
        </Typography>
        <Typography variant="h5" component="p" paragraph>
          Dive into the world of Formula 1 and explore comprehensive details about your favorite racing machines.
        </Typography>
        <Grid container spacing={3} justifyContent="center" my={4}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faFlagCheckered} />}
              onClick={() => handleNavigation('/LiveMonitoring')}
              style={{ fontSize: '16px', padding: '10px 20px' }}
            >
              Live Monitoring
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<FontAwesomeIcon icon={faInfoCircle} />}
              onClick={() => handleNavigation('/Vehiclepartinfo')}
              style={{ fontSize: '16px', padding: '10px 20px' }}
            >
              Vehicle Part Info
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              startIcon={<FontAwesomeIcon icon={faTachometerAlt} />}
              onClick={() => handleNavigation('/Recordchange')}
              style={{ fontSize: '16px', padding: '10px 20px' }}
            >
              Record Change
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body1" component="p" paragraph>
          Stay tuned for race schedules, team updates, and in-depth analysis. Join our community of F1 fans and share your passion for the fastest cars on the planet.
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
