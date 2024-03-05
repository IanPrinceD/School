import { Stack } from '@mui/material';
import { GiRomanToga } from 'react-icons/gi';
import Description from '../../../../shared/Description';
import Header from '../../../../shared/Header';
import IconBorder from '../../../../shared/IconBorder';

const SecondCore = () => {
  return (
    <Stack
      direction="column"
      sx={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}
    >
      <IconBorder>
        <GiRomanToga style={{ fontSize: '5rem', color: '#002084' }} />
      </IconBorder>
      <Header text="Personal Development" />
      <Description
        color="#002084"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Stack>
  );
};
export default SecondCore;
