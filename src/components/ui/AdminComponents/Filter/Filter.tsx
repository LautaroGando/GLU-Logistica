"use client";
import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { IFilterProps } from "./types";
import { IFilter } from "@/interfaces/IFilter";

export const Filter: React.FC<IFilterProps> = ({ filter }: IFilterProps) => {
  const [selectedFilter, setSelectedFilter] =
    useState<SingleValue<IFilter>>(null);

  return (
    <div className="flex justify-between flex-wrap gap-2 z-30 sm:gap-5">
      <div className="flex flex-col w-full gap-2 sm:w-max lg:flex-row lg:gap-3 lg:items-center">
        <div className="min-w-[180px]">
          <Select
            options={filter}
            placeholder="Filtro"
            isClearable
            instanceId="filter-select"
            value={selectedFilter}
            onChange={() => {}}
            styles={{
              control: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                padding: 4,
                backgroundColor: "#FAFAFA",
                borderColor: isFocused ? "#0C1177" : baseStyles.borderColor,
                boxShadow: isFocused
                  ? "0 0 0 1px #0C1177"
                  : baseStyles.boxShadow,
                "&:hover": {
                  borderColor: isFocused ? "#0C1177" : baseStyles.borderColor,
                },
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "#FAFAFA",
                boxShadow: "0 0 3px #000000",
              }),
              option: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                backgroundColor: isFocused ? "#0C117744" : "",
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
};
