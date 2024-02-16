import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const FormContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '60%',
  gap: '5rem',
  backgroundColor: theme.palette.info.main,
  borderRadius: '2rem',
  padding: '3rem',
  position: 'relative',
  top: '10rem',
  boxShadow: '0rem 0rem 1rem #BDB8B8',
}));