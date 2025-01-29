import profile from "../assets/images/nosotros/image_02.webp";
const ModalMgBrenda = ({ activeModal, setActiveModal }) => {
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
        } transition-all duration-200 w-[300px] h-[420px] sm:w-[515px] sm:h-[780px] lg:w-[740px] lg:h-[760px] 1xl:w-[1521px] 1xl:h-[750px] flex flex-col 1xl:flex-row items-center justify-center 1xl:gap-x-[50px] bg-white rounded-[40px] relative`}
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
              Mg. Brenda Castillo
            </h2>
            <h3 className="text-[#0CB2D5] w-[186px] sm:w-[260px] 1xl:w-auto mx-auto sm:text-[20px] 1xl:text-[35px] text-center 1xl:text-start font-semibold py-[10px] sm:pb-[25px] 1xl:pb-0">
              Coordinadora del área de Humanidades y Letras.
            </h3>
          </div>
          <p className="text-[#1C1C34] w-[250px] sm:w-[420px] lg:w-[540px] 1xl:w-auto text-[9px] sm:text-[14px] lg:text-[16px] 1xl:text-[25px] font-medium text-center 1xl:text-start">
            Licenciada en Lingüística por la Universidad Nacional Federico
            Villarreal, con habilidades en educación, investigación, docencia,
            oralidad y redacción de textos. Domina la gramática española y las
            normas APA. Posee amplia experiencia en investigación en los campos
            empresariales, educativos, humanísticos, derecho y ciencias
            políticas, así como en la revisión y corrección de textos. Además,
            complementa su formación con un diplomado en normativa y corrección
            de textos por la Universidad de Piura. Actualmente, se desempeña
            como coordinadora y asesora de las áreas de Negocios, Legal y
            Calidad del Centro de Investigaciones Alejandría.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalMgBrenda;
