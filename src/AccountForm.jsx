import React from "react";
import FormWrapper from "./FormWrapper";

const AccountForm = () => {
  return (
    <FormWrapper title="Account">
      <label>
        Email:
        <input autoFocus required type="email" />
      </label>

      <label>
        Password:
        <input required type="password" />
      </label>
    </FormWrapper>
  );
};

export default AccountForm;
