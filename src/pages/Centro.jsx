import React, { useEffect, useState } from "react";
import LayoutApp from "../layout/LayoutApp";
import sha256 from "crypto-js/sha256";
import backgroundCentroRecursos from "../assets/images/banners/backgroundCentroRecursos.webp";
import image_01 from "../assets/images/centro-recursos/image_01.webp";
import image_02 from "../assets/images/centro-recursos/image_02.webp";
import image_03 from "../assets/images/centro-recursos/image_03.webp";
import image_04 from "../assets/images/centro-recursos/balotario.png";
import image_05 from "../assets/images/centro-recursos/elabtesis.png";
import image_06 from "../assets/images/centro-recursos/image_06.png";
import image_07 from "../assets/images/centro-recursos/escalarSistemas.png";
import image_08 from "../assets/images/centro-recursos/fuentesconfiables.png";
import image_09 from "../assets/images/centro-recursos/redesSociales.png";
import image_10 from "../assets/images/centro-recursos/image_10.webp";
import image_11 from "../assets/images/centro-recursos/image_11.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import tesis from "../assets/images/tesistaBible/tesisimg.png";
import capa_04 from "../assets/images/capa_04.png";

const Centro = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const handleContact = () => {
    event.preventDefault(event);
    let mensaje = `Hola vengo de tu página web y deseo información de los servicios que brindan.`;
    const numero = "51989575820";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const [dialog, setDialog] = useState(false);
  const [formInputs, setFormInputs] = useState({
    nombres: "",
    apellidos: "",
    servicio: "",
    carrera: "",
    universidad: "",
    telefono: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    setFormInputs((lastValues) => ({
      ...lastValues,
      [event.target.id]: event.target.value,
    }));
  };

  const handleForm = async (event) => {
    event.preventDefault();

    // Validación...
    if (!formInputs.nombres || !formInputs.apellidos || !formInputs.telefono) {
      setSubmitError("Por favor complete todos los campos obligatorios.");
      return;
    }


    // 🔹 Enviar coincidencias avanzadas al pixel
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
    setSubmitError("");

    try {
      const response = await fetch("https://backendalejandria.onrender.com/api/form/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombres: formInputs.nombres,
          apellidos: formInputs.apellidos,
          servicio: formInputs.servicio || "", // Opcional
          carrera: formInputs.carrera,
          universidad: formInputs.universidad,
          telefono: formInputs.telefono,
          url: "https://alejandriaconsultora.com/centro-recursos"
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      const data = await response.json();
      setSubmitSuccess(true);

      // Mostrar mensaje de éxito por 2 segundos
      setTimeout(() => {
        setSubmitSuccess(false);

        // Redirigir a WhatsApp después de que desaparezca el mensaje
        let mensaje = `Hola soy *${formInputs.nombres}* *${formInputs.apellidos}* , soy de la carrera *${formInputs.carrera}* de la universidad *${formInputs.universidad}* y deseo información sobre los recursos disponibles.`;
        const numero = "51989575820";
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");

        // Resetear el formulario
        setFormInputs({
          nombres: "",
          apellidos: "",
          servicio: "",
          carrera: "",
          universidad: "",
          telefono: "",
        });

      }, 2000);

    } catch (error) {
      console.error("Error:", error);
      setSubmitError("Ocurrió un error al enviar el formulario. Por favor intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModal = () => {
    setDialog(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setDialog(false);
    document.body.style.overflow = "";
  };

  const handleCheckoutClick = () => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "InitiateCheckout", {
        value: 37.00,   // precio de tu producto
        currency: "PEN" // código ISO (puede ser USD, EUR, MXN, etc.)
      });
    }

    // Redirigir a Hotmart
    window.open("https://pay.hotmart.com/C101263888O?checkoutMode=10", "_blank");
  };



  return (
    <LayoutApp>
      <main className="overflow-hidden">
        <section
          className={`h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative`}
        >
          <div className="main_background_02 absolute top-0 left-0 w-full h-full"></div>
          <figure className="w-full h-full">
            <img
              src={backgroundCentroRecursos}
              className="w-full h-full object-cover"
              alt="background-tsp"
              decoding="async"
            />
          </figure>
          <div className="absolute top-[234px] right-[80px] hidden 1xl:block w-[600px]">
            <form
              data-aos="zoom-in"
              data-aos-duration="700"
              onSubmit={handleForm}
              className="w-full space-y-6"
            >
              <input
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold focus:placeholder:opacity-0 input_gradient"
                type="text"
                name="nombres"
                required
                id="nombres"
                placeholder="Nombres"
                value={formInputs.nombres}
                onChange={handleChange}
              />
              <input
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold focus:placeholder:opacity-0 input_gradient"
                type="text"
                name="apellidos"
                required
                id="apellidos"
                placeholder="Apellidos"
                value={formInputs.apellidos}
                onChange={handleChange}
              />
              <select
                name="servicio"
                id="servicio"
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold font-bold input_gradient"
                value={formInputs.servicio}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecciona un servicio (opcional)
                </option>
                <option value="Tesis">Tesis</option>
                <option value="TSP">TSP</option>
                <option value="Artículo académico">Artículo académico</option>
                <option value="Plan de negocio">Plan de negocio</option>
                <option value="Asesoría académica">Asesoría académica</option>
              </select>
              <input
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient"
                type="text"
                required={true}
                name="carrera"
                id="carrera"
                placeholder="Carrera"
                value={formInputs.carrera}
                onChange={handleChange}
              />
              <input
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient"
                type="text"
                required={true}
                name="universidad"
                id="universidad"
                placeholder="Universidad"
                value={formInputs.universidad}
                onChange={handleChange}
              />
              <input
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient"
                type="tel"
                required={true}
                placeholder="Teléfono"
                id="telefono"
                name="telefono"
                value={formInputs.telefono}
                onChange={handleChange}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full py-3 bg-[#0CB2D5] text-white font-bold text-[22px] rounded-full disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "¡Da el primer paso!"}
              </button>
              {submitError && (
                <p className="text-red-500 text-center">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="text-green-500 text-center animate-pulse">
                  ¡Formulario enviado con éxito!
                </p>
              )}
            </form>
          </div>
          <div
            data-aos="zoom-in-up"
            className="absolute uppercase -bottom-[100px] w-[95%] mn:w-[338px] sm:w-[447px] lg:w-[690px] 1xl:w-[1165px] 4xl:w-[1518px] mn:ml-[18px] sm:ml-[46px] lg:ml-[80px] 4xl:ml-[104px] ml-2 space-y-2 mn:space-y-0"
          >
            <p className="text-white text-[14px] sm:text-[25px] lg:text-[25px] 1xl:text-[35px] 4xl:text-[50px]  font-extrabold">
              Como cliente de Alejandría.
            </p>
            <p className="text-[12px] sm:text-[20px] lg:text-[20px] 1xl:text-[35px] 4xl:text-[45px] text-white font-bold">
              disfrutas de acceso privilegiado a herramientas y recursos
              diseñados especialmente para impulsar tu crecimiento profesional y
              académico al máximo nivel.
            </p>
          </div>
        </section>

        {/* Resto del código permanece igual */}
        <section className=" linear_centro_01 py-[0.1px]">


          <div className="mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] space-y-[200px] mt-[200px] sm:mt-[268px] lg:mt-[250px] 4xl:mt-[360px]">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              className="font-semibold mx-auto w-[95%] sm:w-auto space-y-[20px]"
            >
              <h2 className="uppercase text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[30px]  1xl:text-[30px] 4xl:text-[35px] font-semibold">
                Eventos
              </h2>
              <p className="text-white font-semibold  mn:w-[315px] sm:w-[435px] lg:w-[644px] 1xl:w-[968px] 4xl:w-[1054px] text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[40px] text-justify mx-auto mn:mx-0">
                Mantente actualizado con nuestros talleres, seminarios y
                webinars exclusivos diseñados para potenciar tus habilidades
                académicas. Descubre nuevas tendencias en investigación,
                redacción publicación científica y tecnología, todo de la mano
                de expertos reconocidos en sus campos.
              </p>
            </div>

            <Marquee
              speed={100}
              className="overflow-hidden pt-[50px] sm:pt-[50px] lg:pt-[100px] 1xl:pt-[200px]"
            >
              <div className="image_wrapper">
                <img
                  className="block w-[250px] h-[187px] sm:w-[380px] sm:h-[237px] 1xl:h-[290px] 1xl:w-[420px] object-cover rounded-3xl"
                  src={image_01}
                  alt="image_01"
                />
              </div>
              <div className="image_wrapper">
                <img
                  className="block   w-[250px] h-[187px] sm:w-[380px] sm:h-[237px] 1xl:h-[290px] 1xl:w-[420px] object-cover rounded-3xl"
                  src={image_02}
                  alt="image_02"
                  decoding="async"
                />
              </div>
              <div className="image_wrapper">
                <img
                  className="block   w-[250px] h-[187px] sm:w-[380px] sm:h-[237px] 1xl:h-[290px] 1xl:w-[420px] object-cover rounded-3xl"
                  src={image_03}
                  alt="image_03"
                  decoding="async"
                />
              </div>
              <div className="image_wrapper">
                <img
                  className="block w-[250px] h-[187px] sm:w-[380px] sm:h-[237px] 1xl:h-[290px] 1xl:w-[420px] object-cover rounded-3xl"
                  src={image_10}
                  alt="image_04"
                  decoding="async"
                />
              </div>
              <div className="image_wrapper">
                <img
                  className="block  w-[250px] h-[187px] sm:w-[380px] sm:h-[237px] 1xl:h-[290px] 1xl:w-[420px] object-cover rounded-3xl"
                  src={image_11}
                  alt="image_05"
                  decoding="async"
                />
              </div>
            </Marquee>
          </div>
        </section>
        <section className="bg-[#1c1c34] pt-[200px] sm:pt-[250px] lg:pt-[250px] 1xl:pt-[362px]">
          <div className="">
            <div
              data-aos="fade-right"
              data-aos-offset="270"
              className="w-[95%] mn:w-[315px] sm:w-[491px] lg:w-[616px] 1xl:w-[987px] 4xl:w-[1054px] space-y-[20px] mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] mx-auto mn:mx-0"
            >
              <h2 className="uppercase text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[30px]  1xl:text-[30px] 4xl:text-[35px] font-semibold">
                Herramientas
              </h2>
              <p className="text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[40px] text-white font-semibold leading-normal text-justify">
                Accede a nuestra suite exclusiva de herramientas diseñadas para
                optimizar tu proceso de investigación y escritura. Desde
                generadores de citas automáticas hasta software de detección de
                plagio de última generación, ofrecemos soluciones tecnológicas
                que ahorran tiempo y mejoran la calidad de tu trabajo académico.
                Además, proporcionamos tutoriales personalizados para sacar el
                máximo provecho de cada herramienta.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-offset="270">
              <iframe
                data-aos="fade-down"
                data-aos-offset="270"
                className="mt-[154px] mx-auto w-[95%] mn:w-[339px] h-[200px] mn:h-[164px] sm:w-[520px] sm:h-[276px] lg:w-[795px] lg:h-[393px] 4xl:w-[1102px] 4xl:h-[471px]"
                src="https://www.youtube.com/embed/gmhxmET7mnY"
                title="¿Y TÚ QUE ESPERAS PARA TRIUNFAR?🏆📈"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <button
              onClick={handleContact}
              data-aos="fade-up"
              data-aos-offset="270"
              className="bg-[#FCB400] block mt-[112px] text-[12px] sm:text-[20px] lg:text-[30px] text-white font-extrabold italic w-[95%] mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] lg:w-[740px] lg:h-[100px] 1xl:w-[800px] mx-auto rounded-[50px] uppercase"
            >
              ¡Solicita más información!
            </button>
          </div>
        </section>

        {/*  */}
        <section className="pt-[100px] sm:pt-[250px] lg:pt-[250px] 1xl:pt-[362px] bg-[#1c1c34] pb-[315px]">
          <div className="space-y-[200px]">
            <div
              data-aos="fade-right"
              data-aos-offset="270"
              className="w-[95%] mn:w-full mn:ml-4 sm:ml-[80px] mx-auto"
            >
              <h3 className="text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] uppercase font-semibold mb-[20px]">
                librería virtual
              </h3>
              <p className="text-white w-full mn:w-[300px] sm:w-[396px] lg:w-677px] 1xl:w-[843px] 4xl:w-[1105px] text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25] 4xl:text-[40px] font-semibold text-justify">
                Accede a una amplia colección de recursos digitales, que incluye
                libros especializados, artículos científicos y guías prácticas.
                Nuestra biblioteca virtual te ofrece información confiable y
                actualizada, disponible las 24 horas del día con solo un clic.
              </p>
            </div>
            <div className="pt-[100px] sm:pt-[250px] lg:pt-[250px] 1xl:pt-[362px] space-y-[150px]">
              <div className="">
                <div className="pb-5 flex justify-center space-x-[20px] sm:space-x-[50px] lg:space-x-[50px] 1xl:space-x-[118px] 4xl:space-x-[150px]">
                  <div data-aos="flip-right" data-aos-offset="100" className="border border-white rounded-2xl">
                    <img
                      data-aos="flip-right"
                      data-aos-offset="100"
                      src={image_04}
                      className=" w-[70px] h-[100px] rounded-2xl sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
                      alt="image_04"
                      decoding="async"
                    />
                  </div>
                  <div data-aos="flip-left" data-aos-offset="100" className="border border-white rounded-2xl">
                    <img
                      data-aos="flip-left"
                      data-aos-offset="100"
                      src={image_05}
                      className="rounded-2xl w-[70px] h-[100px] sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
                      alt="image_05"
                      decoding="async"
                    />
                  </div>

                </div>
                <img
                  data-aos="flip-right"
                  data-aos-offset="100"
                  src={image_06}
                  className=" w-[300px] sm:w-[90%] lg:w-[850px] 1xl:w-[1197px] 4xl:w-[1521px] h-[20px] mx-auto sm:-mt-[10px]"
                  alt="image_06"
                  decoding="async"
                />
              </div>
              <div className="">
                <div className="pb-5 flex justify-center space-x-[20px] sm:space-x-[50px] lg:space-x-[50px] 1xl:space-x-[118px] 4xl:space-x-[150px]">
                  <div data-aos="flip-right" data-aos-offset="100" className="border border-white rounded-2xl">
                    <img
                      data-aos="flip-right"
                      data-aos-offset="100"
                      src={image_07}
                      className="rounded-2xl w-[70px] h-[100px] sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
                      alt="image_04"
                      decoding="async"
                    />
                  </div>

                  <img
                    data-aos="flip-left"
                    data-aos-offset="100"
                    src={image_08}
                    className="rounded-2xl w-[70px] h-[100px] sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
                    alt="image_05"
                    decoding="async"
                  />
                  <img
                    data-aos="flip-left"
                    data-aos-offset="100"
                    src={image_09}
                    className="rounded-2xl w-[70px] h-[100px] sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
                    alt="image_05"
                    decoding="async"
                  />
                </div>
                <img
                  data-aos="flip-left"
                  data-aos-offset="100"
                  src={image_06}
                  className="w-[300px] sm:w-[90%] lg:w-[850px] 1xl:w-[1197px] 4xl:w-[1521px] h-[20px] mx-auto sm:-mt-[10px]"
                  alt="image_06"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleContact}
            data-aos="fade-up"
            data-aos-offset="100"
            className="bg-[#FCB400] block mt-[100px] lg:mt-[50px] 1xl:mt-[200px] text-[12px] sm:text-[20px] lg:text-[30px] text-white font-extrabold italic w-[95%] mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] lg:w-[740px] lg:h-[100px] 1xl:w-[800px] mx-auto rounded-[50px] uppercase"
          >
            ¡Solicita más información!
          </button>
        </section>

        <section className="bg-[#1C1C34] pb-[1200px]">
          <div className="bg-[#1C1C34] pt-[50px] mn:pt-[50px] sm:pt-[50px] md:pt-[50px] xl:pt-[50px]">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              className="mb-20 w-[98%] mn:w-[339px] h-[373px] sm:w-[520px] md:w-full md:px-10  lg:w-[880px] xl:w-[1250px] 1xl:w-[1241px] 3xl:w-[1569px] sm:h-[563px] lg:h-[600px] 1xl:h-[402px] 4xl:h-[444px] 1xl:items-center flex flex-col  mx-auto  1xl:gap-x-[50px] gap-y-[20px]"
            >
              <p
                data-aos="zoom-in"
                data-aos-offset="150"
                className="text-white font-semibold text-[14px] sm:text-[30px] lg:text-[38px] xl:text-[45px] 3xl:text-[50px] text-center"
              >
                Te damos las herramientas para dejar el caos atrás y avanzar con seguridad
              </p>

              <div className="flex flex-col text-white gap-5 xl:flex-row">
                <div
                  data-aos="fade-right"
                  data-aos-offset="250"
                  className="w-full flex justify-center"
                >
                  <img
                    className="w-[200px] mn:w-[220px] sm:w-[400px] md:w-[450px] 3xl:w-[600px] h-[250px]  mn:h-[270px] sm:h-[500px] md:h-[600px] 3xl:h-[800px]"
                    src={tesis}
                    alt=""
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="250"
                  className="flex flex-col lg:gap-10 lg:justify-center"
                >
                  <div className="px-5 3xl:w-[800px] ">
                    <div className="flex flex-col  xl:items-start 3xl:gap-5">
                      <p className="text-[18px] sm:text-[30px] md:text-[42px] 3xl:text-[50px] text-center">La Bilbia del Tesista</p>
                      <p className="text-center sm:text-[20px] md:text-[25px] xl:text-[33px] 3xl:text-[38px]">Un <span className="text-[#0CB2D5] ">faro</span>  para tu camino académico</p>
                    </div>
                    <div className="mt-7 font-medium text-[10px] mn:text-[12px] sm:text-[18px] md:text-[20px] lg:text-[25px] 3xl:text-[27px]">
                      <p>- Explicación simple de todos los capítulos de la tesis</p> <br></br>
                      <p className="textfinal">- Plantillas editables, ejemplos reales y ejercicios prácticos</p> <br></br>
                      <p className="textfinal">- Estrategias para elegir el tema, redactar sin bloqueo y organizar tus ideas</p>
                    </div>
                  </div>
                  <div
                    data-aos="zoom-out"
                    data-aos-offset="200"
                    className="flex items-center justify-center relative w-[200px] sm:w-[400px]  1xl:w-auto 1xl:h-auto mx-auto 1xl:mx-0]"
                  >
                    <img
                      src={capa_04}
                      className="block 1xl:hidden absolute  w-[250px] sm:w-[400px] -translate-y-1/2 z-10"
                      alt="capa_02"
                    />
                  </div>
                  <button
                    onClick={handleCheckoutClick}
                    data-aos="fade-up"
                    data-aos-offset="300"
                    className="text-[14px] sm:text-[20px] lg:text-[30px] block mt-4 text-white font-extrabold uppercase bg-[#FCB400] rounded-full w-full mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] lg:w-[720px] lg:h-[80px] 4xl:w-[800px] 4xl:h-[100px] mx-auto"
                  >
                    compre aqui
                  </button>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-offset="200"
                className="flex flex-col text-white px-5  font-medium sm:text-[16px] md:text-[20px] xl:flex-row xl:items-end xl:text-[25px] "
              >
                <div>
                  <p className="text-[#0CB2D5]">Incluye:</p> <br></br>
                  <p><span className="text-[#464646]">✔</span>  Cap. I: Términos Básicos</p> <br></br>
                  <p><span className="text-[#464646]">✔</span>   Cap. II: Estructura de la Tesis</p> <br></br>
                  <p><span className="text-[#464646]">✔</span>  Cap. III: Problema de Investigación</p> <br></br>
                  <p><span className="text-[#464646]">✔</span>  Cap. IV: Título para una Investigación</p> <br></br>
                  <p><span className="text-[#464646]">✔</span>  Cap. V: Matrices de Consistencia y Operacionalización</p> <br></br>
                  <p><span className="text-[#464646]">✔</span>  Cap. VI: Redacción de la Introducción</p> <br></br>
                  <p><span className="text-[#464646]">✔</span>  Cap. VII: Planteamiento del problema</p> <br></br>
                  <p><span className="text-[#464646]">✔</span>  Cap. VIII: Marco Teórico </p> <br></br>
                </div>
                <div>
                  <p><span className="text-[#464646]">✔</span> Cap. IX: Recopilación de Información</p> <br></br>
                  <p><span className="text-[#464646]">✔</span> Cap. X: Metodología</p> <br></br>
                  <p><span className="text-[#464646]">✔</span> Cap. XI: Aspecto Administrativo</p> <br></br>
                  <p><span className="text-[#464646]">✔</span> Cap. XII: Resultados</p> <br></br>
                  <p><span className="text-[#464646]">✔</span> Cap. XIII: Prueba Estadística</p> <br></br>
                  <p><span className="text-[#464646]">✔</span> Cap. XIV: Discusión, Conclusión y Recomendación</p> <br></br>
                  <p><span className="text-[#464646]">✔</span> Cap. XV: Tipos de Matrices según Diseño</p> <br></br>
                  <p><span className="text-[#464646]">✔</span> Cap. XVI: Tips para realizar el Parafraseo</p> < br></br>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </LayoutApp>
  );
};

export default Centro;