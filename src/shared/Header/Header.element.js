import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const TextHeader = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: '600',
  color: theme.palette.accent.main
}))