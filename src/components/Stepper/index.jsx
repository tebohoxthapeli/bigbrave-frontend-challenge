import React, { useState } from "react";

import NameOccupationForm from "../Forms/NameOccupation";
import { useStepper } from "../../hooks/useStepper";
import AccountForm from "../../AccountForm";
import AddressForm from "../../AddressForm";

const INITIAL_DATA = {
  fName: "",
  surname: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const Stepper = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { numOfSteps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useStepper([
    <NameOccupationForm
      key="one"
      {...data}
      updateFields={updateFields}
    />,

    <AddressForm
      key="two"
      {...data}
      updateFields={updateFields}
    />,

    <AccountForm
      key="three"
      {...data}
      updateFields={updateFields}
    />,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isLastStep) {
      return next();
    }

    alert("Success");
  };
  return (
    <div className="relative border border-black">
      <form onSubmit={onSubmit}>
        <div className="absolute top-2 right-2">
          {currentStepIndex + 1} / {numOfSteps}
        </div>

        {step}

        <div className="mt-4 flex justify-end gap-2 border">
          {!isFirstStep && (
            <button
              type="button"
              className="border border-black p-2"
              onClick={back}
            >
              back
            </button>
          )}

          <button
            type="submit"
            className="border border-black p-2"
          >
            {isLastStep ? "finish" : "next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Stepper;
