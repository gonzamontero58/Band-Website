import React from "react";
import { Link } from "react-router-dom";

function NavModal(props) {
  return (
    <>
      <div className="flex justify-center h-auto ">
        <ul
          className="flex flex-col items-center space-y-10 text-4xl text-black transition duration-500 md:space-y-20 md:text-6xl font-finger hover:text-slate-400"
          onClick={props.handleOnClose}
        >
          <Link to="/">
            <li className="hover:text-red-400">INICIO</li>
          </Link>
          <Link to="/bio">
            <li className="hover:text-red-400">BIO</li>
          </Link>
          <Link to="/music">
            <li className="hover:text-red-400">MUSICA</li>
          </Link>
          <Link to="/contacto">
            <li className="hover:text-red-400">CONTACTO</li>
          </Link>
        </ul>
      </div>
      ;
    </>
  );
}

export default NavModal;
