import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const FooterHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.accent.main,
  fontWeight: '600',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2rem',
}));

export const FooterLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.main,
  fontSize: '1.5rem',
  fontFamily: 'Inter',
  marginBlock: '.3rem',
}));