import React from "react";

// notistack handles so much for you. you barely have to do anything to creating amazing notifications
import { useSnackbar } from "notistack";

import GenderDOBForm from "../forms/GenderDOB";
import NameOccupationForm from "../forms/NameOccupation";
import FavouriteColourForm from "../forms/FavouriteColour";

import { useStepper } from "../../hooks/useStepper";

import BackBtn from "./buttons/BackBtn";
import FinishBtn from "./buttons/FinishBtn";
import ForwardBtn from "./buttons/ForwardBtn";

import { useDataLayerValue } from "../../context/DataLayer";

const Stepper = () => {
  const dispatch = useDataLayerValue()[1];
  const { enqueueSnackbar } = useSnackbar();

  const { step, isFirstStep, back, next, isLastStep } = useStepper([
    <NameOccupationForm key="nameOccupationForm" />,
    <GenderDOBForm key="genderDOBForm" />,
    <FavouriteColourForm key="favouriteColorForm" />,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isLastStep) {
      return next();
    }

    enqueueSnackbar("Scroll down and take a look at your avatar", {
      variant: "success",
    });

    dispatch({ type: "set_done", payload: true });
  };

  return (
    <div className="relative mx-auto w-3/5 rounded-2xl bg-slate-900 p-12">
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        autoCorrect="off"
        className="space-y-6"
      >
        {step}

        <div className="flex justify-end gap-6 text-white">
          {!isFirstStep && (
            <BackBtn
              type="button"
              onClick={back}
            />
          )}

          {isLastStep ? <FinishBtn /> : <ForwardBtn />}
        </div>
      </form>
    </div>
  );
};

export default Stepper;
