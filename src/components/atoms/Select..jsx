import { PropTypes } from "prop-types";

const Select = ({ label, name, id, options, value, onChange, className }) => (
  <span className="flex items-baseline gap-5">
    <label htmlFor={id}>{label}</label>
    <select
      name={name}
      id={id}
      onChange={onChange}
      className={`border-b-2 border-gray-300 p-2 tracking-wide
      hover:mb-[2px] hover:border-none hover:shadow-md hover:outline hover:outline-2 hover:outline-orange
      focus:mb-[2px] focus:border-none focus:outline focus:outline-2 focus:outline-orange ${className}`}
      value={value}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </span>
);

export default Select;

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
