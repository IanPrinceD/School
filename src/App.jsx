import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import theme from './ThemeProvider';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FooterForm from './components/FooterForm';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
      <Outlet />
      <FooterForm/>
      <Footer/>
    </ThemeProvider>
  );
};
export default App;
