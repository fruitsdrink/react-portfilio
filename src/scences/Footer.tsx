import React from "react";
import { SocialMediaIcons } from "../components/SocialMediaIcons";

export const Footer = React.memo(() => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            JANE ESPER
          </p>
          <p className="font-playfair text-md text-yellow">
            &copy;2022 ESPER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
