/* eslint-disable react/prop-types */

import React from "react";

const ButtonWrapper = ({ children, viewBox, type, onClick }) => {
  return (
    <button
      type={type ? type : "submit"}
      className="h-8 w-8 rounded-full"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        className="h-full w-full fill-yellow-400 hover:fill-yellow-600"
      >
        {children}
      </svg>
    </button>
  );
};

export default ButtonWrapper;
