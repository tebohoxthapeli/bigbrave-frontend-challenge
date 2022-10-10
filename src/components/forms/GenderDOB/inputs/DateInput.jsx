/* eslint-disable react/prop-types */

import React, { forwardRef } from "react";

const DateInput = ({ value, onClick }, ref) => (
  <button
    onClick={onClick}
    ref={ref}
    type="button"
    className="rounded-lg bg-orange-500 py-2 px-4 text-slate-900"
  >
    {value}
  </button>
);

export default forwardRef(DateInput);
