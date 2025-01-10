import React from "react";
import { ITriangleSectionProps } from "./types";

export const TriangleSection: React.FC<ITriangleSectionProps> = ({
  isClose,
}: ITriangleSectionProps) => {
  return (
    <div
      className={`w-[74px] h-[74px] bg-aboutUsGradientBorder absolute ${
        !isClose ? "top-0 right-0" : "rotate-180 left-0 -bottom-24"
      }  hidden md:block lg:w-[285px] lg:h-[285px]`}
    ></div>
  );
};

export default TriangleSection;
