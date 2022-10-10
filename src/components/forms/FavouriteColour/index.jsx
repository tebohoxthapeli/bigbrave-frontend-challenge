/* eslint-disable react/prop-types */

import React from "react";
import { CirclePicker } from "react-color";

import FormWrapper from "../../../FormWrapper";
import SectionWrapper from "../shared/SectionWrapper";
import PaintBrushIcon from "./icons/PaintBrushIcon";

const FavouriteColour = ({ favColour, updateFields }) => {
  return (
    <FormWrapper title="favourite colour">
      <SectionWrapper heading="choose your favourite colour">
        <div className="flex">
          <CirclePicker
            className="flex-1"
            color={favColour}
            onChange={(updatedColour) => updateFields({ favColour: updatedColour.hex })}
          />
          <div className="flex flex-1 items-center justify-center gap-2">
            <h3 style={{ color: favColour }}>{favColour}</h3>
            <PaintBrushIcon fill={favColour} />
          </div>
        </div>
      </SectionWrapper>
    </FormWrapper>
  );
};

export default FavouriteColour;
