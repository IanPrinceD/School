import { Stack } from '@mui/material';
import { TextContainer } from './FooterSide.element';

const FooterSide = () => {
  return (
    <Stack sx={{ flexGrow: 1, textAlign: 'center' }}>
      <TextContainer>
        Sign up for our newsletter and
      </TextContainer>
      <TextContainer>
        get my FREE expense tracker
      </TextContainer>
    </Stack>
  );
};
export default FooterSide;
