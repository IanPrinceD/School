import { AppBar, Container, Stack } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  LogoLink,
  NavigationContainer,
  NavigationHolder,
  NavigationLink,
} from './Navigation.element';
import { pageLinks } from './data';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppBar position="sticky" sx={{ marginBottom: '.5rem' }}>
        <Container>
          <NavigationHolder direction="row">
            <LogoLink to="/" component={RouterNavLink}>
              Achiever For Life
            </LogoLink>
            <Stack direction="row">
              {pageLinks.map(({ id, link, text }) => (
                <NavigationLink key={id} to={link} component={RouterNavLink}>
                  {text}
                </NavigationLink>
              ))}
            </Stack>
          </NavigationHolder>
        </Container>
      </AppBar>
    </NavigationContainer>
  );
};

export default Navigation;
