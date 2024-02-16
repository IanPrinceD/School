import styled from '@emotion/styled';
import { Box, Link, Stack } from '@mui/material';

export const NavigationContainer = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  boxShadow: '0.1rem 0.5rem 1rem #BDB8B8',
  position: 'sticky',
  top: 0,
  
}));

export const NavigationHolder = styled(Stack)(() => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBlock: '2rem',
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.info.main,
  fontSize: '2.5rem',
  fontWeight: '500',
  textDecoration: 'none',
}));

export const NavigationLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.info.main,
  fontSize: '1.6rem',
  fontWeight: '500',
  textDecoration: 'none',
  '&:not(:last-child)': {
    marginRight: '2rem',
  },
  '&.active, &.active .MuiSvgIcon-root': {
    color: theme.palette.accent.main,
  },
}));
