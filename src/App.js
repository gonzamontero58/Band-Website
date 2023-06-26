import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Carousel from "./components/home/Carousel";
import YoutubeEmbed from "./components/music/YouTubeEmbed";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Header />
      <Helmet>
        <title>Inicio - Nada Menos</title>
      </Helmet>
      <section>
        <div className="background">
          <div className="flex items-center justify-center bg-center bg-no-repeat bg-cover lg:min-h-screen bg-bgMain lg:bg-fixed min-h-[78vh]"></div>
        </div>
        <div>
          <h1 className="pt-5 pb-5 text-3xl font-bold text-center text-orange-50 font-bungee md:text-5xl">
            Novedades
          </h1>
          <hr></hr>
          <h1 className="pt-5 pb-5 text-2xl font-bold text-center text-orange-50 font-bungee md:text-4xl">
            Nada Menos + Mateo Roswell - Ducón
          </h1>
        </div>
        <div className="min-h-[58vh] md:min-h-[81vh] lg:min-h-screen bg-center bg-no-repeat bg-cover bg-afiche1"></div>
        <div className="flex flex-col text-white">
          <p className="px-10 py-10 text-justify lg:text-center font-roboto md:text-lg lg:text-2xl">
            Este viernes 30/6 despedimos el mes en lo que va a ser nuestro
            primer toque 🔥🔥🔥<br></br>
            La fecha la vamos a compartir con Mateo Roswell y su banda en Bar
            Ducón a partir de las 21:00 hs⏰
          </p>
        </div>
        <div>
          <h1 className="pt-10 pb-5 text-3xl font-bold text-center text-orange-50 font-bungee md:text-5xl">
            Asi No
          </h1>
        </div>
        <div className="w-full h-auto lg:px-[25%]  ">
          <YoutubeEmbed embedId="vKXWZ9S1W9o" />
        </div>
        <div className="flex items-center justify-center pt-5">
          <Link to="/music/info-asi-no">
            <button class="bg-black font-bold font-bungee text-white  py-1 px-2 border-[0.5px] hover:bg-white hover:text-black transition-all border-white rounded shadow">
              CLICK PARA MAS INFO!
            </button>
          </Link>
        </div>
        <div>
          <h1 className="pt-10 pb-5 text-3xl font-bold text-center text-orange-50 font-bungee md:text-5xl">
            La Banda Tributo
          </h1>
        </div>
        <div className="w-full h-auto lg:px-[25%] ">
          <YoutubeEmbed embedId="bZsNznYuucM" />
        </div>
        <div className="flex items-center justify-center pt-5">
          <Link to="/music/info-la-banda-tributo">
            <button class="bg-black font-bungee font-bold hover:bg-white hover:text-black transition-all  text-white  py-1 px-2 border-[0.5px] border-white rounded shadow">
              CLICK PARA MAS INFO!
            </button>
          </Link>
        </div>
        <Carousel autoSlide={true} />
      </section>
      <Footer />
    </>
  );
}

export default App;
