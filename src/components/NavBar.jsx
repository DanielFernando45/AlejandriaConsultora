import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import menu_icon from "../assets/icons/menu-icon.svg";
import logo from "../assets/images/logo.png";
import whatssap from "../assets/icons/whatss.png";
import iconAleja from "../assets/icons/alejaIcon.png";

const LINKS = [
  { id: 1, path: "/nosotros", title: "Nosotros" },
  { id: 2, path: "", title: "Servicios" },
  { id: 3, path: "/promociones", title: "Planes" },
  { id: 4, path: "", title: "Medios" },
  { id: 5, path: "/postulacion", title: "Postulaciones" },
];

const NavBar = ({ handleOpenSidebar, handleContact }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const menuTimeoutRef = useRef(null);
  const menuRefs = useRef({});

  const handleIntranet = () => {
    window.location.href = "https://intranet.alejandriaconsultora.com/";
  };

  const handleMouseEnter = (menuId) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setIsHovering(true);
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleMenuMouseEnter = (menuId) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(menuId);
  };

  const handleMenuMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  const SERVICIOS_SUBMENU = [
    { path: "/tesis", title: "Tesis" },
    { path: "/tsp", title: "TSP" },
    { path: "/articulo-cientifico", title: "Artículo Científico" },
    { path: "/plan-negocio", title: "Plan de negocio" },
  ];

  const MEDIOS_SUBMENU = [
    { path: "/videos", title: "Videos" },
    { path: "/bloc", title: "Blog" },
    { path: "/centro-recursos", title: "Catalogo" },
  ];

  return (
    <nav className="absolute z-20 top-[25px] mn:top-[48px] sm:top-[60px] 1xl:top-[45.5px] 4xl:top-[50px] left-1/2 -translate-x-1/2 5xl:h-[50px] 4xl:w-[1568px] 1xl:w-[1350px] w-[90%] mx-auto flex justify-center items-center 1xl:gap-x-[10px] 4xl:gap-x-[50px]">
      <div className="text-white w-[181px] text-center m-0 p-0 flex flex-col items-center">
        <Link to={"/"}>
          <img
            className="w-[181px] h-[50px] 4xl:h-[50px] 4xl:w-[181px] block"
            src={logo}
            alt="logo-empresa"
          />
        </Link>
      </div>

      <ul className="hidden 1xl:flex w-[970px] 4xl:w-[810px] justify-center 1xl:gap-x-[25px] 4xl:gap-x-[25px] text-white 1xl:text-[20px] 4xl:text-[20px] font-bold">
        {LINKS.map((link) => (
          <li 
            key={link.id} 
            className="relative"
            onMouseEnter={() => link.id === 2 || link.id === 4 ? handleMouseEnter(link.id) : null}
            onMouseLeave={link.id === 2 || link.id === 4 ? handleMouseLeave : null}
          >
            {link.id === 2 ? (
              <div className="relative">
                <Link
                  to="#"
                  className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  {link.title}
                  <div className="relative w-7 h-4 overflow-hidden ">
                    {/* Primer SVG (Flecha abajo) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="9"
                      viewBox="0 0 18 9"
                      fill="none"
                      className={`absolute inset-1 transition-all duration-300  ${
                        activeMenu === 2 ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
                      }`}
                    >
                      <path
                        d="M16.59 0.75L10.07 7.27C9.3 8.04 8.04 8.04 7.27 7.27L0.75 0.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    
                    {/* Segundo SVG (Flecha arriba) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="9"
                      viewBox="0 0 18 9"
                      fill="none"
                      className={`absolute inset-0 transition-all duration-300 ${
                        activeMenu === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                      }`}
                    >
                      <path
                        d="M16.59 7.8475L10.07 1.3275C9.3 0.5575 8.04 0.5575 7.27 1.3275L0.75 7.8475"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>

                {/* Menú desplegable de Servicios */}
                <div
                  ref={(el) => (menuRefs.current[2] = el)}
                  className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                    activeMenu === 2
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-2"
                  }`}
                  style={{ minWidth: "300px" }}
                  onMouseEnter={() => handleMenuMouseEnter(2)}
                  onMouseLeave={handleMenuMouseLeave}
                >
                  <div className="px-6 py-4">
                    {SERVICIOS_SUBMENU.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block py-3 px-2 text-black text-lg hover:bg-gray-50 rounded-lg transition-all duration-200 transform hover:translate-x-1 hover:scale-[1.02]"
                        style={{
                          animationDelay: activeMenu === 2 ? `${index * 50}ms` : "0ms",
                          animationFillMode: "both",
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : link.id === 4 ? (
              <div className="relative">
                <Link
                  to="#"
                  className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  {link.title}
                  <div className="relative w-6 h-4 overflow-hidden">
                    {/* Primer SVG (Flecha abajo) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="9"
                      viewBox="0 0 18 9"
                      fill="none"
                      className={`absolute inset-0 transition-all duration-300 ${
                        activeMenu === 4 ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
                      }`}
                    >
                      <path
                        d="M16.59 0.75L10.07 7.27C9.3 8.04 8.04 8.04 7.27 7.27L0.75 0.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    
                    {/* Segundo SVG (Flecha arriba) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="9"
                      viewBox="0 0 18 9"
                      fill="none"
                      className={`absolute inset-0 transition-all duration-300 ${
                        activeMenu === 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                      }`}
                    >
                      <path
                        d="M16.59 7.8475L10.07 1.3275C9.3 0.5575 8.04 0.5575 7.27 1.3275L0.75 7.8475"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>

                {/* Menú desplegable de Medios */}
                <div
                  ref={(el) => (menuRefs.current[4] = el)}
                  className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                    activeMenu === 4
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-2"
                  }`}
                  style={{ minWidth: "300px" }}
                  onMouseEnter={() => handleMenuMouseEnter(4)}
                  onMouseLeave={handleMenuMouseLeave}
                >
                  <div className="px-6 py-4">
                    {MEDIOS_SUBMENU.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block py-3 px-2 text-black text-lg hover:bg-gray-50 rounded-lg transition-all duration-200 transform hover:translate-x-1 hover:scale-[1.02]"
                        style={{
                          animationDelay: activeMenu === 4 ? `${index * 50}ms` : "0ms",
                          animationFillMode: "both",
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                to={link.path}
                className="hover:text-gray-200 transition-colors duration-200"
              >
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        <button
          aria-label="Abrir enlace whatsapp"
          onClick={handleContact}
          className="hidden 1xl:flex w-[190px] hover:bg-[#1C1C34] gap-2 border-2 border-white rounded-2xl items-center py-2 px-4 font-bold text-white 1xl:text-[15px] 4xl:text-[20px] transition-all duration-200 hover:scale-[1.02]"
        >
          <img className="w-[20px]" src={whatssap} alt="whatsapp" />
          Contáctanos
        </button>

        <button
          className="hidden gap-1 1xl:flex px-8 py-2 hover:bg-[#1C1C34] hover:text-white justify-center items-center 1xl:text-[15px] 4xl:text-[18px] font-bold text-white border-2 border-white rounded-2xl transition-all duration-200 hover:scale-[1.02]"
          onClick={handleIntranet}
        >
          <img className="1xl:w-[18px] 4xl:w-[20px]" src={iconAleja} alt="intranet" />
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
          className="text-white w-[40px] h-[35px] mn:w-[55px] mn:h-[50px] p-2 border-gray-200 rounded-lg hover:bg-white/10 transition-colors duration-200"
          alt="menu_icon"
        />
      </button>
    </nav>
  );
};

export default NavBar;