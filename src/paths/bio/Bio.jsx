import React from "react";
import "./bio.css";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

function Bio() {
  return (
    <>
      <div className="min-h-[40vh] lg:min-h-screen bg-center bg-no-repeat bg-cover bg-prlx2 clip3 "></div>
      <div className="flex flex-col text-white">
        <p className="px-10 py-10 text-justify lg:px-40 font-roboto md:text-lg">
          Luego de haber conformado dos bandas anteriores (Overlook, 2016-2018 y
          Nuevos Amigos, 2019-2020), Gonzalo Montero (compositor, voz y bajo),
          Giancarlo Fiordelmondo (guitarra) e Ignacio Montero (batería) integran
          Nada Menos, que surge como un proyecto para plasmar esas canciones
          compuestas que nunca salieron a la luz más allá de presentaciones en
          vivo. Tras la grabación de sus primeros dos singles, "Asi No" y "La
          Banda Tributo" (con la participación de Gonzalo Ramos y Ricardo
          Ávila), el trío se encuentra trabajando en la grabación de su primer
          EP.
        </p>
      </div>

      <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-prlx3 h-96 clip4">
        <h1 className="text-lg font-bold text-white md:text-4xl lg:text-6xl font-bungee ">
          INTEGRANTES:
        </h1>
      </div>

      <div className="flex justify-center text-white ">
        <h2 className="p-10 text-sm font-bold md:text-2xl lg:text-4xl font-rock">
          GONZALO MONTERO
        </h2>
      </div>
      <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-bgGonza clip5"></div>

      <div className="flex justify-center text-white">
        <h2 className="p-10 text-sm font-bold md:text-2xl lg:text-4xl font-rock">
          GIANCARLO FIORDELMONDO
        </h2>
      </div>
      <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-bgGianca clip6"></div>

      <div className="flex justify-center text-white">
        <h2 className="p-10 text-sm font-bold md:text-2xl lg:text-4xl font-rock">
          IGNACIO MONTERO
        </h2>
      </div>
      <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-prlx6 lg:bg-bgNachi lg:prueba3"></div>

      <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-prlx7 h-96 ">
        <h1 className="text-lg font-bold text-white md:text-4xl lg:text-6xl font-bungee ">
          HISTORIA:
        </h1>
      </div>
      <div className="flex flex-col text-white">
        <h1 className="pt-10 text-3xl font-bold text-center font-bungee md:text-5xl">
          Overlook
        </h1>
        <p className="px-10 py-10 text-justify lg:px-40 font-poppins md:text-lg">
          A fines del año 2016, Gonzalo Montero, Giancarlo Fiordelmondo, Ignacio
          Montero y Gonzalo Ramos forman Overlook, una banda cuyo repertorio
          estaba basado en covers de bandas referentes para ellos como lo eran
          The Strokes y Arctic Monkeys. Con una selección de canciones lo
          bastante extensa y explosiva como para abarcar un show, deciden salir
          a tocar por distintas salas y bares existentes en ese momento
          (Amarcord, BJ Sala, Francesco Bar, entre otros).
        </p>
      </div>
      <div className="flex items-center justify-center bg-center bg-no-repeat bg-cover bg-overlook1 h-96 clip4 lg:bg-fixed"></div>
      <div className="flex flex-col text-white">
        <p className="px-10 py-10 text-justify lg:px-40 font-poppins md:text-lg">
          Llegado el 2017, Ricardo Ávila se une a la banda reemplazando a
          Ignacio en la batería, y aportando con ímpetu su bagaje de
          experiencias en bandas anteriores. El cuarteto continúa con sus
          presentaciones en vivo, llegando a compartir escenario con Rolo Suzacq
          de invitado en los teclados. Esa presentación recibió un like del
          mismísimo Geoff Emerick, el legendario Ingeniero de sonido de The
          Beatles. Es aquí cuando comienzan a surgir las primeras versiones de
          las canciones propias "Asi No", "La banda tributo" y "Máquina de
          Decepciones", que serían integradas al repertorio.
        </p>
      </div>
      <div className="flex items-center justify-center bg-center bg-no-repeat bg-cover bg-overlook2 h-[17rem] lg:h-96 clip3 lg:bg-fixed"></div>
      <div className="flex flex-col text-white">
        <h1 className="pt-10 text-3xl font-bold text-center font-bungee md:text-5xl">
          Nuevos Amigos
        </h1>
        <p className="px-10 py-10 text-justify lg:px-40 font-poppins md:text-lg">
          Pasado el año 2018, y tras una serie de diferencias con el resto de
          los integrantes, Gonzalo Montero decide poner fin a la continuidad de
          la banda para buscar nuevos horizontes con un grupo dedicado
          exclusivamente a componer y presentar canciones propias. Para eso, se
          embarcó en primer lugar en crear unos cuantos temas, y una vez
          terminado el trabajo, comenzó a buscar músicos que lo acompañaran. De
          esta manera conoció a Lucas Nocetti (bajo) y Roberto Castro (Batería),
          y tras el regreso de Giancarlo (guitarra), nacieron los Nuevos Amigos.
        </p>
      </div>
      <div className="flex items-center justify-center bg-center bg-no-repeat bg-cover h-[17rem] bg-nuevos1 lg:h-96 clip5 lg:bg-fixed"></div>
      <div className="flex flex-col text-white">
        <p className="px-10 py-10 text-justify lg:px-40 font-poppins md:text-lg">
          Luego de un segundo semestre de 2019 dedicado a perfeccionar el
          setlist de temas propios, Nuevos Amigos se presenta en el bar Tundra
          junto con Débris el 29 de Febrero de 2020, con una cálida recepción de
          los presentes. Restaban días para el comienzo de la pandemia en
          Uruguay. Ese año vuelven a tocar y ensayar contadas veces debido a la
          emergencia sanitaria, y el grupo se disolvería hacia principios del
          año 2021.
        </p>
      </div>
      <div className="flex items-center justify-center bg-center bg-no-repeat bg-cover bg-nuevos2 h-[18rem] lg:h-96 clip6 lg:bg-fixed"></div>
      <div className="flex flex-col text-white">
        <h1 className="pt-10 text-3xl font-bold text-center font-bungee md:text-5xl">
          Nada Menos
        </h1>
        <p className="px-10 py-10 text-justify lg:px-40 font-poppins md:text-lg">
          A mediados de 2021, los integrantes del viejo Overlook vuelven a los
          ensayos para preparar la grabación de una de las canciones compuestas
          en esa época. Es así como, de la mano de Tincho López y Agustín Duarte
          (guitarra y percusiones de Márama respectivamente), graban el primer
          single ("Así No") y lo lanzan bajo el nombre del nuevo proyecto
          musical: Nada Menos. Sin embargo, en ese momento la banda no tenía una
          formación fija para las presentaciones en vivo. En busca de ese
          objetivo, se da el regreso de Ignacio Montero en la batería, y Gonzalo
          pasa de tocar una de las guitarras a tocar el bajo mientras continúa
          como voz principal. Giancarlo completa la formación como guitarra
          solista.
        </p>
      </div>
      <div className="flex items-center justify-center bg-center bg-no-repeat bg-cover bg-nm1 h-[19rem] lg:h-96 clip7"></div>
      <div className="flex flex-col text-white">
        <p className="px-10 py-10 text-justify lg:px-40 font-poppins md:text-lg">
          A fines de Agosto de 2022, y con la participación de Gonzalo Ramos,
          lanzan su segundo single, "La Banda Tributo", esta vez producido
          exclusivamente por Tincho López. Ese mismo año hacen una breve
          presentación en el bar Sambó de Ciudad de la Costa, que anticipa el
          material que se viene y en el que se encuentran trabajando para
          presentar en vivo en este 2023...
        </p>
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
