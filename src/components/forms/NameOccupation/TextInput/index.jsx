/* eslint-disable react/prop-types */

import React from "react";

import Label from "../Label";
import { useDataLayerValue } from "../../../../context/DataLayer";

const TextInput = ({ labelText, name, autoFocus }) => {
  const [state, dispatch] = useDataLayerValue();

  return (
    <Label labelText={labelText}>
      <input
        required
        name={name}
        spellCheck={false}
        value={state[name]}
        autoFocus={Boolean(autoFocus)}
        onChange={(e) => dispatch({ type: `set_${name}`, payload: e.target.value })}
        className="c-user-details-input caret-teal-300 selection:bg-yellow-400/25"
      />
    </Label>
  );
};

export default TextInput;
