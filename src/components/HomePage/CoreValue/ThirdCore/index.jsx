import { Stack } from '@mui/material';
import { Gi3DStairs } from 'react-icons/gi';
import Description from '../../../../shared/Description';
import Header from '../../../../shared/Header';
import IconBorder from '../../../../shared/IconBorder';

const ThirdCore = () => {
  return (
    <Stack
      direction="column"
      sx={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}
    >
      <IconBorder>
        <Gi3DStairs style={{ fontSize: '5rem', color: '#002084' }} />
      </IconBorder>
      <Header text="Empowerment and Opportunity" />
      <Description
        color="#002084"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Stack>
  );
};
export default ThirdCore;
