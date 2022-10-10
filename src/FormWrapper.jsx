/* eslint-disable react/prop-types */

import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <>
      <h2 className=" mb-4 text-center text-3xl font-semibold text-teal-300">{title}</h2>
      <div className="space-y-4">{children}</div>
    </>
  );
};

export default FormWrapper;
