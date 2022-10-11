/* eslint-disable react/prop-types */

import React from "react";

// react-datepicker is very intuitive and has a lot of features.
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DateButton from "./DateButton";
import RadioGroup from "./RadioGroup";
import FormWrapper from "../../FormWrapper";
import SectionWrapper from "../shared/SectionWrapper";
import { useDataLayerValue } from "../../../context/DataLayer";

const GenderDOB = () => {
  const [state, dispatch] = useDataLayerValue();

  return (
    <FormWrapper title="gender and date of birth">
      <SectionWrapper heading="choose your gender">
        <RadioGroup />
      </SectionWrapper>

      <SectionWrapper heading="click on the button to select your date of birth">
        <DatePicker
          selected={state.dateOfBirth}
          onChange={(date) => dispatch({ type: "set_dateOfBirth", payload: date })}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date("12/31/2004")}
          showYearDropdown
          showMonthDropdown
          useShortMonthInDropdown
          dropdownMode="select"
          fixedHeight
          yearDropdownItemNumber={120}
          customInput={<DateButton />}
        />
      </SectionWrapper>
    </FormWrapper>
  );
};

export default GenderDOB;
