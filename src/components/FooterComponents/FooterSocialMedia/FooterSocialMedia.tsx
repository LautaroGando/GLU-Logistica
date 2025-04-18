import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const socialMediaLinks = [
  {
    icon: faInstagram,
    link: "https://www.instagram.com/logisticaglu?igsh=MXZkNnY2bWh4NW51Zw==",
    color: "hover:text-pink-500",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/company/107006755/admin/dashboard/",
    color: "hover:text-blue-600",
  },
  {
    icon: faFacebook,
    link: "https://www.facebook.com/profile.php?id=61575198383170&locale=es_LA",
    color: "hover:text-blue-500",
  },
  {
    icon: faTiktok,
    link: "https://www.tiktok.com/@logistica.glu?_t=ZM-8va5QNivnLK&_r=1",
    color: "hover:text-black",
  },
  {
    icon: faWhatsapp,
    link: "https://api.whatsapp.com/send/?phone=541171826912&text&type=phone_number&app_absent=0",
    color: "hover:text-green-500",
  },
];

const FooterSocialMedia = () => {
  return (
    <div className="flex justify-between mt-4 px-[10%] sm:mt-6 sm:justify-start sm:px-0 sm:gap-6 lg:mt-0">
      {socialMediaLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center border border-pcSecondary rounded-[100%] w-[40px] h-[40px] transition-all duration-300 
            hover:scale-110 ${item.color} hover:bg-pcSecondary
            lg:w-[60px] lg:h-[60px]
            `}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-[25px] size-[25px] lg:text-[36px] lg:size-[36px]"
          />
        </a>
      ))}
    </div>
  );
};

export default FooterSocialMedia;
