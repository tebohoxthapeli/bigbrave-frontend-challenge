import React from "react";

import malHead from "./assets/m-head.png";
import femHead from "./assets/f-head.png";
import oldMalHead from "./assets/old-m-head.png";
import oldFemHead from "./assets/old-f-head.png";

import yogee from "./assets/yoga.png";
import dev from "./assets/developer.png";
import influencer from "./assets/social-media.png";
import chef from "./assets/chef.png";

import pants from "./assets/pants.svg";

const Person = () => {
  return (
    <div className="border border-transparent">
      <div className="relative mx-auto mt-20 w-fit">
        <img
          src={oldFemHead}
          alt=""
          className="absolute left-[116px] -top-[82px] w-[80px]"
        />

        <img
          src={chef}
          alt=""
          className="w-80"
        />

        <img
          src={pants}
          alt=""
          className="absolute left-[104px] top-[135px] w-[138px]"
        />
      </div>
    </div>
  );
};

export default Person;
