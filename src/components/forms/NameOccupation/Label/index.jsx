/* eslint-disable react/prop-types */

import React from "react";

const Label = ({ children, labelText }) => {
  return (
    <label className="flex flex-col gap-2 text-slate-400 focus-within:text-slate-300 hover:text-slate-300">
      <span>
        {labelText} <span className="text-red-400">*</span>
      </span>

      {children}
    </label>
  );
};

export default Label;
