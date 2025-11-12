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
  }

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
            <div
              onClick={() => {
                setShowOptions(!showOptions);
                setShowPromoOptions(false); // Cerrar el otro menú si está abierto
              }}
              className="cursor-pointer block w-[90%] text-start font-bold hover:bg-slate-900 p-4 "
            >
              Consultoría
              <div
                className={`transition-[height] w-[250px] ${showOptions
                    ? "h-[163px] relative opacity-100 pt-[10px]"
                    : "h-0 opacity-0"
                  } flex flex-col justify-between overflow-hidden`}
              >
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700" to={"/tesis"}>
                  Tesis
                </Link>
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700" to={"/tsp"}>
                  TSP
                </Link>
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700" to={"/articulo-cientifico"}>
                  Artículo académico
                </Link>
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700" to={"/plan-negocio"}>
                  Plan de negocio
                </Link>
              </div>
            </div>

            <Link to={""} className="block font-bold hover:bg-slate-900 p-4">
              Cursos
            </Link>
            <Link
              to={"/nosotros"}
              className="block font-bold hover:bg-slate-900 p-4"
            >
              Nosotros
            </Link>

            <div
              onClick={() => {
                setShowPromoOptions(!showPromoOptions);
                setShowOptions(false); // Cerrar el otro menú si está abierto
              }}
              className="cursor-pointer block w-[90%] text-start font-bold hover:bg-slate-900 p-4 "
            >
              Promociones
              <div
                className={`transition-[height] w-[250px] ${showPromoOptions
                    ? "h-[80px] relative opacity-100 pt-[10px]"
                    : "h-0 opacity-0"
                  } flex flex-col justify-between overflow-hidden`}
              >
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700" to={"/promociones"}>
                  Promociones
                </Link>
                <Link className="px-4 font-semibold text-[18px] hover:bg-gray-700" to={"/biblia-tesista"}>
                  La Biblia del Tesista
                </Link>
              </div>
            </div>

            <Link
              to={"/centro-recursos"}
              className="block font-bold hover:bg-slate-900 p-4"
            >
              Centro de Recursos
            </Link>
            <Link
              to={"/blog"}
              className="block font-bold hover:bg-slate-900 p-4"
            >
              Blog
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