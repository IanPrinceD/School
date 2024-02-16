import PropTypes from 'prop-types'
import { SubButton } from './Button.element'

function Button({
  text,
  type,
  width,
  height,
  backgroundcolor,
  textcolor,
  borderradius,
  margin,
}) {
  return (
    <SubButton
      height={height}
      margin={margin}
      width={width}
      type={type}
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      borderradius={borderradius}
    >
      {text}
    </SubButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundcolor: PropTypes.string,
  textcolor: PropTypes.string,
  borderradius: PropTypes.string,
  margin: PropTypes.string,
}

export default Button
