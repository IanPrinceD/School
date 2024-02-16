import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
}));

export const LogoFooter = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.info.main,
  fontSize: '1.5rem',
  fontWeight: '500',
}));

export const FooterCopyRight = styled(Box)(({ theme }) => ({
  fontSize: '1.5rem',
  fontFamily: theme.typography.fontFamily,
  textTransform: 'capitalize',
  color: theme.palette.info.main,
}));

export const FooterContent = styled(Stack)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  textTransform: 'capitalize',
  paddingBlock: '2rem',
}));

export const FooterCopyContainer = styled(Stack)(() => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBlock: '2rem',
}));