import React, { useState } from "react";

import GenderDOBForm from "../forms/GenderDOB";
import NameOccupationForm from "../forms/NameOccupation";
import FavouriteColourForm from "../forms/FavouriteColour";

import { useStepper } from "../../hooks/useStepper";

const INITIAL_DATA = {
  fName: "",
  surname: "",
  occupation: "",
  gender: "",
  dob: "",
  favouriteColour: "",
};

const Stepper = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  // below excluded numOfSteps, currentStepIndex

  const { step, isFirstStep, back, next, isLastStep } = useStepper([
    <NameOccupationForm
      key="nameOccupationForm"
      {...data}
      updateFields={updateFields}
    />,

    <GenderDOBForm key="genderDOBForm" />,
    <FavouriteColourForm key="favouriteColorForm" />,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isLastStep) {
      return next();
    }

    alert("Success");
  };

  return (
    <div className="relative mx-auto w-3/5 rounded-2xl bg-slate-900 p-12">
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        autoCorrect="off"
      >
        {/* <div className="absolute top-2 right-2">
          {currentStepIndex + 1} / {numOfSteps}
        </div> */}

        {step}

        <div className="mt-8 flex justify-end gap-2">
          {!isFirstStep && (
            <button
              type="button"
              className="border p-2"
              onClick={back}
            >
              back
            </button>
          )}

          <button
            type="submit"
            className="border p-2"
          >
            {isLastStep ? "finish" : "next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Stepper;
