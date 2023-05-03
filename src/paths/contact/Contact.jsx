import React from "react";

function Contact() {
  return (
    <div>
      <div className="bg-fixed bg-center bg-no-repeat bg-cover background-music min-h-max bg-bgMusic2">
        <div className="flex items-center justify-center h-20 title-container">
          <h1 className="flex justify-center text-xl text-white font-rock lg:text-3xl md:text-2xl">
            Comunicate con nosotros!
          </h1>
        </div>
        <form className="w-full bg-white h-80"></form>
        <div>
          <div className="flex items-center justify-center h-20 title-container">
            <h1 className="flex justify-center text-xl text-white font-rock lg:text-3xl md:text-2xl">
              Contacto
            </h1>
            <h2 className="text-white">Mail: nadamenos.banda@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
