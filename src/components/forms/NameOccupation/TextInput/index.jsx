/* eslint-disable react/prop-types */

import React from "react";

import Label from "../Label";

const TextInput = ({ updateFields, labelText, value, name, autoFocus }) => {
  return (
    <Label labelText={labelText}>
      <input
        className="c-user-details-input caret-teal-300 selection:bg-yellow-400/25"
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

export default TextInput;
