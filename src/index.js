import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Bio from "./paths/bio/Bio";
import Music from "./paths/music/Music";
import Contact from "./paths/contact/Contact";
import AsiNo from "./paths/music/pages/AsiNo";
import BT from "./paths/music/pages/BT";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    /*     errorElement: (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ), */
  },
  {
    path: "bio",
    element: (
      <>
        <Header />
        <Bio />
        <Footer />
      </>
    ),
  },
  {
    path: "music",
    element: (
      <>
        <Header />
        <Music />
        <Footer />
      </>
    ),
  },
  {
    path: "music/info-asi-no",
    element: (
      <>
        <Header />
        <AsiNo />
        <Footer />
      </>
    ),
  },
  {
    path: "music/info-la-banda-tributo",
    element: (
      <>
        <Header />
        <BT />
        <Footer />
      </>
    ),
  },
  {
    path: "/contacto",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
