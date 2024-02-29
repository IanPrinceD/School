import { Box, Stack } from '@mui/material';
import { PiBooksFill } from 'react-icons/pi';
import Description from '../../../shared/Description';
import Header from '../../../shared/Header';

const FirstCore = () => {
  return (
    <Stack
      direction="column"
      sx={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}
    >
      <Box
        sx={{
          backgroundColor: '#FEFEFE',
          padding: '1rem',
          borderRadius: '50%',
          marginBottom: '1.5rem',
        }}
      >
        <PiBooksFill style={{ fontSize: '5rem', color: '#FA0F0E' }} />
      </Box>
      <Header text="Knowledge Acquisition" />
      <Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </Stack>
  );
};
export default FirstCore;
