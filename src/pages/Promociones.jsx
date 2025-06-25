import { Link } from "react-router-dom";
import LayoutApp from "../layout/LayoutApp";
import backgroundPromocion from "../assets/images/banners/backgroundPromociones.webp"
import promoBronce from "../assets/images/promociones/PromoBronce.png"
import promoOro from "../assets/images/promociones/PromoOro.png"
import promoPlata from "../assets/images/promociones/PromoPlata.png"
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
      const mensaje = `Hola Soy *${formInputs.nombres}* *${formInputs.apellidos}* , de la carrera de *${formInputs.carrera}* de la universidad *${formInputs.universidad}* y quiero adquirir uno de sus planes`;
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

        <section id="seccionObjetivo" className="bg_gradient_main pb-[263px]" >
          <div data-aos="zoom-in" className="flex pb-[70px] pt-10 w-full justify-center text-white text-[22px] ">
            <h2 className=" uppercase font-semibold text-[16px] sm:text-[30px] md:text-[38px]">LOS MEJORES PLANES PARA TI</h2>
          </div>

          <div data-aos="zoom-in"
            data-aos-duration="700"
            className="xl:flex-row flex-col  flex justify-center items-center 4xl:gap-[250px] xl:gap-[150px] 1xl:gap-[120px]  gap-32 2xl:ml-12 4xl:ml-48">

            <div className="flex gap-5 items-center justify-center 1xl:w-[600px] w-[80%] sm:w-[500px]">
              <img
                className="transition-transform duration-300 hover:scale-125  4xl:h-[800px]   xl:h-[530px]  lg:h-[450px]  sm:h-[400px] mn:h-[260px] h-[240px]"
                src={promoBronce}
                alt="back_hero"
                draggable={false}
                decoding="async"
              />
              <img
                className="transition-transform duration-300 hover:scale-125  4xl:h-[800px]  xl:h-[530px]  lg:h-[450px]  sm:h-[400px] mn:h-[260px] h-[240px]"
                src={promoPlata}
                alt="back_hero"
                draggable={false}
                decoding="async"
              />
              <img
                className="transition-transform duration-300 hover:scale-125  4xl:h-[800px]  xl:h-[530px]  lg:h-[450px]  sm:h-[400px] mn:h-[260px] h-[240px]"
                src={promoOro}
                alt="back_hero"
                draggable={false}
                decoding="async"
              />
            </div>

            <div className="2xl:w-[600px] 1xl:w-[500px] xl:w-[450px] w-[79%] sm:w-[500px]">
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