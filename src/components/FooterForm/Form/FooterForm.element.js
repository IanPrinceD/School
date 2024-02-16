import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '1rem',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.info.main,
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderRadius: '1rem',
    },
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& label.Mui-focused': {
    color: '#808080',
  },
  '& .MuiFormLabel-root': {
    color: '#808080',
    textTransform: 'capitalize',
  },
  marginTop: '1rem',
  width: '100%',
  fontSize: '.9rem',
}));
