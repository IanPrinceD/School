import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const SubButton = styled(Button)(
  ({
    theme,
    width = '40%',
    height = '100%',
    textcolor = '#FEFEFE',
    backgroundcolor = '#FA0F0E',
    borderradius = '1rem',
    margin = '.5rem',
  }) => ({
    height,
    width,
    margin: margin,
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '.2rem',
    color: textcolor,
    background: backgroundcolor,
    borderRadius: borderradius,
    fontFamily: "'Poppins', sans-serif",
    '&:hover': {
      color: theme.palette.primary.main,
      background: '#B3CDE0',
    },
  })
);
