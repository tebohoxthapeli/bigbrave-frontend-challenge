import React from "react";
import { node, string } from "prop-types";

const Label = ({ children, labelText }) => {
  return (
    <label className="flex flex-col gap-2 text-slate-300">
      <span>
        {labelText} <span className="text-red-400">*</span>
      </span>

      {children}
    </label>
  );
};

Label.propTypes = {
  children: node.isRequired,
  labelText: string.isRequired,
};

export default Label;
