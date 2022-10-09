import React from "react";
import FormWrapper from "./FormWrapper";

const AddressForm = () => {
  return (
    <FormWrapper title="Address">
      <label>
        Street:
        <input autoFocus required type="text" />
      </label>

      <label>
        City:
        <input required type="text" />
      </label>

      <label>
        State:
        <input required min={1} type="number" />
      </label>

      <label>
        Zip:
        <input required type="text" />
      </label>
    </FormWrapper>
  );
};

export default AddressForm;
