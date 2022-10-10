import React from "react";

import Stepper from "./components/Stepper";

const App = () => {
  return (
    <div className="container mx-auto space-y-8">
      <h1 className="pt-8 text-center text-4xl font-bold text-orange-500">
        BIGBrave Frontend Challenge
      </h1>
      <Stepper />
    </div>
  );
};

export default App;
