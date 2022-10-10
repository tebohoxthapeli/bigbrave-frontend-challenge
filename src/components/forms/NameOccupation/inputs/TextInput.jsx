import React from "react";
import PropTypes from "prop-types";

import Label from "../../shared/Label";

const TextInput = ({ updateFields, labelText, value, name, autoFocus }) => {
  return (
    <Label labelText={labelText}>
      <input
        className="c-input caret-teal-300 selection:bg-orange-500/25"
        onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
        autoFocus={!!autoFocus}
        spellCheck={false}
        value={value}
        name={name}
        required
      />
    </Label>
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
