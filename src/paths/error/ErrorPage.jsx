import React from "react";

function ErrorPage() {
  return (
    <div className="min-h-[40vh] lg:min-h-screen bg-center bg-no-repeat bg-cover bg-error">
      <section className="w-full bg-transparent h-[43rem]">
        <div className=" h-[12.6rem] flex flex-col items-center justify-center">
          <div className="text-white ">
            <h1 className="text-5xl font-bold text-center font-bungee md:text-5xl">
              ¡ERROR 404!
            </h1>
          </div>
        </div>
        <div className="h-[12.6rem] ">
          <div className="flex flex-col text-white">
            <h1 className="py-5 text-3xl font-bold text-center font-bungee md:text-5xl">
              Click{" "}
              <a href="/">
                <u>aqui</u>
              </a>{" "}
              para regresar
            </h1>
          </div>
        </div>
        <div className="bg-transparent h-[12.6rem] clip7"></div>
      </section>
    </div>
  );
}
export default ErrorPage;
