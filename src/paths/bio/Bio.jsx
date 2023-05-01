import React from "react";
import "./bio.css";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

function Bio() {
  return (
    <>
      {/*       <div className="flex flex-col items-center justify-center min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-prlx1">
        <h1 className="text-xl font-bold text-white lg:text-6xl font-finger">
          NADA MENOS
        </h1>
      </div> */}
      <div className="min-h-[40vh] lg:min-h-screen bg-center bg-no-repeat bg-cover bg-prlx2 clip3 "></div>
      <div className="flex flex-col text-white">
        <p className="px-10 py-10 text-justify lg:px-40 font-roboto">
          Luego de haber conformado dos bandas anteriores (Overlook, 2016-2018 y
          Nuevos Amigos, 2019-2020), Gonzalo Montero (compositor, cantante y
          bajo), Giancarlo Fiordelmondo (guitarra) e Ignacio Montero (batería)
          integran Nada Menos, que surge como un proyecto para plasmar esas
          canciones compuestas que nunca salieron a la luz más allá de
          presentaciones en vivo. Tras la grabación de sus primeros dos singles,
          Asi No y La Banda Tributo (con la participación de Gonzalo Ramos y
          Ricardo Ávila), el trío se encuentra trabajando en la grabación de su
          primer EP.
        </p>
      </div>

      <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-prlx3 h-96 clip4">
        <h1 className="font-bold text-white text:sm lg:text-6xl font-finger ">
          INTEGRANTES:
        </h1>
      </div>

      <div className="flex justify-center text-white ">
        <h2 className="p-10 text-sm font-bold lg:text-4xl font-rock">
          GONZALO MONTERO
        </h2>
      </div>
      <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-bgGonza clip5"></div>

      <div className="flex justify-center text-white">
        <h2 className="p-10 text-sm font-bold lg:text-4xl font-rock">
          GIANCARLO FIORDELMONDO
        </h2>
      </div>
      <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-bgGianca clip6"></div>

      <div className="flex justify-center text-white">
        <h2 className="p-10 text-sm font-bold lg:text-4xl font-rock">
          IGNACIO MONTERO
        </h2>
      </div>
      <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-prlx6 lg:prueba3"></div>

      <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-prlx3 h-96 clip4">
        <h1 className="font-bold text-white text:sm lg:text-6xl font-finger ">
          HISTORIA
        </h1>
      </div>

      <div
        className="flex items-center justify-center pb-6 return lg:hidden "
        size={30}
      >
        <div className="text-white rounded-full cursor-pointer lg:p-2 hover:bg-black/20 hover:underline underline-offset-4">
          <Link to="/">
            <TiArrowBackOutline size={30} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Bio;
