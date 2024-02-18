import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';

export const TextContainer = styled(Typography)(() => ({
  fontSize: '3rem',
}));

export const TextCTA = styled('span')(() => ({
  color: '#FA0F0E',
  textTransform: 'uppercase',
  fontWeight: '700',
}));

export const SideText = styled(Stack)(() => ({
  flexGrow: 1,
  textAlign: 'center',
  textTransform: 'capitalize',
}));