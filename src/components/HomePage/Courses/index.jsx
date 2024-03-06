import { Box, Container, Typography } from '@mui/material';
import { data } from './data';

const Courses = () => {
  return (
    <Container sx={{ marginBlock: '5rem' }}>
      <Box textAlign="center">
        <Typography variant="h2" sx={{ color: '#002084', fontWeight: '700' }}>
          How to nurture a SMART child in the digital age?
        </Typography>
        <Typography
          sx={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '600' }}
        >
          Start early and let your child achieve big dreams.
        </Typography>
      </Box>
      <Box>
        {data.map((data) => (
          <Box key={data.id}>
            <Box component="img" src={data.img} />
            <Box>{data.title}</Box>
            <Box>{data.description}</Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
export default Courses;
