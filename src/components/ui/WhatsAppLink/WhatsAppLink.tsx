import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const WhatsAppLink: React.FC = () => {
  return (
    <Link
      href="https://wa.me/541168605718"
      target="_blank"
      className="sticky w-11 h-11 bg-pcSecondary text-pcPrincipal bottom-4 left-[100%] m-4 text-5xl flex justify-center items-center rounded-full z-10"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </Link>
  );
};

export default WhatsAppLink;
