/* eslint-disable react/prop-types */

import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <>
      <h2 className="mb-6 text-center text-3xl font-semibold tracking-wider text-teal-500">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </>
  );
};

export default FormWrapper;
