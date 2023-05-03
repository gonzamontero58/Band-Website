import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Carousel from "./components/home/Carousel";

function App() {
  return (
    <>
      <Header />
      <section>
        <div className="background">
          {/* <div className="cont-main h-[67.5rem]"></div> */}
          <div className="flex items-center justify-center bg-center bg-no-repeat bg-cover lg:min-h-screen bg-bgMain lg:bg-fixed min-h-[78vh]">
            {/*             <h1 className="text-6xl font-bold text-white font-finger">
              NADA MENOS
            </h1> */}
          </div>
        </div>
        <Carousel autoSlide={true} />
      </section>
      <Footer />
    </>
  );
}

export default App;
