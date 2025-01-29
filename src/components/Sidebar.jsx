import { Link } from "react-router-dom";
import close from "../assets/icons/close.svg";

const Sidebar = ({
  openSidebar,
  handleCloseSidebar,
  handleContact,
  showOptions,
  setShowOptions,
}) => {
  return (
    <div
      // onClick={handleCloseSidebar}
      className={`${
        openSidebar ? "visible delay-0" : "invisible delay-100"
      }  w-full h-full fixed bg-black/60 z-30 top-0 left-0 transition-all`}
    >
      <div
        id="sidebar"
        className={`bg-[#1c1c34] w-full mn:w-[350px] p-4 text-[16px]  text-white ${
          openSidebar ? "translate-x-0 delay-300 " : "-translate-x-full delay-0"
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
              onClick={() => setShowOptions(!showOptions)}
              className="cursor-pointer block w-[90%] text-start font-bold hover:bg-slate-900 p-4 "
            >
              Consultoría
              <div
                className={`transition-[height] w-[250px] ${
                  showOptions
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
            <Link
              to={"/promociones"}
              className="block font-bold hover:bg-slate-900 p-4"
            >
              Promociones
            </Link>
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
          <button
            onClick={handleContact}
            className="mt-[60px] flex justify-center items-center border border-white rounded-full text-white text-[18px] py-[9px] px-[39px] font-bold"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
