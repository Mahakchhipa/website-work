// components/EmailIcon.js
"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

const Email = () => {
  const handleEmailClick = () => {
    const emailAddress = "sales@techanicinfotech.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="fixed bottom-0 left-0 m-5 z-10 flex flex-col  gap-4">
      <div
        onClick={handleEmailClick}
        className=" w-fit cursor-pointer animate-bounce rounded-xl bg-red-500"
        style={{ transition: "all 0.3s ease" }}
      >
        <Image
          src="icons/email-icon.png"
          width={50}
          height={50}
           
          alt="Email Icon"

        />
      </div>
      <div className="rounded-full cursor-pointer animate-bounce">
        <a href="https://api.whatsapp.com/send?phone=7222001000">
          {" "}
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', width:50, height: 50 }} />
        </a>
      </div>
    </div>
  );
};

export default Email;
