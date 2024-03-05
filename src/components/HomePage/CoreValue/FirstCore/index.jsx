import { Stack } from '@mui/material';
import { PiBooksFill } from 'react-icons/pi';
import Description from '../../../../shared/Description';
import Header from '../../../../shared/Header';
import IconBorder from '../../../../shared/IconBorder';

const FirstCore = () => {
  return (
    <Stack
      direction="column"
      sx={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}
    >
      <IconBorder>
        <PiBooksFill style={{ fontSize: '5rem', color: '#002084' }} />
      </IconBorder>
      <Header text="Knowledge Acquisition" />
      <Description
        color="#002084"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Stack>
  );
};
export default FirstCore;
