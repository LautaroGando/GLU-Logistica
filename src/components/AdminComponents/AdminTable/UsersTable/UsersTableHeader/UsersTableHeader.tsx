"use client";

import React from "react";
import { motion } from "framer-motion";
import usersTableHeaders from "@/data/usersData/usersTableHeaders";

const theadVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.05,
      staggerChildren: 0.04,
    },
  },
};

const thVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const UsersTableHeader = () => {
  return (
    <motion.thead initial="hidden" animate="visible" variants={theadVariants}>
      <motion.tr layout className="border border-admin-letterColor/40">
        {usersTableHeaders.map((header, i) => (
          <motion.th
            key={i}
            variants={thVariants}
            className="px-4 h-[40px] text-left whitespace-nowrap text-admin-letterColor font-medium tracking-wide"
          >
            {header}
          </motion.th>
        ))}
      </motion.tr>
    </motion.thead>
  );
};

export default UsersTableHeader;
