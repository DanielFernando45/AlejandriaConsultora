const ModalMgVictor = ({ activeModal, setActiveModal }) => {
  return (
    //
    <div
      className={`bg-black/50 w-full h-full fixed top-0 left-0 ${
        activeModal ? "visible opacity-100" : "invisible opacity-0"
      } flex items-center justify-center transition-all duration-500`}
    >
      <button
        onClick={() => setActiveModal(false)}
        className="text-black absolute text-4xl top-5 w-[55px] h-[55px] rounded-full text-[20px] flex items-center justify-center bg-white"
      >
        x
      </button>
      <div
        className={`${
          activeModal ? "translate-y-0" : "translate-y-7"
        } transition-all duration-200 1xl:w-[1521px] 1xl:h-[750px] flex items-center justify-center 1xl:gap-x-[50px] bg-white rounded-[40px]`}
      >
        <figure>
          <img
            // src={profile}
            className="block 1xl:w-[400px] 1xl:h-[400px] rounded-full"
            alt="profile"
          />
        </figure>
        <div className="1xl:w-[886px] ">
          <div>
            <h2 className="text-[#1C1C34] 1xl:text-[50px] font-extrabold">
              Mg. Víctor Avendaño
            </h2>
            <h3 className="text-[#0CB2D5] 1xl:text-[35px] mt-[20px]">
              Coordinador del área de Derecho y Ciencias Políticas.
            </h3>
          </div>
          <p className="text-[#1C1C34] 1xl:text-[25px] font-medium">
            Abogado graduado en el tercio superior de la Universidad Norbert
            Wiener, con una Maestría en Derecho de Familia por la UNIFE.
            Destacado por su excelencia en Estudios Generales Letras en la PUCP,
            ha sido asistente de cátedra en Derecho Civil y Administrativo en la
            UNMSM. Miembro de Ius Inter Gentes (PUCP), director en Modelos de
            Naciones Unidas (MUN’s) y exsecretario general del Consejo Distrital
            de la Juventud de Lima, también fue embajador del programa ODS al
            Futuro Juvenil (ONU-Banco Mundial). Su experiencia profesional
            incluye roles en el Ministerio de Relaciones Exteriores, el Poder
            Judicial y prestigiosos estudios jurídicos. Asimismo, ha contribuido
            como asesor del Centro de Investigaciones Alejandría y como ponente
            en seminarios sobre derecho y liderazgo juvenil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalMgVictor;
