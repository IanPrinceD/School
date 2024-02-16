import { Container, Stack } from '@mui/material';
import {
  FooterContainer,
  FooterContent,
  FooterCopyContainer,
  FooterCopyRight,
  LogoFooter,
} from './Footer.element';
import FooterContact from './FooterContact';
import FooterFeatures from './FooterFeatures';
import FooterLinks from './FooterLinks';
import FooterSocmed from './FooterSocmed';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Stack sx={{ paddingTop: '10rem', paddingBottom: '2rem' }}>
          <FooterContent direction="row">
            <FooterFeatures />
            <FooterContact />
            <FooterLinks />
            <FooterSocmed />
          </FooterContent>
          <hr style={{ width: '100%' }} />
          <FooterCopyContainer direction="row">
            <LogoFooter>Achiever For Life</LogoFooter>
            <FooterCopyRight>&copy; 2024. all rights reserved</FooterCopyRight>
          </FooterCopyContainer>
        </Stack>
      </Container>
    </FooterContainer>
  );
};
export default Footer;
