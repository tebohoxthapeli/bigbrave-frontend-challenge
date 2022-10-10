import { useState } from "react";

export const useStepper = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(2);

  const next = () => {
    setCurrentStepIndex((prev) => {
      if (prev === steps.length - 1) return 1;
      return prev + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (index) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    numOfSteps: steps.length,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
};
