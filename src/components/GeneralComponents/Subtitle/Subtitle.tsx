import React from "react";

const Subtitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h3
      className="
      font-bebasNeue text-pcPrincipal text-[24px] leading-[1] mb-[30px] 
      sm:text-[34px]
      md:text-[40px] md:my-[40px]
      lg:text-[44px]
      xl:text-[48px]
      "
    >
      {title}
    </h3>
  );
};

export default Subtitle;
