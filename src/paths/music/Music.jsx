import React from "react";
import "./music.css";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

function Music() {
  return (
    <>
      <div className="md:h-[58.5rem] lg:h-[41.5rem]">
        <div className="bg-fixed bg-center bg-no-repeat bg-cover background-music min-h-max lg:bg-bgMusic bg-bgMusic2">
          <div className="flex items-center justify-center h-20 ">
            <h1 className="flex justify-center text-xl text-white lg:text-3xl md:text-2xl font-rock">
              SINGLES
            </h1>
          </div>
          <div className="flex items-center justify-center h-10 text-xl lg:hidden font-bungee ">
            <h1>Click para mas info!</h1>
          </div>
          <div className="flex flex-col items-center w-full h-auto gap-10 py-6 imgsWrapper lg:flex-row justify-evenly">
            <div className="transition duration-300 transform opacity-100 hover:scale-110">
              <Link to="/music/info-asi-no">
                <img
                  className="w-64 h-64 lg:h-96 lg:w-96 "
                  src="./imgs/Tapa_Asi_No.jpg"
                  alt="asino"
                />
              </Link>
            </div>
            <div className="transition duration-300 transform opacity-100 hover:scale-110">
              <Link to="/music/info-la-banda-tributo">
                <img
                  className="w-64 h-64 lg:h-96 lg:w-96"
                  src="./imgs/Tapa_BT.jpg"
                  alt="bt"
                />
              </Link>
            </div>
          </div>

          <div
            className="flex items-center justify-center pb-6 return lg:hidden md:h-[13rem] md:pb-0 "
            size={30}
          >
            <div className="text-white rounded-full cursor-pointer lg:p-2 hover:bg-black/20 hover:underline underline-offset-4 md:py-[7rem]">
              <Link to="/">
                <TiArrowBackOutline size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
