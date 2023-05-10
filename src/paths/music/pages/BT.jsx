import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import YoutubeEmbed from "../../../components/music/YouTubeEmbed";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function BT() {
  return (
    <>
      <Helmet>
        <title>La Banda Tributo - Nada Menos</title>
      </Helmet>
      <div className="bg-gradient-to-br from-[#404f4a] to-[#829b93]">
        <div className="flex justify-center py-8 text-4xl text-orange-50 md:text-5xl font-bungee lg:text-6xl lg:pb-16 lg:pt-8 underline-offset-8">
          <h1>LA BANDA TRIBUTO</h1>
        </div>
        <Link to="/music">
          <div className="relative hidden return lg:flex" size={30}>
            <div className="absolute rounded-full cursor-pointer text-orange-50 right-5 bottom-10 lg:p-2 hover:bg-black/20 hover:underline underline-offset-4">
              <TiArrowBackOutline size={30} />

              <h1 className="text-orange-50 font-finger ">BACK</h1>
            </div>
          </div>
        </Link>
        <section className="flex flex-col items-center pb-8 text-sm text-center vid-info lg:flex-row justify-evenly lg:py-8 lg:text-base">
          <div className="w-full h-auto video-wrapper lg:w-2/4 ">
            <YoutubeEmbed embedId="bZsNznYuucM" />
          </div>
          <div className="flex justify-center w-full h-auto pt-8 info-wrapper lg:w-2/4 flex-column lg:pt-0">
            <p className="text-center text-orange-50 font-poppins lg:text-left md:text-lg">
              Gonzalo Montero: Voz y Guitarra<br></br>
              Giancarlo Fiordelmondo: Guitarra<br></br>
              Gonzalo Ramos: Bajo<br></br>
              Ignacio Montero: Batería<br></br>
              Martín López: Teclado<br></br>
              <br></br>
              Letra por Gonzalo Montero<br></br>
              Música por Gonzalo Montero, Nada Menos<br></br>
              <br></br>
              Grabación y Producción por Martín López en Reef Music<br></br>
              Masterizado por Nicotina<br></br>
              <br></br>
              Foto: Nicolás Camarotta<br></br>
              Diseño: Gonzalo Ramos<br></br>
            </p>
          </div>
        </section>

        <hr className="my-3 border-solid border-orange-50 "></hr>
        <section className="letra">
          <div className="flex items-center justify-center pt-4 title-container">
            <h2 className="text-3xl text-orange-50 md:text-5xl lg:text-5xl font-bungee">
              Letra:
            </h2>
          </div>
          <div className="flex flex-col py-8 text-sm text-center txtWrapper lg:flex-row justify-evenly lg:text-base md:text-lg">
            <div>
              <p className=" text-orange-50 font-poppins">
                Todo está listo, la Banda Tributo va a comenzar a tocar.
                <br></br>
                Originalidad creo que les falta pero se gozan igual.<br></br>
                No me fascinan. Parece un show de falsa adrenalina.<br></br>
                Aunque tengo que confesar que involuntariamente empiezo a
                bailar...<br></br>
                <br></br>
                Al ritmo de sus covers,<br></br>
                Pidiendo a gritos por otra canción.<br></br>
                Tienen miles de seguidores,<br></br>Y es de eso que hoy en día
                depende la aprobación.<br></br>
              </p>
            </div>

            <div>
              <p className="text-white font-poppins">
                Los van a ver pasar inadvertidos por la gala de la eternidad.
                <br></br>
                ¿A quién van a engañar? No están acá por diversión sino por
                vanidad.<br></br>
                Lazos endebles. Falsa lealtad. ¿Ves lo que lográs?<br></br>
                ¿No ves lo que lográs?<br></br>
                <br></br>
                Saqué todos sus covers,<br></br>
                Creo que lo puedo hacer mucho mejor.<br></br>
                Estás entre sus seguidores,<br></br>Y es que esa devoción reduce
                al mínimo mis chances con vos.<br></br>
              </p>
            </div>
          </div>
        </section>

        <div
          className="flex items-center justify-center pb-6 return lg:hidden "
          size={30}
        >
          <div className="rounded-full cursor-pointer text-orange-50 lg:p-2 hover:bg-black/20 hover:underline underline-offset-4">
            <Link to="/music">
              <TiArrowBackOutline size={30} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BT;
