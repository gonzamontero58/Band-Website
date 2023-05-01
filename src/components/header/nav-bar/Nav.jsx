import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="justify-center hidden h-auto lg:inline-flex ">
        <ul className="flex space-x-4 transition duration-500 font-finger hover:text-slate-400">
          <Link to="/">
            <li className="hover:text-white">INICIO</li>
          </Link>
          <Link to="/bio">
            <li className="hover:text-white">BIO</li>
          </Link>
          <Link to="/music">
            <li className="hover:text-white">MUSICA</li>
          </Link>
          <Link to="/contacto">
            <li className="hover:text-white">CONTACTO</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Nav;
