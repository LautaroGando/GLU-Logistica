import React from "react";

const Subtitle: React.FC<{ title: string, center?: boolean }> = ({ title, center }) => {
  return (
    <h3
      className={`
      font-bebasNeue text-pcPrincipal text-[24px] leading-[1] ${center && 'text-center'}
      sm:text-[34px]
      md:text-[40px] md:my-[40px]
      lg:text-[44px] lg:${center && 'text-left'}
      xl:text-[48px]
      `}
    >
      {title}
    </h3>
  );
};

export default Subtitle;
