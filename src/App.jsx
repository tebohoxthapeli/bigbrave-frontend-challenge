import React from "react";

import Stepper from "./components/Stepper";
import Person from "./components/Person";

import { useDataLayerValue } from "./context/DataLayer";

const App = () => {
  const [state] = useDataLayerValue();

  return (
    <div className="container mx-auto space-y-12">
      <h1 className="mt-12 text-center text-5xl font-extrabold tracking-widest text-yellow-400">
        BIGBrave Frontend Challenge
      </h1>

      <Stepper />

      {state.done && Object.values(state).every((value) => Boolean(value) || value === false) && (
        <Person />
      )}
    </div>
  );
};

export default App;
