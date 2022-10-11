import React from "react";

import { useDataLayerValue } from "../../../../context/DataLayer";

const occupationOptions = ["developer", "chef", "social media influencer", "yogee"];

const Select = () => {
  const dispatch = useDataLayerValue()[1];

  return (
    <div className="relative flex after:pointer-events-none after:absolute after:right-0 after:py-2 after:px-4 after:content-['\25BC'] after:hover:text-yellow-400">
      <select
        defaultValue="developer"
        id="occupation"
        name="occupation"
        className="c-user-details-input flex-1 cursor-pointer appearance-none"
        onChange={(e) => dispatch({ type: `set_${e.target.name}`, payload: e.target.value })}
      >
        {occupationOptions.map((occupation) => (
          <option
            value={occupation}
            key={occupation}
          >
            {occupation}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
