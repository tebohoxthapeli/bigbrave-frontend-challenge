/* eslint-disable react/prop-types */

import React from "react";

const IconWrapper = ({ children, ...rest }) => {
  return (
    <div className="h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-teal-300"
        {...rest}
      >
        {children}
      </svg>
    </div>
  );
};

export default IconWrapper;
