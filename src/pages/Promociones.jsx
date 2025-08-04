import { Link } from "react-router-dom";
import LayoutApp from "../layout/LayoutApp";
import backgroundPromocion from "../assets/images/banners/backgroundPromociones.webp"
import tituloBronce from "../assets/images/promociones/TituloBronce.png"
import tituloOro from "../assets/images/promociones/TituloOro.png"
import tituloPlata from "../assets/images/promociones/TituloPlata.png"
import maestriaBronce from "../assets/images/promociones/MaestriaBronce.png"
import maestriaOro from "../assets/images/promociones/MaestriaOro.png"
import maestriaPlata from "../assets/images/promociones/MaestriaPlata.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ModalPromocion from "../components/ModalPromocion";

const Promociones = () => {
  const [modalPromocion, setModalPromocion] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const section = document.getElementById("seccionObjetivo");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200); // Espera 2 segundos antes de hacer scroll

    return () => clearTimeout(timer); // Limpia el timeout si el componente se desmonta
  }, []);

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000); // 4000 milisegundos = 4 segundos

      return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
    }
  }, [submitSuccess]);

  const [formInputs, setFormInputs] = useState({
    nombres: "",
    apellidos: "",
    servicio: "",
    promo: "",
    grado: "",
    carrera: "",
    universidad: "",
    telefono: "",
    url: "https://alejandriaconsultora.com/promociones"
  });

  const handleChange = (event) => {
    setFormInputs((lastValues) => ({
      ...lastValues,
      [event.target.id]: event.target.value,
    }));
  };

  const handleForm = async (event) => {
    event.preventDefault();

    // Validación de campos obligatorios
    formInputs.promo.trim(),
    formInputs.grado.trim();
    if (
      [
        formInputs.nombres.trim(),
        formInputs.apellidos.trim(),
        formInputs.carrera.trim(),
        formInputs.universidad.trim(),
        formInputs.telefono.trim(),
      ].some((field) => field === "")
    ) {
      alert("Por favor complete todos los campos obligatorios");
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const response = await fetch("https://backendalejandria.onrender.com/api/form/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInputs)
      });

      alert("Enviado Correctamente")
      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      const data = await response.json();
      console.log("Respuesta de la API:", data);
      setSubmitSuccess(true);

      // Redirigir a WhatsApp después de enviar el formulario
      const mensaje = `Hola Soy *${formInputs.nombres}* *${formInputs.apellidos}* , 
      de la carrera de *${formInputs.carrera}* de la universidad *${formInputs.universidad}* 
      y quiero adquirir la promo ${formInputs.promo} de grado *${formInputs.grado}*.`;

      const numero = "51989575820";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");

    } catch (error) {
      console.error("Error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LayoutApp>
      <main className="overflow-hidden">
        <div className={`h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative`}>
          <div className="main_background_02 absolute top-0 z-10 h-full w-full"></div>

          <img
            src={backgroundPromocion}
            className="w-full h-full object-cover"
            alt="back_hero"
            draggable={false}
            decoding="async"
          />

          <div
            data-aos="zoom-in"
            className="absolute ml-2 mn:ml-[14px] sm:ml-[46px] lg:ml-[80px] 1xl:ml-[100px] 4xl:ml-[104px] bottom-[57px]  sm:bottom-[132px] lg:bottom-[132px] 1xl:bottom-[115px] 4xl:bottom-[91px] 4xl:w-[1399px] z-10"
          >
            <p className="text-white font-semibold xl:w-auto text-start text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[45px] 4xl:text-[55px] uppercase leading-tight">
              ¡Aprovecha Nuestros
              <span className="block font-bold text-[13px] sm:text-[22px] lg:text-[30px] 1xl:text-[50px] 4xl:text-[60px]">
                Descuentos y Promociones!
              </span>
            </p>
          </div>
        </div>

        <section id="seccionObjetivo" className="bg_gradient_main pb-[263px]">

          <div data-aos="zoom-in" className="flex pb-[30px] pt-10 w-full justify-center text-white text-[22px] ">
            <h2 className=" uppercase font-semibold text-[16px] sm:text-[30px] md:text-[38px]">PROMOCIONES DEL MES</h2>
          </div>

          <div data-aos="zoom-in"
            data-aos-duration="700"
            className=" flex-col  flex justify-center items-center  xl:gap-[50px] 1xl:gap-[60px]  1xl:mt-20 gap-3 ">

            <div data-aos="zoom-in" className="flex   w-full justify-center text-white text-[22px] ">
              <h2 className=" uppercase font-semibold text-[14px] sm:text-[24px] md:text-[30px]">TÍTULO</h2>
            </div>

            <div data-aos="zoom-in" className="flex gap-2 mn:gap-5 items-center justify-center 1xl:w-[600px] w-[80%] sm:w-[500px] mt-7">
              <img
                className="transition-transform duration-300 hover:scale-125  4xl:h-[800px]   xl:h-[530px]  lg:h-[450px]  sm:h-[400px] mn:h-[260px] h-[240px]"
                src={tituloBronce}
                alt="back_hero"
                draggable={false}
                decoding="async"
              />
              <img
                className="transition-transform duration-300 hover:scale-125  4xl:h-[800px]  xl:h-[530px]  lg:h-[450px]  sm:h-[400px] mn:h-[260px] h-[240px]"
                src={tituloPlata}
                alt="back_hero"
                draggable={false}
                decoding="async"
              />
              <img
                className="transition-transform duration-300 hover:scale-125  4xl:h-[800px]  xl:h-[530px]  lg:h-[450px]  sm:h-[400px] mn:h-[260px] h-[240px]"
                src={tituloOro}
                alt="back_hero"
                draggable={false}
                decoding="async"
              />
            </div>

            <div data-aos="zoom-in" className="flex   w-full justify-center text-white text-[22px] mt-16">
              <h2 className=" uppercase font-semibold text-[14px] sm:text-[24px] md:text-[30px]">MAESTRÍA</h2>
            </div>

            <div data-aos="zoom-in" className="flex gap-2 mn:gap-5 items-center justify-center 1xl:w-[600px] w-[80%] sm:w-[500px] mt-7">
              <img
                className="transition-transform duration-300 hover:scale-125  4xl:h-[800px]   xl:h-[530px]  lg:h-[450px]  sm:h-[400px] mn:h-[260px] h-[240px]"
                src={maestriaBronce}
                alt="back_hero"
                draggable={false}
                decoding="async"
              />
              <img
                className="transition-transform duration-300 hover:scale-125  4xl:h-[800px]  xl:h-[530px]  lg:h-[450px]  sm:h-[400px] mn:h-[260px] h-[240px]"
                src={maestriaPlata}
                alt="back_hero"
                draggable={false}
                decoding="async"
              />
              <img
                className="transition-transform duration-300 hover:scale-125  4xl:h-[800px]  xl:h-[530px]  lg:h-[450px]  sm:h-[400px] mn:h-[260px] h-[240px]"
                src={maestriaOro}
                alt="back_hero"
                draggable={false}
                decoding="async"
              />
            </div>

            <div data-aos="zoom-in" className="2xl:w-[600px] 1xl:w-[500px] xl:w-[450px] w-[79%] sm:w-[500px] mt-28">
              {submitSuccess && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                  ¡Formulario enviado con éxito! Pronto nos pondremos en contacto contigo.
                </div>
              )}
              {submitError && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                  Hubo un error al enviar el formulario. Por favor intenta nuevamente.
                </div>
              )}

              <form
                data-aos="zoom-in"
                data-aos-duration="700"
                onSubmit={handleForm}
                className="block w-full space-y-6"
              >
                <input
                  className="block w-full border  sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="nombres"
                  id="nombres"
                  required
                  placeholder="Nombres"
                  onChange={handleChange}
                />
                <input
                  className="block w-full border  sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="apellidos"
                  id="apellidos"
                  required
                  placeholder="Apellidos"
                  onChange={handleChange}
                />

                <select
                  name="promo"
                  id="promo"
                  className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold font-bold input_gradient 1xl:h-[60px] 4xl:h-[70px]"
                  value={formInputs.promo}
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Selecciona la oferta
                  </option>
                  <option value="Bronce">Bronce</option>
                  <option value="Plata">Plata</option>
                  <option value="Oro">Oro</option>
                </select>

                <select
                  name="grado"
                  id="grado"
                  className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold font-bold input_gradient 1xl:h-[60px] 4xl:h-[70px]"
                  value={formInputs.grado}
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Grado académico
                  </option>
                  <option value="Asesoría académica">Título</option>
                  <option value="Tesis">Maestria</option>
                </select>

                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="carrera"
                  id="carrera"
                  required
                  placeholder="Carrera"
                  onChange={handleChange}
                />
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="universidad"
                  id="universidad"
                  required
                  placeholder="Universidad"
                  onChange={handleChange}
                />
                <input
                  className="block w-full  border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  required
                  placeholder="Teléfono / Whatsapp"
                  id="telefono"
                  name="telefono"
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`block w-full py-3 uppercase text-white font-bold mn:text-[22px] rounded-full ${isSubmitting ? 'bg-gray-400' : 'bg-[#0CB2D5]'}`}
                >
                  {isSubmitting ? 'Enviando...' : '¡Quiero la Oferta!'}
                </button>
              </form>
            </div>

          </div>

        </section>
        <ModalPromocion
          activeModal={modalPromocion}
          setActiveModal={setModalPromocion}
        />
      </main>
    </LayoutApp>
  )
}

export default Promociones;