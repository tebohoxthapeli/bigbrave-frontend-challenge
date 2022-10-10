/* eslint-disable react/prop-types */

import React from "react";

import Label from "./Label";
import TextInput from "./TextInput";
import FormWrapper from "../../../FormWrapper";

const NameOccupation = ({ fName, surname, updateFields }) => {
  return (
    <FormWrapper title="user details">
      <TextInput
        updateFields={updateFields}
        labelText="first name"
        value={fName}
        name="fName"
        autoFocus
      />

      <TextInput
        updateFields={updateFields}
        labelText="surname"
        value={surname}
        name="surname"
      />

      <Label labelText="occupation">
        <div className="relative flex after:pointer-events-none after:absolute after:right-0 after:py-2 after:px-4 after:content-['\25BC'] after:hover:text-yellow-400">
          <select
            name="occupation"
            className="c-user-details-input flex-1 cursor-pointer appearance-none"
          >
            {["chef", "developer"].map((occupation, index) => (
              <option
                value={occupation}
                key={index}
              >
                {occupation}
              </option>
            ))}
          </select>
        </div>
      </Label>
    </FormWrapper>
  );
};

export default NameOccupation;
