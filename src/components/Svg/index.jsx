import React from "react";
import { node, string } from "prop-types";

const Svg = ({ svg, alt }) => {
  return (
    <img
      src={svg}
      alt={alt || ""}
      className="h-full w-full"
    />
  );
};

Svg.propTypes = {
  svg: node.isRequired,
  alt: string,
};

export default Svg;
