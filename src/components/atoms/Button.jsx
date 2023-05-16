import { PropTypes } from "prop-types";

const Button = ({ type = "button", onClick, disabled, className, text }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`
      border-2 border-orange bg-orange p-2 font-bold tracking-wider ${className}`}
  >
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
