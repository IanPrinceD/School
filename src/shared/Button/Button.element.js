import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const SubButton = styled(Button)(
  ({
    theme,
    width = '40%',
    height = '100%',
    textcolor = '#FEFEFE',
    backgroundcolor = '#002084',
    borderradius = '1rem',
    margin = '.5rem',
  }) => ({
    height,
    width,
    margin: margin,
    fontSize: '1.5rem',
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
