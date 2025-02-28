import React from "react";
import usersTableHeaders from "@/data/usersData/usersTableHeaders";

const UsersTableHeader = () => {
  return (
    <thead>
      <tr className="border border-admin-letterColor/40">
        {usersTableHeaders.map((header, i) => (
          <th key={i} className="px-4 h-[40px] text-left whitespace-nowrap">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default UsersTableHeader;
