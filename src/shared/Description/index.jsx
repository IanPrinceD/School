import { TextDescription } from "./Description.element"
import PropTypes from 'prop-types';

const Description = ({text, color}) => {
  return (
    <TextDescription color={color}>{text}</TextDescription>
  )
}

Description.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Description