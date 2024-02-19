import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#002084' }, // blue
    secondary: { main: '#FA0F0E' }, // red
    accent: { main: '#F3F34A' }, // yellow
    info: { main: '#FEFEFE' }, // white
  },
  typography: {
    fontFamily: ['Poppins', 'san-serif'].join(','),
    h1: {
      fontFamily: '"Inter", san-serif',
      fontSize: 'clamp(3rem, 4vw, 5rem)',
      fontWeight: '500',
      color: '#FEFEFE',
    },
    h2: {
      fontFamily: '"Inter", san-serif',
      fontSize: 'clamp(2.5rem, 4vw, 3.2rem)',
      fontWeight: '500',
      color: '#FEFEFE',
    },
    h3: {
      fontSize: 'clamp(1.6rem, 4vw, 2rem)',
    },
    body1: {
     fontSize: '1.6rem',
     fontWeight: '400'
    }
  },
});

export default theme