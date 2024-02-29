import { Stack, Typography } from "@mui/material";
import { GiRomanToga } from 'react-icons/gi';

const SecondCore = () => {
  return (
    <Stack
      direction="column"
      sx={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}
    >
      <GiRomanToga />
      <Typography>Personal Development</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </Stack>
  );
}
export default SecondCore