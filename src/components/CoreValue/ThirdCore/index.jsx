import { Stack, Typography } from "@mui/material";
import { Gi3DStairs } from 'react-icons/gi';

const ThirdCore = () => {
  return (
    <Stack
      direction="column"
      sx={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}
    >
      <Gi3DStairs />
      <Typography>Empowerment and Opportunity</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </Stack>
  );
}
export default ThirdCore