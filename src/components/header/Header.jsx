import React from "react";
import "./header.css";
import Sm from "./social-media/Sm";
import Nav from "./nav-bar/Nav";
import Burger from "./nav-burger/Burger";
import { GrClose } from "react-icons/gr";
import NavModal from "./nav-bar/NavModal";
import { useState } from "react";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const handleOnClose = () => {
    setOpenModal(false);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };
  return (
    <>
      <hr></hr>
      <div
        className={`modal fixed bg-white/80 backdrop-blur-sm w-[100%] min-h-screen lg:hidden z-10 ${
          openModal === false ? "hidden" : ""
        }`}
      >
        {/* modal */}
        <div className="absolute cursor-pointer top-3 left-3">
          <GrClose size={21} onClick={handleOnClose} />
        </div>
        <div className="py-[50%] nav-modal">
          <NavModal handleOnClose={handleOnClose} />
        </div>
      </div>
      <div className="flex items-center justify-center h-20 text-white bg-transparent lg:w-full lg:flex-row lg:justify-evenly">
        <Burger handleOpen={handleOpen} />
        <Nav />
        <h1 className="text-4xl font-bungee lg:text-7xl lg:pt-0">NADA MENOS</h1>
        <Sm />
      </div>
      <hr></hr>
    </>
  );
}
export default Header;
