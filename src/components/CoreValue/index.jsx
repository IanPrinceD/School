import { Box, Container, Stack } from '@mui/material';
import FirstCore from './FirstCore';
import SecondCore from './SecondCore';
import ThirdCore from './ThirdCore';

const CoreValue = () => {
  return (
    <Box sx={{ backgroundColor: '#002084', marginBlock: '2rem' }}>
      <Container sx={{paddingBlock: '6rem'}}>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            columnGap: '2rem',
          }}
        >
          <FirstCore />
          <SecondCore />
          <ThirdCore />
        </Stack>
      </Container>
    </Box>
  );
};
export default CoreValue;
