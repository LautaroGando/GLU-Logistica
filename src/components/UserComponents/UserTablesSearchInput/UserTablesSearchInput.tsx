import React from "react";
import { IUserTablesSearchInputProps } from "./types";

export const UserTablesSearchInput: React.FC<IUserTablesSearchInputProps> = ({
  value,
  onChange,
  placeholder = "Buscar...",
}) => {
  return (
    <div className="w-full lg:max-w-xs">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};
