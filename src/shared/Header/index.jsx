import PropTypes from 'prop-types';
import { TextHeader } from './Header.element';

const Header = ({ text }) => {
  return <TextHeader>{text}</TextHeader>;
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
