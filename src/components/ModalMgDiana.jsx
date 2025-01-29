import profile from "../assets/images/nosotros/image_03.webp";
const ModalMgDiana = ({ activeModal, setActiveModal }) => {
  return (
    //
    <div
      className={`bg-black/50 w-full h-full fixed top-0 left-0 ${
        activeModal ? "visible opacity-100" : "invisible opacity-0"
      } flex items-center justify-center transition-all duration-500 z-40`}
    >
      <div
        className={`${
          activeModal ? "translate-y-0" : "translate-y-7"
        } transition-all duration-200 w-[300px] h-[420px] sm:w-[515px] sm:h-[780px] lg:w-[740px] lg:h-[760px] 1xl:w-[1521px] 1xl:h-[750px] flex flex-col 1xl:flex-row items-center justify-center 1xl:gap-x-[50px] bg-white rounded-[40px] relative `}
      >
        <button
          onClick={() => setActiveModal(false)}
          className="text-black absolute text-4xl -top-[60px] w-[55px] h-[55px] rounded-full text-[20px] flex items-center justify-center bg-white"
        >
          x
        </button>
        <img
          src={profile}
          className="block sm:w-[250px] h-[100px] w-[100px] sm:h-[250px] 1xl:w-[400px] 1xl:h-[400px] rounded-full mb-[20px] sm:mb-[50px] 1xl:mb-0 object-cover"
          alt="profile_image"
        />
        <div className="1xl:w-[886px] ">
          <div>
            <h2 className="text-[#1C1C34] text-[16px] sm:text-[25px] 1xl:text-[50px] font-extrabold text-center 1xl:text-start sm:pb-[20px] 1xl:pb-0">
              Mg. Diana Solis
            </h2>
            <h3 className="text-[#0CB2D5] text-[12px] sm:text-[20px] 1xl:text-[35px] text-center 1xl:text-start font-semibold pb-[10px] sm:pb-[25px] 1xl:pb-0">
              Coordinadora del área de Salud y Biología.
            </h3>
          </div>
          <p className="text-[#1C1C34] w-[250px] sm:w-[420px] lg:w-[540px] 1xl:w-auto text-[9px] sm:text-[14px] lg:text-[16px] 1xl:text-[25px] font-medium text-center 1xl:text-start">
            Cirujana dentista egresada de la UPLA y miembro colegiada del
            Colegio de Cirujanos Dentistas de Lima. Cuenta con una Maestría en
            Gestión de Servicios de Salud por la UCV y es estudiante de último
            ciclo de la especialidad de Estadística e Investigación en la UNFV.
            Ha realizado cursos de metodología y búsqueda de información
            validados por Elsevier y la Universidad Continental. Además, posee
            estudios de inglés avanzado, portugués avanzado e italiano básico.
            Tiene amplia experiencia en la asesoría de proyectos de
            investigación y en la coordinación de equipos de investigación en el
            Centro de Investigaciones Alejandría.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalMgDiana;
