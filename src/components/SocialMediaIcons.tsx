import React from "react";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";

export const SocialMediaIcons = React.memo(() => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={Linkedin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter" src={Twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook" src={Facebook} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Instagram" src={Instagram} />
      </a>
    </div>
  );
});
