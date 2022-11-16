import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>Filter</label>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
