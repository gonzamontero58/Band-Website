import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import YoutubeEmbed from "../../../components/music/YouTubeEmbed";
import { Link } from "react-router-dom";
function AsiNo() {
  return (
    <>
      <div className="bg-gradient-to-br from-neutral-900 to-pink-900">
        <div className="flex justify-center py-8 text-4xl text-pink-200 md:text-5xl lg:text-6xl font-bungee lg:pb-16 lg:pt-8 underline-offset-8">
          <h1>ASI NO</h1>
        </div>
        <Link to="/music">
          <div className="relative hidden return lg:flex" size={30}>
            <div className="absolute text-pink-300 rounded-full cursor-pointer right-5 bottom-10 lg:p-2 hover:bg-black/20 hover:underline underline-offset-4">
              <TiArrowBackOutline size={30} />
              <h1 className="text-pink-300 font-finger ">BACK</h1>
            </div>
          </div>
        </Link>
        <section className="flex flex-col items-center pb-8 text-sm text-center vid-info lg:flex-row justify-evenly lg:py-8 lg:text-base">
          <div className="w-full h-auto video-wrapper lg:w-2/4 ">
            <YoutubeEmbed embedId="vKXWZ9S1W9o" />
          </div>
          <div className="flex justify-center w-full h-auto pt-8 info-wrapper lg:w-2/4 flex-column lg:pt-0">
            <p className="text-center text-pink-300  font-poppins lg:text-left md:text-lg">
              Gonzalo Montero: Voz y Guitarra<br></br>
              Giancarlo Fiordelmondo: Guitarra<br></br>
              Gonzalo Ramos: Bajo<br></br>
              Ricardo Ávila: Batería<br></br>
              Agustín Duarte: Teclado<br></br>
              <br></br>
              Letra y Música por Gonzalo Montero<br></br>
              <br></br>
              Grabación y producción por Martín López en Reef Music<br></br>
              Masterizado por Nicotina<br></br>
              <br></br>
              Foto y diseño por Ricardo Ávila Y Gonzalo Ramos<br></br>
            </p>
          </div>
        </section>

        <hr className="my-3 border-pink-400 border-solid "></hr>
        <section className="letra">
          <div className="flex items-center justify-center pt-4 title-container">
            <h2 className="text-3xl font-bold lg:text-5xl font-bungee text-rose-200 md:text-5xl">
              Letra:
            </h2>
          </div>
          <div className="flex flex-col py-8 text-sm text-center txtWrapper lg:flex-row justify-evenly lg:text-base md:text-lg">
            <div>
              <p className="text-pink-400  font-poppins">
                Cruzaste con luz roja, haciendo lo que se te antoja,<br></br>y
                ahora querés ponerme un collar.<br></br>
                Yo digo: "¡No me pidas tanto, la carga que levanto<br></br>
                probablemente me va a aplastar!"<br></br>
                <br></br>
                Así no puedo quererte. ¡Así no puedo!<br></br>
                Me estoy dejando para seguir tu juego.<br></br>
                Así no puedo entenderte. ¡Así no puedo!<br></br>
                Con tantas indirectas; ¿No ves que me enredo?<br></br>
                <br></br>
                Especialista en hacerse vista,<br></br>
                mi musa es un fantasma virtual.<br></br>
                La forma en que maneja el viento a favor de sus sentimientos
                <br></br>
                es lo que la hace tan especial.<br></br>
              </p>
            </div>

            <div>
              <p className="text-pink-400  font-poppins">
                Así no puedo quererte. ¡Así no puedo!<br></br>
                Me estoy dejando para seguir tu juego.<br></br>
                Así no puedo entenderte. ¡Así no puedo!<br></br>
                Con tantas indirectas; ¿No ves que me enredo?<br></br>
                <br></br>
                ...con tantas indirectas...<br></br>
                <br></br>
                Me hacés sentir como un turista en mi propia ciudad.<br></br>
                La indecisión es permanente.<br></br>
                ¿Cómo puedo dormir sabiendo que guardás<br></br>
                las llaves de mi mente en tu placard?<br></br>
              </p>
            </div>
          </div>
        </section>
        <div
          className="flex items-center justify-center pb-6 return lg:hidden "
          size={30}
        >
          <div className="text-pink-300 rounded-full cursor-pointer lg:p-2 hover:bg-black/20 hover:underline underline-offset-4">
            <Link to="/music">
              <TiArrowBackOutline size={30} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AsiNo;
