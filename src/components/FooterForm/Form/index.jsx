import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from '../../../shared/Button';
import { TextFieldStyled } from './FooterForm.element';

const Form = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Stack sx={{flexGrow: 1}}>
      <TextFieldStyled
        size="small"
        label="fullname"
        inputProps={{ style: { fontSize: '1.3rem' } }}
        InputLabelProps={{ style: { fontSize: '1.2rem' } }}
        type="text"
        margin="dense"
        {...register('fullname', {
          required: true,
        })}
      />
      <TextFieldStyled
        size="small"
        label="mobile number"
        inputProps={{ style: { fontSize: '1.3rem' } }}
        InputLabelProps={{ style: { fontSize: '1.2rem' } }}
        type="text"
        margin="dense"
        {...register('mobile number')}
      />
      <TextFieldStyled
        size="small"
        label="email"
        inputProps={{ style: { fontSize: '1.3rem' } }}
        InputLabelProps={{ style: { fontSize: '1.2rem' } }}
        type="email"
        margin="dense"
        {...register('email', {
          required: true,
        })}
      />
      <Button type="submit" height="4rem" margin="1rem auto" text="submit" />
    </Stack>
  );
};
export default Form;
