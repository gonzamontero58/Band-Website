import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contacto - Nada Menos</title>
      </Helmet>
      <div className="bg-center bg-no-repeat bg-cover lg:bg-fixed min-h-max bg-bgMusic2">
        <div className="flex items-center justify-center h-20 title-container">
          <h1 className="flex justify-center text-xl text-white font-rock lg:text-3xl md:text-2xl">
            Comunicate con nosotros!
          </h1>
        </div>
        <section className="w-full bg-transparent h-[37rem] lg:h-[38rem]">
          <div className="bg-black h-[12.6rem] clip7">
            <div className="flex flex-col text-white">
              <h1 className="pt-10 text-3xl font-bold text-center font-bungee md:text-5xl">
                Mail:
              </h1>
              <p className="px-10 py-10 text-center lg:px-40 font-poppins md:text-lg">
                nadamenos.music@gmail.com
              </p>
            </div>
          </div>
          <div className="bg-black h-[12.6rem] clip7">
            <div className="flex flex-col text-white">
              <h1 className="py-5 text-3xl font-bold text-center font-bungee md:text-5xl">
                Instagram:
              </h1>
              <div className="flex flex-col items-center justify-center w-auto gap-5">
                <Link to="https://www.instagram.com/na.da.me.nos/">
                  <button class="bg-black font-bungee font-bold text-white hover:bg-white hover:text-black transition-all py-1 px-2 border-[0.5px] border-white rounded shadow">
                    Nada Menos
                  </button>
                </Link>
                <Link to="https://www.instagram.com/gonza.mont3/">
                  <button class="bg-black font-bungee font-bold text-white hover:bg-white hover:text-black transition-all  py-1 px-2 border-[0.5px] border-white rounded shadow">
                    Gonzalo Montero
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-transparent h-[12.6rem] clip7">
            <div
              className="flex items-center justify-center pb-6 return lg:hidden "
              size={30}
            >
              <div className="py-20 text-white rounded-full cursor-pointer lg:p-2 hover:bg-black/20 hover:underline underline-offset-4 md:py-16">
                <Link to="/">
                  <TiArrowBackOutline size={30} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
