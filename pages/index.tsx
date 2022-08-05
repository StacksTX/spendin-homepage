import Layout from '@/com/Layout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';
import Image from 'next/image';

function Home() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '72px',
        }}>
        <Typography
          sx={{
            fontWeight: '700',
            textAlign: 'center',
          }}
          variant="h3"
          component="h2">
          All your business
        </Typography>
        <Typography
          sx={{
            fontWeight: '700',
            textAlign: 'center',
          }}
          variant="h3"
          component="h2">
          expenses in one place.
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15vh',
          }}
          variant="h4"
          component="h5"
          style={{ paddingTop: '10px' }}>
          <Button color="inherit" variant="text" sx={{ mr: 1 }} style={{ textTransform: 'none' }}>
            See Pricing
          </Button>
          <Fab variant="extended" color="primary" style={{ textTransform: 'none' }}>
            Get a Free Demo
          </Fab>
        </Typography>
      </Box>
      <Image src="/Dash.svg" width="1440px" height="853px" />
    </Container>
  );
}

export default Home;

Home.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
