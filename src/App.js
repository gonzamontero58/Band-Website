import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Carousel from "./components/home/Carousel";
import YoutubeEmbed from "./components/music/YouTubeEmbed";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <section>
        <div className="background">
          <div className="flex items-center justify-center bg-center bg-no-repeat bg-cover lg:min-h-screen bg-bgMain lg:bg-fixed min-h-[78vh]"></div>
        </div>
        <div>
          <h1 className="pt-10 pb-5 text-3xl font-bold text-center text-orange-50 font-bungee md:text-5xl">
            Asi No
          </h1>
        </div>
        <div className="w-full h-auto video-wrapper lg:w-2/4 ">
          <YoutubeEmbed embedId="vKXWZ9S1W9o" />
        </div>
        <div className="flex items-center justify-center pt-5">
          <Link to="/music/info-asi-no">
            <button class="bg-black font-bold font-bungee text-white  py-1 px-2 border-[0.5px] border-white rounded shadow">
              CLICK PARA MAS INFO!
            </button>
          </Link>
        </div>
        <div>
          <h1 className="pt-10 pb-5 text-3xl font-bold text-center text-orange-50 font-bungee md:text-5xl">
            La Banda Tributo
          </h1>
        </div>
        <div className="w-full h-auto video-wrapper lg:w-2/4 ">
          <YoutubeEmbed embedId="bZsNznYuucM" />
        </div>
        <div className="flex items-center justify-center pt-5">
          <Link to="/music/info-la-banda-tributo">
            <button class="bg-black font-bungee font-bold text-white  py-1 px-2 border-[0.5px] border-white rounded shadow">
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
