import { Box } from '@mui/material';
import { CoreValue, Courses, Hero } from '../../components/HomePage';

const HomeScreen = () => {
  return (
    <Box>
      <Hero />
      <CoreValue />
      <Courses />
    </Box>
  );
};
export default HomeScreen;
