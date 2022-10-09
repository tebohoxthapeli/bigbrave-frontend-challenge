import React from "react";
import PropTypes from "prop-types";

const FormWrapper = ({ title, children }) => {
  return (
    <>
      <h2 className="border text-6xl text-center">{title}</h2>
      <div className="flex flex-col">{children}</div>
    </>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormWrapper;
