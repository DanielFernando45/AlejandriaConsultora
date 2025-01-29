import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-[#1c1c34] min-h-screen flex flex-col justify-center items-center">
      <div>
        <p className="text-white font-extrabold text-[100px] sm:text-[200px] text-center animate-pulse">404</p>
        <p className="text-white uppercase  sm:text-4xl font-bold sm:w-[500px] md:w-auto text-center">
          No se pudo encontrar la página
        </p>
        <Link to={"/"} className="block w-[300px] bg-blue-800 text-center mx-auto py-4 mt-6 text-white font-bold rounded-md">Volver al inico</Link>
      </div>
    </div>
  );
};

export default NotFound;
