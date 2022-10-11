import React from "react";

import malHead from "./assets/m-head.png";
import femHead from "./assets/f-head.png";
import oldMalHead from "./assets/old-m-head.png";
import oldFemHead from "./assets/old-f-head.png";

import chef from "./assets/chef.png";
import yogee from "./assets/yoga.png";
import dev from "./assets/developer.png";
import influencer from "./assets/social-media.png";

import Pants from "./Pants";

import { useDataLayerValue } from "../../context/DataLayer";

const Person = () => {
  const [{ gender, occupation, firstName, surname, favouriteColour, dateOfBirth }] =
    useDataLayerValue();

  const age = new Date().getFullYear() - dateOfBirth.getFullYear();

  let head;

  if (gender === "male") {
    if (age >= 50) {
      head = oldMalHead;
    } else {
      head = malHead;
    }
  } else {
    if (age >= 50) {
      head = oldFemHead;
    } else {
      head = femHead;
    }
  }

  let torso;

  switch (occupation) {
    case "chef":
      torso = chef;
      break;

    case "yogee":
      torso = yogee;
      break;

    case "developer":
      torso = dev;
      break;

    default:
      torso = influencer;
  }

  return (
    <div className="relative h-[40rem] border border-transparent">
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-gray-500" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <p className="text-lg font-semibold text-yellow-400">
          Hey, my name is {firstName} {surname}!
        </p>

        <p className="font-light text-slate-300">
          I am a {age}-year-old {occupation}
        </p>
      </div>

      <div className="relative mx-auto mt-20 w-fit">
        <img
          src={head}
          alt=""
          className="absolute left-[116px] -top-[82px] w-[80px]"
        />

        <img
          src={torso}
          alt=""
          className="w-80"
        />

        <div className="absolute left-[104px] top-[133px] w-[140px]">
          <Pants fill={favouriteColour} />
        </div>
      </div>
    </div>
  );
};

export default Person;
