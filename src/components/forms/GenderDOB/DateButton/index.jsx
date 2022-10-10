/* eslint-disable react/prop-types */

import React, { forwardRef } from "react";
import CakeIcon from "../icons/CakeIcon";

const DateButton = ({ value, onClick }, ref) => (
  <button
    onClick={onClick}
    ref={ref}
    type="button"
    className="group flex items-center gap-2 rounded-lg border-2 border-transparent bg-yellow-400 py-2 px-4 outline-none hover:border-yellow-400 hover:bg-slate-900 focus:border-yellow-400 focus:bg-slate-900"
  >
    <CakeIcon />
    <span className="text-lg font-medium text-slate-900 group-hover:text-yellow-400 group-focus:text-yellow-400">
      {value}
    </span>
  </button>
);

export default forwardRef(DateButton);
