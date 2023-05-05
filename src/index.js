import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./App";
import Bio from "./paths/bio/Bio";
import Music from "./paths/music/Music";
import Contact from "./paths/contact/Contact";
import AsiNo from "./paths/music/pages/AsiNo";
import BT from "./paths/music/pages/BT";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ErrorPage from "./paths/error/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
    errorElement: (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ),
  },
  {
    path: "bio",
    element: (
      <>
        <ScrollToTop />
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
        <ScrollToTop />
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
        <ScrollToTop />
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
        <ScrollToTop />
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
        <ScrollToTop />
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
