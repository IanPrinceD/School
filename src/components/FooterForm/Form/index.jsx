import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from '../../../shared/Button';
import { TextFieldStyled } from './FooterForm.element';

const Form = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Stack sx={{flexGrow: 2}}>
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
          label="email"
          inputProps={{ style: { fontSize: '1.3rem' } }}
          InputLabelProps={{ style: { fontSize: '1.2rem' } }}
          type="email"
          margin="dense"
          {...register('email', {
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
      <Button type="submit" height="4rem" width='' margin="1rem auto" text="send the guide" />
    </Stack>
  );
};
export default Form;
