import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const IconBorder = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#FEFEFE',
        padding: '1rem',
        borderRadius: '50%',
        marginBottom: '1.5rem',
      }}
    >
    {children}
    </Box>
  );
};

IconBorder.propTypes = {
  children: PropTypes.node.isRequired,
};
export default IconBorder;
