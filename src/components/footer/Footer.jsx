import React from "react";
import "./footer.css";
import SmFt from "./social-media-ft/Sm_ft";

function Footer() {
  return (
    <div className="w-full h-20 text-white bg-transparent">
      <hr></hr>
      <SmFt />
      <div className="flex justify-center text-sm md:text-base lg:py-10 font-roboto ">
        <p className="">© 2023 Nada Menos </p>
        <span className="px-1"> | </span>
        <a
          href="https://www.instagram.com/gonza.mont3/"
          className="hover:underline"
        >
          By: Gonzalo Montero Schwarz
        </a>
      </div>
    </div>
  );
}
export default Footer;
