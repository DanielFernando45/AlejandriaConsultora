import { Link } from "react-router-dom";
import LayoutApp from "../layout/LayoutApp";
import backgroundPromocion from "../assets/images/banners/backgroundPromociones.webp"

import promo1 from "../assets/images/planes/TITULO NEGOCIO SOCIAL Y LEGAL.jpeg"
import promo2 from "../assets/images/planes/MAESTRIA NEGOCIO SOCIAL Y LEGAL.jpeg"
import promo3 from "../assets/images/planes/DOCTORADO NEGOCIO, SOCIAL Y LEGAL.jpeg"
import promo4 from "../assets/images/planes/2DA ESPECIALIDAD NEGOCIO SOCIAL Y LEGAL.jpeg"

import promo5 from "../assets/images/planes/TITULO SALUD & ING.jpeg"
import promo6 from "../assets/images/planes/MAESTRIA SALUD  & ING.jpeg"
import promo7 from "../assets/images/planes/DOCTORADO SALUD & ING.jpeg"
import promo8 from "../assets/images/planes/2DA ESPECIALIDAD SALUD & ING.jpeg"

import Aos from "aos";
import sha256 from "crypto-js/sha256";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";

const Promociones = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  // Estados para los carruseles
  const [currentSlideNegocios, setCurrentSlideNegocios] = useState(0);
  const [currentSlideSalud, setCurrentSlideSalud] = useState(0);
  const [isAutoPlayingNegocios, setIsAutoPlayingNegocios] = useState(true);
  const [isAutoPlayingSalud, setIsAutoPlayingSalud] = useState(true);

  // Imágenes para cada categoría
  const promocionesNegocios = [
    { id: 1, src: promo1, alt: "Título Negocio Social y Legal" },
    { id: 2, src: promo2, alt: "Maestría Negocio Social y Legal" },
    { id: 3, src: promo3, alt: "Doctorado Negocio Social y Legal" },
    { id: 4, src: promo4, alt: "2da Especialidad Negocio Social y Legal" }
  ];

  const promocionesSalud = [
    { id: 5, src: promo5, alt: "Título Salud & Ingeniería" },
    { id: 6, src: promo6, alt: "Maestría Salud & Ingeniería" },
    { id: 7, src: promo7, alt: "Doctorado Salud & Ingeniería" },
    { id: 8, src: promo8, alt: "2da Especialidad Salud & Ingeniería" }
  ];

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const section = document.getElementById("seccionObjetivo");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  // Efecto para autoplay del carrusel de Negocios (60 segundos)
  useEffect(() => {
    let intervalId;
    
    if (isAutoPlayingNegocios) {
      intervalId = setInterval(() => {
        setCurrentSlideNegocios((prevSlide) => 
          prevSlide === promocionesNegocios.length - 1 ? 0 : prevSlide + 1
        );
      }, 60000); // 60 segundos
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlayingNegocios, promocionesNegocios.length]);

  // Efecto para autoplay del carrusel de Salud (60 segundos)
  useEffect(() => {
    let intervalId;
    
    if (isAutoPlayingSalud) {
      intervalId = setInterval(() => {
        setCurrentSlideSalud((prevSlide) => 
          prevSlide === promocionesSalud.length - 1 ? 0 : prevSlide + 1
        );
      }, 60000); // 60 segundos
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlayingSalud, promocionesSalud.length]);

  // Funciones para el carrusel de Negocios
  const nextSlideNegocios = () => {
    setCurrentSlideNegocios((prevSlide) => 
      prevSlide === promocionesNegocios.length - 1 ? 0 : prevSlide + 1
    );
    setIsAutoPlayingNegocios(true);
  };

  const prevSlideNegocios = () => {
    setCurrentSlideNegocios((prevSlide) => 
      prevSlide === 0 ? promocionesNegocios.length - 1 : prevSlide - 1
    );
    setIsAutoPlayingNegocios(true);
  };

  const goToSlideNegocios = (index) => {
    setCurrentSlideNegocios(index);
    setIsAutoPlayingNegocios(true);
  };

  // Funciones para el carrusel de Salud
  const nextSlideSalud = () => {
    setCurrentSlideSalud((prevSlide) => 
      prevSlide === promocionesSalud.length - 1 ? 0 : prevSlide + 1
    );
    setIsAutoPlayingSalud(true);
  };

  const prevSlideSalud = () => {
    setCurrentSlideSalud((prevSlide) => 
      prevSlide === 0 ? promocionesSalud.length - 1 : prevSlide - 1
    );
    setIsAutoPlayingSalud(true);
  };

  const goToSlideSalud = (index) => {
    setCurrentSlideSalud(index);
    setIsAutoPlayingSalud(true);
  };

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

    if (!formInputs.nombres || !formInputs.apellidos || !formInputs.telefono) {
      setSubmitError("Por favor complete todos los campos obligatorios.");
      return;
    }

    const hashedData = {
      fn: sha256(formInputs.nombres.trim().toLowerCase()).toString(),
      ln: sha256(formInputs.apellidos.trim().toLowerCase()).toString(),
      ph: sha256(formInputs.telefono.trim()).toString(),
    };

    if (typeof window.fbq !== "undefined") {
      window.fbq("init", "993020102671178", hashedData);
      window.fbq("track", "Lead", {
        content_name: "Formulario de contacto",
        status: "submitted",
      });
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
            className="flex-col flex justify-center items-center xl:gap-[50px] 1xl:gap-[60px] 1xl:mt-20 gap-3">

            {/* PRIMER CARRUSEL - NEGOCIOS, SOCIAL Y LEGAL */}
            <div data-aos="zoom-in" className="flex w-full justify-center text-white text-[22px] ">
              <h2 className="uppercase font-semibold text-[14px] sm:text-[24px] md:text-[30px]">
                NEGOCIOS, SOCIAL Y LEGAL 
              </h2>
            </div>

            <div data-aos="zoom-in" className="relative flex items-center justify-center 1xl:w-[600px] w-[80%] sm:w-[500px] mt-7">
              {/* Contenedor del carrusel */}
              <div className="relative overflow-hidden rounded-lg">
                {/* Imagen actual del carrusel */}
                <img
                  className="transition-transform duration-300 hover:scale-105 4xl:h-[800px] xl:h-[530px] lg:h-[450px] sm:h-[400px] mn:h-[260px] h-[240px] object-contain"
                  src={promocionesNegocios[currentSlideNegocios].src}
                  alt={promocionesNegocios[currentSlideNegocios].alt}
                  draggable={false}
                  decoding="async"
                />

                {/* Botón izquierdo */}
                <button
                  onClick={prevSlideNegocios}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
                  aria-label="Imagen anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Botón derecho */}
                <button
                  onClick={nextSlideNegocios}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
                  aria-label="Siguiente imagen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicadores de slides */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20">
                  {promocionesNegocios.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlideNegocios(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlideNegocios 
                          ? 'bg-blue-500 scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir a la promoción ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Contador de slides */}
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs sm:text-sm z-20">
                  {currentSlideNegocios + 1} / {promocionesNegocios.length}
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="mt-2 text-center">
              <p className="text-white text-sm sm:text-base font-medium">
                {promocionesNegocios[currentSlideNegocios].alt}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Cambia automáticamente cada 60 segundos
              </p>
            </div>

            {/* Miniaturas para navegación rápida (opcional) */}
            <div data-aos="zoom-in" className="flex gap-2 mn:gap-3 items-center justify-center 1xl:w-[600px] w-[80%] sm:w-[500px] mt-4">
              {promocionesNegocios.map((promo, index) => (
                <img
                  key={promo.id}
                  className={`transition-all duration-300 cursor-pointer 4xl:h-[150px] xl:h-[120px] lg:h-[100px] sm:h-[80px] mn:h-[70px] h-[60px] object-contain border-2 ${
                    index === currentSlideNegocios 
                      ? 'border-blue-500 scale-105' 
                      : 'border-transparent hover:scale-105 hover:border-white/50'
                  }`}
                  src={promo.src}
                  alt={promo.alt}
                  draggable={false}
                  decoding="async"
                  onClick={() => goToSlideNegocios(index)}
                />
              ))}
            </div>

            {/* SEGUNDO CARRUSEL - SALUD & INGENIERÍA */}
            <div data-aos="zoom-in" className="flex w-full justify-center text-white text-[22px] mt-12">
              <h2 className="uppercase font-semibold text-[14px] sm:text-[24px] md:text-[30px]">
                SALUD & INGENIERÍA 
              </h2>
            </div>

            <div data-aos="zoom-in" className="relative flex items-center justify-center 1xl:w-[600px] w-[80%] sm:w-[500px] mt-7">
              {/* Contenedor del carrusel */}
              <div className="relative overflow-hidden rounded-lg">
                {/* Imagen actual del carrusel */}
                <img
                  className="transition-transform duration-300 hover:scale-105 4xl:h-[800px] xl:h-[530px] lg:h-[450px] sm:h-[400px] mn:h-[260px] h-[240px] object-contain"
                  src={promocionesSalud[currentSlideSalud].src}
                  alt={promocionesSalud[currentSlideSalud].alt}
                  draggable={false}
                  decoding="async"
                />

                {/* Botón izquierdo */}
                <button
                  onClick={prevSlideSalud}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
                  aria-label="Imagen anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Botón derecho */}
                <button
                  onClick={nextSlideSalud}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
                  aria-label="Siguiente imagen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicadores de slides */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20">
                  {promocionesSalud.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlideSalud(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlideSalud 
                          ? 'bg-blue-500 scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir a la promoción ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Contador de slides */}
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs sm:text-sm z-20">
                  {currentSlideSalud + 1} / {promocionesSalud.length}
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="mt-2 text-center">
              <p className="text-white text-sm sm:text-base font-medium">
                {promocionesSalud[currentSlideSalud].alt}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Cambia automáticamente cada 60 segundos
              </p>
            </div>

            {/* Miniaturas para navegación rápida (opcional) */}
            <div data-aos="zoom-in" className="flex gap-2 mn:gap-3 items-center justify-center 1xl:w-[600px] w-[80%] sm:w-[500px] mt-4">
              {promocionesSalud.map((promo, index) => (
                <img
                  key={promo.id}
                  className={`transition-all duration-300 cursor-pointer 4xl:h-[150px] xl:h-[120px] lg:h-[100px] sm:h-[80px] mn:h-[70px] h-[60px] object-contain border-2 ${
                    index === currentSlideSalud 
                      ? 'border-blue-500 scale-105' 
                      : 'border-transparent hover:scale-105 hover:border-white/50'
                  }`}
                  src={promo.src}
                  alt={promo.alt}
                  draggable={false}
                  decoding="async"
                  onClick={() => goToSlideSalud(index)}
                />
              ))}
            </div>

            {/* FORMULARIO (se mantiene igual) */}
            <div data-aos="zoom-in" className="2xl:w-[600px] 1xl:w-[500px] xl:w-[450px] w-[79%] sm:w-[500px] mt-16">
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
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="nombres"
                  id="nombres"
                  required
                  placeholder="Nombres"
                  onChange={handleChange}
                />
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
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
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
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

      </main>
    </LayoutApp>
  )
}

export default Promociones;