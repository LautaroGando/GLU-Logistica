"use client";

import { ITimeline } from "@/interfaces/ITimeline";
import { timeline } from "@/utils/timeline-info";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useSize } from "@/hooks/useSize";

export const Timeline: React.FC = () => {
  const { size } = useSize();
  const [isVertical, setIsVertical] = useState<boolean | null>(null);

  useEffect(() => {
    setIsVertical(size >= 1024);
  }, [size]);

  if (isVertical === null) return null;

  return (
    <div className="w-full overflow-hidden flex justify-center self-end -z-10 lg:h-full">
      <motion.div
        key={isVertical ? "vertical" : "horizontal"}
        initial={size >= 1024 ? { y: "100%" } : { x: "100%" }}
        animate={size >= 1024 ? { y: "-100%" } : { x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        }}
        className="flex justify-between lg:flex-col lg:w-[50%] lg:justify-center"
      >
        {timeline.map((time: ITimeline, i: number) => (
          <div className="flex lg:flex-col lg:items-center" key={i}>
            <div className="flex flex-col items-center">
              <h3 className="text-pcPrincipal font-bold sm:text-2xl lg:text-[28px] xl:text-[32px]">
                {time.age}
              </h3>
              <h4 className="text-sc text-xs text-center sm:text-base lg:text-xl xl:text-2xl">
                {time.text}
              </h4>
            </div>
            {i < timeline.length - 1 && (
              <div className="min-w-2 h-[2px] bg-pcPrincipal mt-3 sm:w-3 md:w-4 lg:min-w-1 lg:max-w-1 lg:h-16"></div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
