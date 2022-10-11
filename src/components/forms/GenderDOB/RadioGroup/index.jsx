import React from "react";

import MaleIcon from "../icons/MaleIcon";
import CheckIcon from "../icons/CheckIcon";
import FemaleIcon from "../icons/FemaleIcon";

import { useDataLayerValue } from "../../../../context/DataLayer";

const genderOptions = [
  { title: "male", icon: <MaleIcon /> },
  { title: "female", icon: <FemaleIcon /> },
];

const RadioGroup = () => {
  const [state, dispatch] = useDataLayerValue();

  return (
    <div className="flex gap-12">
      {genderOptions.map(({ title, icon }) => (
        <label
          className="flex flex-1 cursor-pointer"
          key={title}
        >
          <input
            id={title}
            type="radio"
            name="gender"
            className="peer hidden"
            checked={state.gender === title}
            onChange={() => dispatch({ type: "set_gender", payload: title })}
          />

          <div className="relative mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-transparent bg-slate-800 p-6 hover:bg-slate-700 peer-checked:border-yellow-400">
            {state.gender === title && <CheckIcon />}
            {icon}
            <h3 className="h-fit text-xl text-slate-300">{title}</h3>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
