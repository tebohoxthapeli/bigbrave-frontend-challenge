import React from "react";

import Stepper from "./components/Stepper";

const App = () => {
  return (
    <div className="container mx-auto space-y-12">
      <h1 className="mt-12 text-center text-5xl font-extrabold tracking-widest text-yellow-400">
        BIGBrave Frontend Challenge
      </h1>

      <Stepper />
    </div>
  );
};

export default App;
