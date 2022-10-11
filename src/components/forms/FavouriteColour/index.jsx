/* eslint-disable react/prop-types */

import React from "react";

// Used react-color because it makes integrating a colour picker into your app extremely simple
import { CirclePicker } from "react-color";

import FormWrapper from "../../FormWrapper";
import PaintBrushIcon from "./icons/PaintBrushIcon";
import SectionWrapper from "../shared/SectionWrapper";

import { useDataLayerValue } from "../../../context/DataLayer";

const FavouriteColour = () => {
  const [state, dispatch] = useDataLayerValue();

  return (
    <FormWrapper title="favourite colour">
      <SectionWrapper heading="choose your favourite colour">
        <div className="flex">
          <CirclePicker
            className="flex-1"
            color={state.favouriteColour}
            onChange={(updatedColour) =>
              dispatch({ type: "set_favouriteColour", payload: updatedColour.hex })
            }
          />

          <div className="flex flex-1 items-center justify-center gap-2">
            <h3 style={{ color: state.favouriteColour }}>{state.favouriteColour}</h3>
            <PaintBrushIcon fill={state.favouriteColour} />
          </div>
        </div>
      </SectionWrapper>
    </FormWrapper>
  );
};

export default FavouriteColour;
