/* eslint-disable react/prop-types */

import React from "react";

import LogoutBtn from "./LogoutBtn";
import { useDataLayerValue } from "../../context/DataLayer";

const FormWrapper = ({ title, children }) => {
  const dispatch = useDataLayerValue()[1];

  return (
    <>
      <div className="mb-6 flex h-fit items-center">
        <h2 className="flex-1 text-center text-3xl font-semibold tracking-wider text-teal-500">
          {title}
        </h2>

        <LogoutBtn
          type="button"
          onClick={() => dispatch({ type: "set_logout", payload: true })}
        />
      </div>

      <div className="space-y-6">{children}</div>
    </>
  );
};

export default FormWrapper;
