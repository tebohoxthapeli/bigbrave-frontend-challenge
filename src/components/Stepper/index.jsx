import React, { useState } from "react";

import GenderDOBForm from "../forms/GenderDOB";
import NameOccupationForm from "../forms/NameOccupation";
import FavouriteColourForm from "../forms/FavouriteColour";

import { useStepper } from "../../hooks/useStepper";

import BackBtn from "./buttons/BackBtn";
import ForwardBtn from "./buttons/ForwardBtn";
import FinishBtn from "./buttons/FinishBtn";

const INITIAL_DATA = {
  fName: "",
  surname: "",
  occupation: "",
  gender: "male",
  dob: new Date("12/31/2004"),
  favColour: "#f44336",
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

    <GenderDOBForm
      key="genderDOBForm"
      {...data}
      updateFields={updateFields}
    />,

    <FavouriteColourForm
      {...data}
      updateFields={updateFields}
      key="favouriteColorForm"
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
    <div className="relative mx-auto w-3/5 rounded-2xl bg-slate-900 p-12">
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        autoCorrect="off"
        className="space-y-6"
      >
        {/* <div className="absolute top-2 right-2">
          {currentStepIndex + 1} / {numOfSteps}
        </div> */}

        {step}

        <div className="flex justify-end gap-6 text-white">
          {!isFirstStep && (
            <BackBtn
              type="button"
              onClick={back}
            />
          )}

          {isLastStep ? <FinishBtn type="submit" /> : <ForwardBtn type="submit" />}
        </div>
      </form>
    </div>
  );
};

export default Stepper;
