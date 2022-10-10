/* eslint-disable react/prop-types */

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormWrapper from "../../../FormWrapper";
import MaleIcon from "./icons/MaleIcon";
import CheckIcon from "./icons/CheckIcon";
import DateInput from "./inputs/DateInput";
// import FemaleIcon from "./icons/FemaleIcon";

const GenderDOB = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <FormWrapper title="gender and date of birth">
      <div className="flex gap-12">
        {[0, 0].map((_, i) => (
          <label
            className="flex flex-1 cursor-pointer items-end"
            key={i}
          >
            <input
              type="radio"
              name="male"
              className="hidden"
            />

            <div className="relative mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-orange-500 bg-slate-800 p-8">
              <CheckIcon />
              <MaleIcon />
              <h3 className="h-fit text-2xl text-slate-300">male</h3>
            </div>
          </label>
        ))}
      </div>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        showYearDropdown
        showMonthDropdown
        useShortMonthInDropdown
        dropdownMode="select"
        fixedHeight
        yearDropdownItemNumber={120}
        customInput={<DateInput />}
      />
    </FormWrapper>
  );
};

export default GenderDOB;
