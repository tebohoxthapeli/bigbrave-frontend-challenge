import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ updateFields, labelText, value, name, autoFocus }) => {
  return (
    <label className="flex flex-col">
      {labelText}:
      <input
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
        className="border border-black"
        autoFocus={!!autoFocus}
        value={value}
        name={name}
        required
      />
    </label>
  );
};

TextInput.propTypes = {
  updateFields: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
};

export default TextInput;
