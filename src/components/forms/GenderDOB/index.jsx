/* eslint-disable react/prop-types */

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DateButton from "./DateButton";
import MaleIcon from "./icons/MaleIcon";
import CheckIcon from "./icons/CheckIcon";
import FemaleIcon from "./icons/FemaleIcon";
import FormWrapper from "../../../FormWrapper";
import SectionWrapper from "../shared/SectionWrapper";

const genderOptions = [
  { title: "male", icon: <MaleIcon /> },
  { title: "female", icon: <FemaleIcon /> },
];

const GenderDOB = ({ gender, dob, updateFields }) => {
  return (
    <FormWrapper title="gender and date of birth">
      <SectionWrapper heading="choose your gender">
        <div className="flex gap-12">
          {genderOptions.map(({ title, icon }) => (
            <label
              className="flex flex-1 cursor-pointer"
              key={title}
            >
              <input
                checked={gender === title}
                type="radio"
                id={title}
                name="gender"
                onChange={(e) =>
                  updateFields({
                    gender: e.target.checked && e.target.id === "male" ? "male" : "female",
                  })
                }
                className="peer hidden"
              />

              <div className="relative mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-transparent bg-slate-800 p-6 hover:bg-slate-700 peer-checked:border-yellow-400">
                {gender === title && <CheckIcon />}
                {icon}
                <h3 className="h-fit text-xl text-slate-300">{title}</h3>
              </div>
            </label>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper heading="click on the button to select your date of birth">
        <DatePicker
          selected={dob}
          onChange={(date) => updateFields({ dob: date })}
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
