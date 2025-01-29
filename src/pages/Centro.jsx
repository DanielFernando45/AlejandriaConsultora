import React, { useEffect, useState } from "react";
import LayoutApp from "../layout/LayoutApp";
import backgroundCentroRecursos from "../assets/images/banners/backgroundCentroRecursos.webp";
import image_01 from "../assets/images/centro-recursos/image_01.webp";
import image_02 from "../assets/images/centro-recursos/image_02.webp";
import image_03 from "../assets/images/centro-recursos/image_03.webp";
import image_04 from "../assets/images/centro-recursos/image_04.webp";
import image_05 from "../assets/images/centro-recursos/image_05.webp";
import image_06 from "../assets/images/centro-recursos/image_06.png";
import image_07 from "../assets/images/centro-recursos/image_07.webp";
import image_08 from "../assets/images/centro-recursos/image_08.webp";
import image_09 from "../assets/images/centro-recursos/image_09.webp";
import image_10 from "../assets/images/centro-recursos/image_10.webp";
import image_11 from "../assets/images/centro-recursos/image_11.webp";
import Aos from "aos";
import "aos/dist/aos.css";

import Marquee from "react-fast-marquee";

const Centro = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const handleContact = () => {
    event.preventDefault(event);
    let mensaje = `Hola vengo de tu página web y deseo información de los servicios que brindan.`;
    const numero = "922060146";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const [dialog, setDialog] = useState(false);
  const [formInputs, setFormInputs] = useState({
    nombre: "",
    servicio: "",
    carrera: "",
    universidad: "",
  });

  const handleChange = (event) => {
    setFormInputs((lastValues) => ({
      ...lastValues,
      [event.target.id]: event.target.value,
    }));
  };

  const handleForm = (event) => {
    event.preventDefault();
    if (
      [
        formInputs.nombre.trim(),
        formInputs.servicio.trim(),
        formInputs.carrera.trim(),
        formInputs.universidad.trim(),
      ].some((field) => field === "")
    ) {
      alert("Ingrese todos los campos");
      return;
    }

    let mensaje = `Hola soy *${formInputs.nombre}*, soy de la carrera *${formInputs.carrera}* de la universidad *${formInputs.universidad}*  y deseo cotizar y adquirir el servicio de *${formInputs.servicio}*`;
    const numero = "966319041";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const handleModal = () => {
    setDialog(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setDialog(false);
    document.body.style.overflow = "";
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
                name="nombre"
                required
                id="nombre"
                placeholder="Nombre"
                onChange={handleChange}
              />
              <select
                name="option_service"
                id="servicio"
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold font-bold input_gradient"
                defaultValue=""
                required
                onChange={handleChange}
              >
                <option value="" disabled defaultValue>
                  Selecciona un servico
                </option>
                <option value="Tesis">Tesis</option>
                <option value="TSP">TSP</option>
                <option value="Artículo académico">Artículo académico</option>
                <option value="Plan de negocio">Plan de negocio</option>
              </select>
              <input
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient"
                type="text"
                required={true}
                name="carrera"
                id="carrera"
                placeholder="Carreras"
                onChange={handleChange}
              />
              <input
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient"
                type="text"
                required={true}
                name="universidad"
                id="universidad"
                placeholder="Universidad"
                onChange={handleChange}
              />
              <input
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient"
                type="text"
                required={true}
                placeholder="Whatsapp "
              />
              <button
                type="submit"
                className="block w-full py-3 bg-[#0CB2D5] text-white font-bold text-[22px] rounded-full"
              >
                ¡Da el primer paso!
              </button>
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

        <section className=" linear_centro_01 py-[0.1px]">
          <section className="block 1xl:hidden pt-[200px] sm:pt-[267px] lg:pt-[244px]">
            <div className="w-[95%] mn:w-[338px] sm:w-[520px] lg:w-[740px] mx-auto">
              <form
                data-aos="zoom-in"
                data-aos-duration="700"
                onSubmit={handleForm}
                className="w-full space-y-6"
              >
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  placeholder="Nombre"
                  onChange={handleChange}
                />
                <select
                  name="option_service"
                  id="servicio"
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  defaultValue=""
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled defaultValue>
                    Selecciona un servico
                  </option>
                  <option value="Tesis">Tesis</option>
                  <option value="TSP">TSP</option>
                  <option value="Artículo académico">Artículo académico</option>
                  <option value="Plan de negocio">Plan de negocio</option>
                </select>
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="carrera"
                  id="carrera"
                  required
                  placeholder="carreras"
                  onChange={handleChange}
                />
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="universidad"
                  id="universidad"
                  required
                  placeholder="universidad"
                  onChange={handleChange}
                />
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  required
                  placeholder="Whatsapp "
                />
                <button
                  type="submit"
                  className="block w-full py-3 bg-[#0CB2D5] text-white font-bold mn:text-[22px] rounded-full"
                >
                  ¡Da el primer paso!
                </button>
              </form>
            </div>
          </section>

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
              speed={300}
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
                // referrerPolicy="strict-origin-when-cross-origin"
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
                <div className="flex justify-center space-x-[20px] sm:space-x-[50px] lg:space-x-[50px] 1xl:space-x-[118px] 4xl:space-x-[150px]">
                  <img
                    data-aos="flip-right"
                    data-aos-offset="100"
                    src={image_04}
                    className="w-[70px] h-[100px] sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
                    alt="image_04"
                    decoding="async"
                  />
                  <img
                    data-aos="flip-left"
                    data-aos-offset="100"
                    src={image_05}
                    className="w-[70px] h-[100px] sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
                    alt="image_05"
                    decoding="async"
                  />
                </div>
                <img
                  data-aos="flip-right"
                  data-aos-offset="100"
                  src={image_06}
                  className="w-[300px] sm:w-[90%] lg:w-[850px] 1xl:w-[1197px] 4xl:w-[1521px] h-[20px] mx-auto sm:-mt-[10px]"
                  alt="image_06"
                  decoding="async"
                />
              </div>
              <div className="">
                <div className="flex justify-center space-x-[20px] sm:space-x-[50px] lg:space-x-[50px] 1xl:space-x-[118px] 4xl:space-x-[150px]">
                  <img
                    data-aos="flip-right"
                    data-aos-offset="100"
                    src={image_07}
                    className="w-[70px] h-[100px] sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
                    alt="image_04"
                    decoding="async"
                  />
                  <img
                    data-aos="flip-left"
                    data-aos-offset="100"
                    src={image_08}
                    className="w-[70px] h-[100px] sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
                    alt="image_05"
                    decoding="async"
                  />
                  <img
                    data-aos="flip-left"
                    data-aos-offset="100"
                    src={image_09}
                    className="w-[70px] h-[100px] sm:w-[127px] sm:h-[180px] lg:w-[155px] lg:h-[220px] 1xl:w-[279px] 1xl:h-[394px] 4xl:w-[354px] 4xl:h-[500px]"
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
      </main>
    </LayoutApp>
  );
};

export default Centro;
