/* eslint-disable react/prop-types */

import React from "react";

import Label from "./Label";
import TextInput from "./TextInput";
import Select from "./Select";
import FormWrapper from "../../FormWrapper";

const NameOccupation = () => {
  return (
    <FormWrapper title="user details">
      <TextInput
        autoFocus
        name="firstName"
        labelText="first name"
      />

      <TextInput
        name="surname"
        labelText="surname"
      />

      <Label labelText="occupation">
        <Select />
      </Label>
    </FormWrapper>
  );
};

export default NameOccupation;
