/* eslint-disable react/prop-types */

import React from "react";

const PaintBrushIcon = ({ fill }) => {
  return (
    <div className="h-16 w-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="h-full w-full"
        style={{ fill }}
      >
        <path d="M192 64L160 0H128L96 64 64 0H48C21.5 0 0 21.5 0 48V256H384V48c0-26.5-21.5-48-48-48H224L192 64zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 464c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16z" />
      </svg>
    </div>
  );
};

export default PaintBrushIcon;
