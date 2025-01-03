import { ITimeline } from "@/interfaces/ITimeline";
import { timeline } from "@/utils/timeline-info";
import React from "react";

export const Timeline: React.FC = () => {
  return (
    <div className="flex justify-between lg:flex-col lg:w-[50%] lg:justify-center">
      {timeline.map((timeline: ITimeline, i: number) => (
        <div className="flex lg:flex-col lg:items-center" key={i}>
          <div className="flex flex-col items-center">
            <h3 className="text-pcPrincipal font-bold sm:text-2xl lg:text-[28px] xl:text-[32px]">
              {timeline.age}
            </h3>
            <h4 className="text-sc text-xs text-center sm:text-base lg:text-xl xl:text-2xl">
              {timeline.text}
            </h4>
          </div>
          {i < 3 && (
            <div className="w-2 h-[2px] bg-pcPrincipal mt-3 sm:w-3 md:w-4 lg:w-[2px] lg:h-16"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
