import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu_icon from "../assets/icons/menu-icon.svg";
import logo from "../assets/images/logo.png";
import whatssap from "../assets/icons/whatss.png";
import iconAleja from "../assets/icons/alejaIcon.png";
const LINKS = [
  { id: 1, path: "", title: "Consultoría" },
  { id: 2, path: "", title: "Cursos" },
  { id: 3, path: "/nosotros", title: "Nosotros" },
  { id: 4, path: "", title: "Promociones" }, // Cambiado path a vacío para el menú desplegable
  { id: 5, path: "/centro-recursos", title: "Centro de recursos" },
  { id: 6, path: "/blog", title: "Blog" },
];

const NavBar = ({ handleOpenSidebar, handleContact }) => {
  const [showOptions, setShowOption] = useState(false);
  const [showPromoOptions, setShowPromoOption] = useState(false);


  const handleIntranet = () => {
    window.location.href = "https://intranet.alejandriaconsultora.com/";
  }

  const handleOption = () => {
    setShowOption(!showOptions);
    setShowPromoOption(false); // Cerrar el otro menú si está abierto
  };

  const handlePromoOption = () => {
    setShowPromoOption(!showPromoOptions);
    setShowOption(false); // Cerrar el otro menú si está abierto
  };

  window.addEventListener("resize", () => {
    setShowOption(false);
    setShowPromoOption(false);
  });

  window.addEventListener("scroll", () => {
    setShowOption(false);
    setShowPromoOption(false);
  });

  return (
    <nav className="fixed z-20 top-[25px] mn:top-[48px] sm:top-[60px] 1xl:top-[45.5px] 4xl:top-[50px] left-1/2 -translate-x-1/2 5xl:h-[50px] 4xl:w-[1568px] 1xl:w-[1350px] w-[90%] mx-auto flex justify-center items-center 1xl:gap-x-[10px] 4xl:gap-x-[50px]">
      <div className="text-white w-[181px] text-center m-0 p-0 flex flex-col items-center">
        <Link to={"/"}>
          <img
            className="w-[181px] h-[50px] 4xl:h-[50px] 4xl:w-[181px] block "
            src={logo}
            alt="logo-empresa"
          />
        </Link>
      </div>

      <ul className=" hidden 1xl:flex w-[970px] 4xl:w-[810px] justify-center 1xl:gap-x-[25px] 4xl:gap-x-[25px] text-white 1xl:text-[20px] 4xl:text-[20px]  font-bold">
        {LINKS.map((link) => (
          <li key={link.id}>
            {link.id == 1 ? (
              <div className="relative">
                <button
                  aria-label="Abrir multiples opciones"
                  onClick={handleOption}
                >
                  {link.title}
                </button>
                <div
                  className={`${showOptions
                      ? "visible opacity-100 mt-4"
                      : "invisible opacity-0 mt-8"
                    } flex-col absolute top-full  transition-all duration-300 bg-white w-[300px] px-8 py-4 rounded-xl`}
                >
                  <Link
                    to={"/tesis"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    Tesis
                  </Link>
                  <Link
                    to={"/tsp"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    TSP
                  </Link>
                  <Link
                    to={"/articulo-cientifico"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    Artículo Científico
                  </Link>
                  <Link
                    to={"/plan-negocio"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    Plan de negocio
                  </Link>
                </div>
              </div>
            ) : link.id == 4 ? (
              <div className="relative">
                <button
                  aria-label="Abrir opciones de promociones"
                  onClick={handlePromoOption}
                >
                  {link.title}
                </button>
                <div
                  className={`${showPromoOptions
                      ? "visible opacity-100 mt-4"
                      : "invisible opacity-0 mt-8"
                    } flex-col absolute top-full  transition-all duration-300 bg-white w-[300px] px-8 py-4 rounded-xl`}
                >
                  <Link
                    to={"/promociones"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    Promociones
                  </Link>
                  <Link
                    to={"/biblia-tesista"}
                    className="uppercase text-black text-lg block w-full py-1 hover:bg-gray-100"
                  >
                    La Biblia del Tesista
                  </Link>
                </div>
              </div>
            ) : (
              <Link to={link.path}>{link.title}</Link>
            )}
          </li>
        ))}
      </ul>

        <div className="flex gap-3">
         <button
        aria-label="Abrir enlace whatsapp"
        onClick={handleContact}
        className="hidden 1xl:flex w-[190px] hover:bg-[#1C1C34] gap-2 border-2 border-white rounded-2xl items-center py-2 px-4 font-bold text-white 1xl:text-[15px] 4xl:text-[20px]"
      >
        <img className="w-[20px] " src={whatssap} alt="" />

        Contáctanos 
      </button>

      <button
        className="hidden gap-1 1xl:flex px-8 py-2 hover:bg-[#1C1C34] hover:text-white    justify-center items-center  1xl:text-[15px] 4xl:text-[18px] font-bold text-white border-2 border-white rounded-2xl " 
        onClick={handleIntranet}    
                  >
        <img className="1xl:w-[18px] 4xl:w-[20px] " src={iconAleja} alt="" />      
        <p>INTRANET</p> 
         
      </button>    
        </div>
      

      <button
        aria-label="Abrir menú de navegación"
        className="block absolute left-0 1xl:hidden"
        onClick={() => handleOpenSidebar()}
      >
        <img
          src={menu_icon}
          className=" text-white w-[40px] h-[35px] mn:w-[55px] mn:h-[50px] p-2 border-gray-200 rounded-lg"
          alt="menu_icon"
        />
      </button>

    </nav>
  );
};

export default NavBar;