"use client";
import React from "react";
import Whatsapp from "../Icons/Whatsapp";

function WhatsappFixedFoooter() {
  const openWhatsapp = () => {
    const textMessage =
      "Hi, I am Eslam Azmy, I am a Software Engineer, I would like to talk to you about a project";

    const url = `https://wa.me/201114052908?text=${encodeURIComponent(
      textMessage
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="fixed-div cursor-pointer" onClick={openWhatsapp}>
      <span className="text-lg mx-1"> Contact Me</span>
      <Whatsapp />
    </div>
  );
}

export default WhatsappFixedFoooter;
