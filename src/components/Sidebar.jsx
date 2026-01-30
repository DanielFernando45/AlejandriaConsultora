import { Link } from "react-router-dom";
import close from "../assets/icons/close.svg";
import whatssap from "../assets/icons/whatss.png";
import iconAleja from "../assets/icons/alejaIcon.png";

const Sidebar = ({
  openSidebar,
  handleCloseSidebar,
  handleContact,
  showOptions,
  setShowOptions,
  showPromoOptions,
  setShowPromoOptions,
}) => {
  const handlerIntranet = () => {
    window.location.href = "https://intranet.alejandriaconsultora.com/";
  };

  return (
    <div
      className={`${openSidebar ? "visible delay-0" : "invisible delay-100"
        }  w-full h-full fixed bg-black/60 z-30 top-0 left-0 transition-all`}
    >
      <div
        id="sidebar"
        className={`bg-[#1c1c34] w-full mn:w-[350px] p-4 text-[16px]  text-white ${openSidebar ? "translate-x-0 delay-300 " : "-translate-x-full delay-0"
          } h-screen relative z-40  duration-300 flex items-center`}
      >
        <button
          type="button"
          onClick={handleCloseSidebar}
          className="absolute top-8 right-5 z-10"
        >
          <img src={close} alt="close-icon" />
        </button>
        <div className=" h-[453px] sm:h-[757px] w-full flex flex-col justify-between self-start">
          <div className="space-y-[30px] h-auto">
            <Link
              to={"/nosotros"}
              className="block font-bold hover:bg-slate-900 p-4"
            >
              Nosotros
            </Link>

            {/* Menú Servicios */}
            <div className="w-[90%] text-start font-bold hover:bg-slate-900 p-4">
              <div className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                  setShowOptions(!showOptions);
                  setShowPromoOptions(false); // Cerrar el otro menú si está abierto
                }}>
                <div>Servicios</div>
                <div className="relative w-7 h-4 overflow-hidden mt-[5px]">
                  {/* Contenedor de flecha con rotación */}
                  <div className={`transform transition-transform duration-300 ${showOptions ? "rotate-180" : "rotate-0"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="9"
                      viewBox="0 0 18 9"
                      fill="none"
                      className="cursor-pointer"
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
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-300 w-[250px] ${showOptions
                  ? "max-h-[163px] opacity-100 pt-[10px]"
                  : "max-h-0 opacity-0 overflow-hidden"
                  } flex flex-col justify-between`}
              >
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700 py-2" to={"/tesis"}>
                  Tesis
                </Link>
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700 py-2" to={"/tsp"}>
                  TSP
                </Link>
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700 py-2" to={"/articulo-cientifico"}>
                  Artículo académico
                </Link>
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700 py-2" to={"/plan-negocio"}>
                  Plan de negocio
                </Link>
              </div>
            </div>

            <Link
              to={"/promociones"}
              className="block font-bold hover:bg-slate-900 p-4"
            >
              Planes
            </Link>

            {/* Menú Medios */}
            <div className="w-[90%] text-start font-bold hover:bg-slate-900 p-4">
              <div className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                  setShowPromoOptions(!showPromoOptions);
                  setShowOptions(false); // Cerrar el otro menú si está abierto
                }}>
                <div>Medios</div>
                <div className="relative w-7 h-4 overflow-hidden mt-[5px]">
                  {/* Contenedor de flecha con rotación */}
                  <div className={`transform transition-transform duration-300 ${showPromoOptions ? "rotate-180" : "rotate-0"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="9"
                      viewBox="0 0 18 9"
                      fill="none"
                      className="cursor-pointer"
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
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-300 w-[250px] 
                  ${showPromoOptions
                    ? "max-h-[113px] opacity-100 pt-[10px]"
                    : "max-h-0 opacity-0 overflow-hidden"
                  } flex flex-col justify-between`}
              >
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700 py-2" to={"/videos"}>
                  Videos
                </Link>
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700 py-2" to={"/bloc"}>
                  Blog
                </Link>
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700 py-2" to={"/centro-recursos"}>
                  Catalogos
                </Link>
              </div>
            </div>

            <Link
              to={"/postulacion"}
              className="block font-bold hover:bg-slate-900 p-4"
            >
              Postulacion
            </Link>
          </div>

          <div className="flex flex-col gap-5 mt-[60px]">
            <button
              onClick={handlerIntranet}
              className="gap-5 flex justify-center items-center border border-white rounded-full text-white text-[18px] py-[9px] px-[39px] font-bold"
            >
              <img className="w-6" src={iconAleja} alt="" />
              Intranet Portal +
            </button>

            <button
              onClick={handleContact}
              className="gap-5 flex justify-center items-center border border-white rounded-full text-white text-[18px] py-[9px] px-[39px] font-bold"
            >
              <img className="w-6" src={whatssap} alt="" />
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;