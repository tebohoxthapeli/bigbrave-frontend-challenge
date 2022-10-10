/* eslint-disable react/prop-types */

import React from "react";

const SectionWrapper = ({ children, heading }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-slate-400">
        {heading} <span className="text-red-400">*</span>
      </h3>
      {children}
    </div>
  );
};

export default SectionWrapper;
