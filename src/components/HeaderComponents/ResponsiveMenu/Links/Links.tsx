"use client";

import { useMenu } from "@/context/MenuContext/MenuContext";
import { ILink } from "@/interfaces/ILink";
import { links } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useSize } from "@/hooks/useSize";

export const Links: React.FC = () => {
  const { menu, handleCloseMenu } = useMenu();
  const size = useSize();

  useEffect(() => {
    if (size.size > 768) handleCloseMenu();
  }, [size, handleCloseMenu]);

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          key="menu-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full h-screen bg-black/80 left-0 top-0"
        >
          <motion.div
            key="menu-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="h-screen fixed right-0 top-0 flex flex-col overflow-hidden z-50 bg-pcSecondary w-full max-w-[380px]"
          >
            <div className="w-full h-[35%] flex justify-center items-center">
              <Image
                className="min-w-auto h-auto"
                src="/assets/images/Header/logo.svg"
                alt="Vector del camion"
                width={200}
                height={200}
              />
            </div>

            <div className="w-full h-[65%] text-pcPrincipal flex flex-col items-center gap-5 font-bold sm:text-lg">
              {links.map((link: ILink, i: number) => (
                <div
                  className="min-w-[330px] overflow-hidden text-left border-l-4 pl-3 border-pcPrincipal relative"
                  key={i}
                >
                  <Link
                    onClick={handleCloseMenu}
                    className="transition-all duration-500 hover:pl-3"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Links;
