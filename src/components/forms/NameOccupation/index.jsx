import React from "react";
import { string, func } from "prop-types";

import FormWrapper from "../../../FormWrapper";
import TextInput from "./inputs/TextInput";

const NameOccupation = ({ fName, surname, updateFields }) => {
  return (
    <FormWrapper title="User Details">
      <TextInput
        updateFields={updateFields}
        labelText="First Name"
        value={fName}
        name="fName"
        autoFocus={true}
      />

      <TextInput
        updateFields={updateFields}
        labelText="Surname"
        value={surname}
        name="surname"
      />
    </FormWrapper>
  );
};

NameOccupation.propTypes = {
  fName: string.isRequired,
  surname: string.isRequired,
  updateFields: func.isRequired,
};

export default NameOccupation;
