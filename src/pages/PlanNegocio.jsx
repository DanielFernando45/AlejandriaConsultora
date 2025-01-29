import LayoutApp from "../layout/LayoutApp";
import CarouselMarquee from "../components/CarouselMarquee";
// ICONOS
import backgroundPlanNegocio from "../assets/images/banners/backgroundPlanNegocio.webp";
import capa_mini from "../assets/icons/capa_mini.svg";
import icono_01 from "../assets/icons/tsp/icono_01.svg";
import icono_02 from "../assets/icons/tsp/icono_02.svg";
import icono_03 from "../assets/icons/tsp/icono_03.svg";
import icono_04 from "../assets/icons/tsp/icono_04.svg";
import icono_05 from "../assets/icons/tsp/icono_05.svg";
import icono_06 from "../assets/icons/tsp/icono_06.svg";
import icono_07 from "../assets/icons/tsp/icono_07.svg";
import icono_08 from "../assets/icons/tsp/icono_08.svg";
import icono_09 from "../assets/icons/tsp/icono_09.svg";
import icono_10 from "../assets/icons/tsp/icono_10.svg";
import icono_11 from "../assets/icons/tsp/icono_11.svg";
import icono_12 from "../assets/icons/tsp/icono_12.svg";
import icono_13 from "../assets/icons/tsp/icono_13.svg";
import icono_14 from "../assets/icons/tsp/icono_14.svg";
// IMAGES
import image_01 from "../assets/images/plan-negocio/image_01.webp";
import image_02 from "../assets/images/tsp/image_02.webp";
import image_03 from "../assets/images/tsp/image_03.webp";
import image_04 from "../assets/images/tsp/image_04.webp";
import star from "../assets/icons/star.svg";
import comillas from "../assets/icons/comillas.png";
import capa_01 from "../assets/images/capa_01.png";
import capa_02 from "../assets/images/capa_02.png";
import capa_03 from "../assets/icons/capa_03.png";
import capa_04 from "../assets/images/capa_04.png";
import { ImQuotesLeft } from "react-icons/im";

const PlanNegocio = () => {
  const handleContact = () => {
    event.preventDefault(event);
    let mensaje = `Hola vengo de tu página web y deseo información de los servicios que brindan.`;
    const numero = "922060146";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <LayoutApp>
      <main className="overflow-hidden">
        <section
          className={`h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative`}
        >
          <img
            src={backgroundPlanNegocio}
            className="w-full h-full object-cover lg:object-fill"
            alt="background-tsp"
          />
          <div className="main_background_02 uppercase text-white absolute top-0 z-10 h-full w-full flex justify-center items-end">
            <div
              data-aos="fade-right"
              data-aos-offset="100"
              className="text-center mb-[25px]"
            >
              <p className="text-[14px] sm:text-[25px] lg:text-[30px] 1xl:text-[50px] 4xl:text-[55px] font-extrabold">
                ¡tu éxito comienza aquí!
              </p>
              <p className="text-[13px] sm:text-[20px] lg:text-[30px] 1xl:text-[45px] 4xl:text-[55px] font-bold">
                ESTAMOS A LA ALTURA DE TUS GRANDES METAS
              </p>
            </div>
          </div>
        </section>
        {/* CONTENT */}
        <section>
          <div className="new pt-[173px]">
            <div className="w-[98%] mn:w-[339px] h-[373px] sm:w-[520px] lg:w-[744px] 1xl:w-[1241px] 4xl:w-[1569px] sm:h-[563px] lg:h-[600px] 1xl:h-[402px] 4xl:h-[444px] 1xl:items-center flex flex-col 1xl:flex-row mx-auto 1xl:gap-x-[50px] gap-y-[50px]">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                className="sm:w-[447px] lg:w-[557px] 1xl:w-[548px] 4xl:w-[660px] leading-normal ml-2"
              >
                <h3 className="text-[#0CB2D5] text-[16px] sm:text-[25px] lg:text-[30px] 4xl:text-[35px] font-semibold">
                  ¡TE INVITAMOS A SUPERARTE!
                </h3>
                <p className="text-white font-semibold text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[45px]">
                  Nuestro servicio de asesoría en{" "}
                  <span className="font-extrabold italic">Plan de negocio</span>{" "}
                  está especialmente diseñado para que logres:
                </p>
              </div>
              <div className="flex flex-1 gap-x-[8px] mn:gap-x-[16px] sm:gap-x-[35px] lg:gap-x-[63px] 1xl:gap-x-[51px] 4xl:gap-x-[57px] text-center h-full">
                <div
                  data-aos="flip-left"
                  data-aos-offset="200"
                  className="gradiente_testimonio gap-y-6 flex flex-col items-center justify-center w-[100px] h-[120px] sm:w-[150px] lg:w-[171px] 4xl:w-[230px] sm:h-[200px] 4xl:h-[260px] rounded-2xl"
                >
                  <img
                    src={icono_01}
                    className="block w-[40px] mb:w-[45px] lg:w-[71px] lg:h-[80px]"
                    alt="icono_01"
                  />
                  <p className="text-white leading-none font-bold text-[11px] mn:text-[13px]  sm:text-[18px] 4xl:text-[25px] italic 4xl:w-[166px]">
                    Multiplicar tus ingresos
                  </p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-offset="200"
                  className="gradiente_testimonio gap-y-6 flex flex-col items-center justify-center  w-[100px] h-[120px] sm:w-[150px] lg:w-[171px] 4xl:w-[230px] sm:h-[200px] 4xl:h-[260px] rounded-2xl self-center"
                >
                  <img
                    src={icono_02}
                    className="block w-[40px] mb:w-[45px] lg:w-[81px] lg:h-[80px]"
                    alt="icono_02"
                  />
                  <p className="text-white leading-none font-bold text-[12px] mn:text-[13px] sm:text-[18px] 4xl:text-[25px] italic 4xl:w-[119px]">
                    Reducir el estrés
                  </p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-offset="200"
                  className="gradiente_testimonio gap-y-6 flex flex-col items-center justify-center  w-[100px] h-[120px] sm:w-[150px] lg:w-[171px] 4xl:w-[230px] sm:h-[200px] 4xl:h-[260px] rounded-2xl self-end"
                >
                  <img
                    src={icono_03}
                    className="block w-[40px] mb:w-[45px] lg:w-[64px] lg:h-[80px]"
                    alt="icono_03"
                  />
                  <p className="text-white leading-none font-bold text-[11px] mn:text-[13px] sm:text-[18px] 4xl:text-[25px] italic 4xl:w-[166px]">
                    Reforzar tu autoridad profesional
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <section className="relative">
              <div className="pt-[150px] lg:pt-[300px] w-[95%] mn:w-[339px] sm:w-[520px] lg:w-[744px] 1xl:w-[1286px] 3xl:w-[1518px] mx-auto space-y-[100px] mb-[200px] lg:mb-[250px] 1xl:mb-[400px]">
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-out-quint"
                  className="font-semibold text-center"
                >
                  <h3 className="text-[#0CB2D5] uppercase text-[16px] sm:text-[20px] lg:text-[25px] 4xl:text-[35px]">
                    Más que un plan de negocio:
                  </h3>
                  <p className="text-white font-bold text-[14px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[45px]">
                    Un nuevo comienzo
                  </p>
                </div>

                <div className="flex flex-col 1xl:flex-row 1xl:h-[505px] 4xl:h-[627px] 1xl:gap-x-[25px] 4xl:gap-x-[100px] gap-y-[100px] relative">
                  <div className="h-[380px] sm:h-[600px] lg:h-[650px] 1xl:h-auto 4xl:w-[957px] flex gap-x-[42px]">
                    <div className="w-[4px] bg-[#0CB2D5]"></div>
                    <div className="text-white 1xl:w-[924px] 4xl:w-[901px] text-[12px] sm:text-[20px] lg:text-[25px] 4xl:text-[26px] font-semibold italic flex flex-col justify-between">
                      <p
                        data-aos="fade-up"
                        data-aos-offset="150"
                        className="4xl:w-[750px] arrow_list_tsp_01"
                      >
                        <b className="font-extrabold">
                          Multiplica tus ingresos
                        </b>{" "}
                        al crear un plan de negocio sólido que te prepare para
                        el éxito.
                      </p>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="150"
                        className="4xl:w-[780px] arrow_list_tsp_01"
                      >
                        <b className="font-extrabold">Reduce el estrés</b>{" "}
                        dejando que nuestros expertos se encarguen de cada
                        aspecto de tu plan de negocio.
                      </p>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="150"
                        className="4xl:w-[560px] arrow_list_tsp_01"
                      >
                        <b className="font-extrabold">Libera tiempo valioso</b>{" "}
                        para enfocarte en lo que realmente importa.
                      </p>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="150"
                        className="4xl:w-[860px] arrow_list_tsp_01"
                      >
                        <b className="font-extrabold">
                          Refuerza tu marca personal
                        </b>{" "}
                        para que logres ser reconocido en tu área por tu equipo
                        de trabajo, alumnos o por tus clientes.
                      </p>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="150"
                        className="4xl:w-[880px] arrow_list_tsp_01"
                      >
                        <b className="font-extrabold">
                          Logra satisfacción personal
                        </b>{" "}
                        al ver concretado tu plan de negocio, alcanzando un hito
                        clave en tu carrera.
                      </p>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="150"
                        className="4xl:w-[885px] arrow_list_tsp_01"
                      >
                        <b className="font-extrabold">
                          Elimina la presión social y familiar
                        </b>{" "}
                        demostrando tu capacidad para culminar tus proyectos y
                        llena de orgullo a quienes te rodean.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative w-[200px] sm:w-[400px] sm:h-[450px] 1xl:w-auto 1xl:h-auto mx-auto 1xl:mx-0]">
                    <img
                      data-aos="zoom-in"
                      data-aos-offset="250"
                      src={image_01}
                      className="block rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] 1xl:w-[300px] 1xl:h-[300px] 4xl:w-[400px] 4xl:h-[400px] relative z-20"
                      alt="image_01"
                    />
                    <img
                      src={capa_04}
                      className="block 1xl:hidden absolute top-1/2 w-[250px] sm:w-[400px] -translate-y-1/2 z-10"
                      alt="capa_02"
                    />
                  </div>
                </div>
              </div>
              <img
                src={capa_02}
                className="hidden 1xl:block absolute 4xl:w-[300px] 4xl:h-[600px] bottom-0 right-0"
                alt="capa_02"
              />
            </section>
            {/*  */}

            {/*  */}
            <div className="gradient_to_white pt-[100px] pb-[200px] lg:pb-[250px] 1xl:pb-[400px]">
              <div>
                <div className="space-y-[47px] w-[95%] mn:w-auto mx-auto">
                  <h3
                    data-aos="fade-up"
                    className="uppercase font-extrabold text-[16px] sm:text-[25px] lg:text-[30px] mn:w-[340px] sm:w-[564px]  lg:w-[649px] 1xl:w-[1051px] 4xl:w-[1402px] mx-auto 4xl:text-[40px] italic text-center"
                  >
                    ¿Listo para llevar tu plan de negocio al siguiente nivel?
                  </h3>
                  <button
                    onClick={handleContact}
                    data-aos="fade-up"
                    className="italic uppercase text-white bg-[#FCB400]  font-extrabold w-full mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] sm:text-[18px] lg:w-[825px] lg:h-[80px] 4xl:h-[100px] 4xl:w-[913px] text-[11px] lg:text-[25px] 1xl:text-[30px] rounded-full mx-auto block"
                  >
                    ¡quiero empezar con mi plan de negocio!
                  </button>
                </div>

                <div className="mx-auto text-center mt-[150px] lg:mt-[250px] mb-[150px]">
                  <h3
                    data-aos="fade-up"
                    className="text-[#0CB2D5] italic font-semibold text-[16px] sm:text-[20px] lg:text-[25px] 1xl:text-[35px] uppercase"
                  >
                    De la mano contigo:
                  </h3>
                  <p
                    data-aos="fade-up"
                    className="italic font-bold mx-auto w-[235px] sm:w-[480px] lg:w-[700px] 1xl:w-[615px] 4xl:w-[850px] text-[14px] sm:text-[25px] lg:text-[30px] 4xl:text-[45px]"
                  >
                    Tu asesor personal en cada etapa de tu{" "}
                    <span className="uppercase not-italic font-extrabold">
                      plan de negocio
                    </span>
                  </p>
                </div>

                <div className="flex lg:gap-x-[80px] 1xl:gap-x-[80px] w-[98%] mn:w-[345px] sm:w-[564px] lg:w-[800px] 1xl:w-[1343px] 4xl:w-[1645px] mx-auto">
                  <div className="flex-1 space-y-[120px]">
                    <div className="flex flex-col justify-between  1xl:h-[299px] 4xl:h-[319px] arrow_list_tsp_02_r">
                      <div
                        data-aos="zoom-in-up"
                        className="w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] lg:h-[100px] lg:w-[100px] 1xl:w-[110px] 1xl:h-[110px] flex items-center border bg-white shadow-lg justify-center rounded-full sm:p-3 p-[6px] lg:p-2 1xl:mt-0 mx-auto sm:mx-0 sm:ml-[170px] lg:ml-auto"
                      >
                        <img
                          src={icono_04}
                          className="lg:w-[45px] lg:h-[45px] p-2 lg:p-0"
                          alt="icono_04"
                        />
                      </div>
                      <div
                        data-aos="zoom-in-right"
                        className="flex flex-col-reverse w-[80%] mn:w-auto ml-8 mn:ml-0 1xl:flex-row justify-end 1xl:gap-x-[25px] 4xl:gap-x-[30px] mt-[50px] pr-4"
                      >
                        <div className="1xl:text-end leading-tight 1xl:w-[386px] 4xl:w-[542px] italic">
                          <p className="text-[14px] sm:text-[20px] lg:text-[25px] 4lx:text-[28px] font-bold">
                            Propuesta de temas
                          </p>
                          <p className="sm:w-[193px] lg:w-auto font-semibold text-[12px] sm:text-[15px] lg:text-[18px] 4xl:text-[25px]">
                            Los temas son personalizados y acordes a tu modelo
                            de negocio.
                          </p>
                        </div>
                        <p className="text-[18px] sm:text-[35px] lg:text-[40px] 4xl:text-[45px] font-bold italic">
                          02
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between  1xl:h-[299px] 4xl:h-[319px] arrow_list_tsp_02_r">
                      <div
                        data-aos="zoom-in-up"
                        className="w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] lg:h-[100px] lg:w-[100px] 1xl:w-[110px] 1xl:h-[110px] flex items-center border bg-white shadow-lg justify-center rounded-full sm:p-3 p-[6px] lg:p-2 1xl:mt-0 mx-auto sm:mx-0 sm:ml-[170px] lg:ml-auto"
                      >
                        <img
                          src={icono_06}
                          className="lg:w-[45px] lg:h-[45px] p-2 lg:p-0"
                          alt="icono_04"
                        />
                      </div>
                      <div
                        data-aos="zoom-in-right"
                        className="flex flex-col-reverse w-[80%] mn:w-auto ml-8 mn:ml-0 1xl:flex-row justify-end 1xl:gap-x-[25px] 4xl:gap-x-[30px] mt-[50px]"
                      >
                        <div className="1xl:text-end leading-tight 1xl:w-[519px] 4xl:w-[519px] italic pr-4">
                          <p className="sm:w-[192px] lg:w-auto text-[14px] sm:text-[20px] lg:text-[25px] 4lx:text-[28px] font-bold">
                            Corrección de observaciones ilimitadas
                          </p>
                          <p className="sm:w-[204px] lg:w-auto font-semibold text-[12px] sm:text-[15px] lg:text-[18px] 4xl:text-[25px]">
                            Revisión continua hasta cumplir con todas las
                            observaciones.
                          </p>
                        </div>
                        <p className="text-[18px] sm:text-[35px] lg:text-[40px] 4xl:text-[45px] font-bold italic">
                          04
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between  1xl:h-[299px] 4xl:h-[319px] arrow_list_tsp_02_r">
                      <div
                        data-aos="zoom-in-up"
                        className="w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] lg:h-[100px] lg:w-[100px] 1xl:w-[110px] 1xl:h-[110px] flex items-center border bg-white shadow-lg justify-center rounded-full sm:p-3 p-[6px] lg:p-2 1xl:mt-0 mx-auto sm:mx-0 sm:ml-[170px] lg:ml-auto"
                      >
                        <img
                          src={icono_08}
                          className="sm:w-[45px] lg:w-[45px] lg:h-[45px] p-3 lg:p-0"
                          alt="icono_08"
                        />
                      </div>
                      <div
                        data-aos="zoom-in-right"
                        className="flex flex-col-reverse w-[80%] mn:w-auto ml-8 mn:ml-0 1xl:flex-row justify-end 1xl:gap-x-[25px] 4xl:gap-x-[30px] mt-[50px]"
                      >
                        <div className="1xl:text-end leading-tight 1xl:w-[519px] 4xl:w-[556px] italic pr-4">
                          <p className="sm:w-[202px] lg:w-auto text-[14px] sm:text-[20px] lg:text-[25px] 4lx:text-[28px] font-bold">
                            Sesión de inducción personalizada
                          </p>
                          <p className="font-semibold text-[12px] sm:text-[15px] lg:text-[18px] ml-auto 4xl:text-[25px] 1xl:w-[513px] 4xl:w-[513px]">
                            Adaptada a tus necesidades para que comprendas cada
                            detalle del proceso.
                          </p>
                        </div>
                        <p className="text-[18px] sm:text-[35px] lg:text-[40px] 4xl:text-[45px] font-bold italic">
                          06
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[3px] mn:w-[8px] bg-[#0CB2D5]"></div>
                  <div className="flex-1 space-y-[120px] ">
                    <div className="flex flex-col justify-between w-[80%] mn:w-auto 1xl:h-[299px] 4xl:h-[319px] arrow_list_tsp_02">
                      <div
                        data-aos="zoom-in-left"
                        className="flex flex-col 1xl:flex-row gap-x-6 "
                      >
                        <p className="text-[18px] sm:text-[35px] lg:text-[40px] 4xl:text-[45px]  font-bold italic text-end 1xl:text-start">
                          01
                        </p>
                        <div className="leading-tight italic text-end 1xl:text-start pl-6">
                          <p className="text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[28px] font-bold">
                            Creación de un grupo WhatsApp
                          </p>
                          <p className="font-semibold text-[12px] sm:text-[15px] lg:text-[18px] 4xl:text-[25px]">
                            Canal para resolver tus dudas en tiempo real.
                          </p>
                        </div>
                      </div>
                      <div
                        data-aos="zoom-in-up"
                        className="w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] lg:h-[100px] lg:w-[100px] 1xl:w-[110px] 1xl:h-[110px] flex items-center border bg-[#1C1C34] shadow-lg justify-center mx-auto  sm:ml-10 lg:ml-0 rounded-full p-2 mt-[50px] 1xl:mt-0"
                      >
                        <img
                          src={icono_05}
                          className="sm:w-[45px] lg:w-[45px] lg:h-[45px] p-2  lg:p-0"
                          alt="icono_04"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between  w-[80%] mn:w-auto 1xl:h-[299px] 4xl:h-[319px] arrow_list_tsp_02">
                      <div
                        data-aos="zoom-in-left"
                        className="flex flex-col 1xl:flex-row gap-x-6 "
                      >
                        <p className="text-[18px] sm:text-[35px] lg:text-[40px] 4xl:text-[45px]  font-bold italic text-end 1xl:text-start">
                          03
                        </p>
                        <div className="leading-tight italic text-end 1xl:text-start pl-6">
                          <p className="text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[28px] font-bold">
                            Elaboración integral (100%)
                          </p>
                          <p className="font-semibold text-[12px] sm:text-[15px] lg:text-[18px] 4xl:text-[25px] 1xl:w-[416px] 4xl:w-[559px]">
                            Desarrollo del plan de negocio desde la introducción
                            hasta la viabilidad económica y financiera.
                          </p>
                        </div>
                      </div>
                      <div
                        data-aos="zoom-in-up"
                        className="w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] lg:h-[100px] lg:w-[100px] 1xl:w-[110px] 1xl:h-[110px] flex items-center border bg-[#1C1C34] shadow-lg justify-center mx-auto  sm:ml-10 lg:ml-0 rounded-full p-2 mt-[50px] 1xl:mt-0"
                      >
                        <img
                          src={icono_07}
                          className="sm:w-[45px] lg:w-[45px] lg:h-[45px] p-2 lg:p-0"
                          alt="icono_07"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between w-[80%] mn:w-auto 1xl:h-[299px] 4xl:h-[319px] arrow_list_tsp_02">
                      <div
                        data-aos="zoom-in-left"
                        className="flex flex-col 1xl:flex-row gap-x-6 "
                      >
                        <p className="text-[18px] sm:text-[35px] lg:text-[40px] 4xl:text-[45px]  font-bold italic text-end 1xl:text-start">
                          05
                        </p>
                        <div className="leading-tight italic text-end 1xl:text-start pl-6">
                          <p className="text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[28px] font-bold">
                            Reporte de originalidad con Turnitin
                          </p>
                          <p className="font-semibold text-[12px] sm:text-[15px] lg:text-[18px] 4xl:text-[25px] 1xl:w-[416px] 4xl:w-[468px]">
                            Garantizando un trabajo 100% único y libre de IA.
                          </p>
                        </div>
                      </div>
                      <div
                        data-aos="zoom-in-up"
                        className="w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] lg:h-[100px] lg:w-[100px] 1xl:w-[110px] 1xl:h-[110px] flex items-center border bg-[#1C1C34] shadow-lg justify-center mx-auto sm:ml-10 lg:ml-0 rounded-full p-2 mt-[50px] 1xl:mt-0"
                      >
                        <img
                          src={icono_09}
                          className="sm:w-[45px] lg:w-[45px] lg:h-[45px] p-2 lg:p-0"
                          alt="icono_09"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}

            <div className="gradiend_to_top pb-[20px]">
              <div>
                <h2
                  data-aos="fade-up"
                  className="text-[#0CB2D5] font-extrabold italic text-[16px] sm:text-[25px] lg:text-[30px] 4xl:text-[40px] text-center mb-[80px]"
                >
                  ¡AÚN HAY MÁS…..!
                </h2>

                <div className="pt-[30px] space-y-10">
                  {/*  */}
                  <div className="sm:hidden mn:w-[330px] mx-auto flex flex-wrap justify-center gap-x-[20px] gap-y-[20px]">
                    <div
                      data-aos="flip-left"
                      className="w-[150px] h-[140px] gap-y-[5px] gradiente_testimonio rounded-3xl flex flex-col items-center justify-center"
                    >
                      <img
                        src={icono_10}
                        className="w-[40px] h-[35px]"
                        alt="icono_10"
                      />
                      <p className="text-[14px] font-bold italic text-center w-[120px] text-white">
                        Presentación impactante en PowerPoint
                      </p>
                    </div>
                    <div
                      data-aos="flip-left"
                      className="w-[150px] h-[140px] gap-y-[5px] gradiente_testimonio rounded-3xl flex flex-col items-center justify-center"
                    >
                      <img
                        src={icono_11}
                        className="w-[40px] h-[35px]"
                        alt="icono_10"
                      />
                      <p className="text-[14px] font-bold italic text-center w-[120px] text-white">
                        Balotario de preguntas claves
                      </p>
                    </div>
                    <div
                      data-aos="flip-left"
                      className="w-[150px] h-[140px] gap-y-[5px] gradiente_testimonio rounded-3xl flex flex-col items-center justify-center"
                    >
                      <img
                        src={icono_12}
                        className="w-[40px] h-[35px]"
                        alt="icono_10"
                      />
                      <p className="text-[14px] font-bold italic text-center w-[120px] text-white">
                        Ensayo de sustentación profesional
                      </p>
                    </div>
                    <div
                      data-aos="flip-left"
                      className="w-[150px] h-[140px] gap-y-[5px] gradiente_testimonio rounded-3xl flex flex-col items-center justify-center"
                    >
                      <img
                        src={icono_13}
                        className="w-[40px] h-[35px]"
                        alt="icono_10"
                      />
                      <p className="text-[14px] font-bold italic text-center w-[78px] text-white">
                        Taller de oratoria
                      </p>
                    </div>
                    <div
                      data-aos="flip-left"
                      className="w-[150px] h-[140px] gap-y-[5px] gradiente_testimonio rounded-3xl flex flex-col items-center justify-center"
                    >
                      <img
                        src={icono_14}
                        className="w-[40px] h-[35px]"
                        alt="icono_10"
                      />
                      <p className="text-[14px] font-bold italic text-center w-[120px] text-white">
                        Taller de control de nervios y ansiedad
                      </p>
                    </div>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="hidden sm:block sm:w-[590px] lg:w-[600px] 1xl:w-[1280px] 4xl:w-[1500px] space-y-[50px] 1xl:space-y-0  1xl:flex flex-wrap gap-10 justify-center mx-auto">
                    <div
                      data-aos="flip-left"
                      className="gradiente_testimonio sm:w-[500px] sm:h-[200px] lg:w-[600px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex 1xl:flex-col items-center justify-center gap-y-4 rounded-3xl mx-auto lg:mx-auto"
                    >
                      <img
                        src={icono_10}
                        className="w-full h-full sm:w-[93px] sm:h-[80px] 1xl:w-[70px] 4xl:w-[78px] 1xl:h-[60px] 4xl:h-[67px]"
                        alt="icono_10"
                      />
                      <p className="text-white font-bold italic text-center sm:w-[180px] 1xl:w-[250px] 4xl:w-[355px] 1xl:text-[18px] 4xl:text-[25px]">
                        Presentación impactante en PowerPoint
                      </p>
                    </div>
                    <div
                      data-aos="flip-left"
                      className="gradiente_testimonio sm:w-[500px] lg:w-[600px] sm:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex 1xl:flex-col items-center justify-center gap-y-4 rounded-3xl mx-auto lg:mx-auto"
                    >
                      <img
                        src={icono_11}
                        className="1xl:w-[59px] 1xl:h-[60px] 4xl:w-[78px] 4xl:h-[67px]"
                        alt="icono_11"
                      />
                      <p className="text-white font-bold italic text-center sm:w-[141px] 1xl:w-[250px] 4xl:w-[355px] 1xl:text-[18px] 4xl:text-[25px]">
                        Balotario de preguntas claves
                      </p>
                    </div>
                    <div
                      data-aos="flip-left"
                      className="gradiente_testimonio sm:w-[500px] lg:w-[600px] sm:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] gap-x-[25px] flex 1xl:flex-col items-center justify-center gap-y-4 rounded-3xl mx-auto lg:mx-auto"
                    >
                      <img
                        src={icono_12}
                        className="1xl:w-[68px] 1xl:h-[60px] 4xl:w-[78px] 4xl:h-[67px]"
                        alt="icono_12"
                      />
                      <p className="text-white font-bold italic sm:w-[150px] text-center1xl:w-[250px] 4xl:w-[355px] 1xl:text-[18px] 4xl:text-[25px]">
                        Ensayo de sustentación profesional
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block lg:w-[600px] space-y-[50px] 1xl:space-y-0 1xl:w-[1280px] 4xl:w-[1500px] 1xl:flex flex-wrap gap-10 justify-center mx-auto">
                    <div
                      data-aos="flip-left"
                      className="gradiente_testimonio sm:w-[500px] lg:w-[600px] sm:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] gap-x-[25px] flex 1xl:flex-col items-center justify-center gap-y-4 rounded-3xl mx-auto lg:mx-0"
                    >
                      <img
                        src={icono_13}
                        className="1xl:w-[55px] 1xl:h-[60px] 4xl:w-[78px] 4xl:h-[67px]"
                        alt="icono_13"
                      />
                      <p className="text-white font-bold italic text-center 1xl:w-[250px] 4xl:w-[355px] 1xl:text-[18px] 4xl:text-[25px]">
                        Taller de oratoria
                      </p>
                    </div>
                    <div
                      data-aos="flip-left"
                      className="gradiente_testimonio sm:w-[500px] lg:w-[600px] sm:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex 1xl:flex-col items-center justify-center gap-y-4 rounded-3xl mx-auto lg:mx-0"
                    >
                      <figure className="1xl:w-[58px] 1xl:h-[60px] 4xl:w-[78px] 4xl:h-[67px]">
                        <img
                          src={icono_14}
                          className="w-full h-full"
                          alt="icono_14"
                        />
                      </figure>
                      <p className="text-white font-bold italic text-center sm:w-[225px] 1xl:w-[250px] 4xl:w-[355px] 1xl:text-[18px] 4xl:text-[25px]">
                        Taller de control de nervios y ansiedad
                      </p>
                    </div>
                  </div>
                  {/*  */}
                </div>

                <div className="text-white font-extrabold uppercase space-y-10 w-[95%] mn:w-[340px] sm:w-[495px] lg:w-[720px] 1xl:w-[941px] 4xl:w-[1086px] mx-auto mt-[150px] lg:mt-[250px]">
                  <h2
                    data-aos="fade-up"
                    className="italic text-center text-[16px] sm:text-[25px] lg:text-[30px] 4xl:text-[35px]"
                  >
                    ¡No esperes más para finalizar tu Plan de negocio!
                  </h2>
                  <button
                    onClick={handleContact}
                    data-aos="fade-up"
                    className="bg-[#FCB400] block mx-auto text-[14px] sm:text-[20px] lg:text-[30px] 4xl:text-[30px] uppercase text-white font-extrabold italic rounded-full w-full mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] lg:w-[720px] lg:h-[80px] 4xl:w-[800px] 4xl:h-[100px]"
                  >
                    ¡finaliza tu Plan de negocio ahora!
                  </button>
                </div>

                <div className="w-[95%] mx-auto mn:w-[339px] sm:w-[515px] lg:w-[743px] 1xl:w-[1241px] 4xl:w-[1500px]  mt-[150px] lg:mt-[250px] 1xl:mt-[400px] space-y-[140px]">
                  <div
                    data-aos="fade-up"
                    className="lg:w-[566px] 4xl:w-[1086px] mx-auto text-center italic"
                  >
                    <h2 className="text-[#0CB2D5] font-semibold uppercase text-[16px] sm:text-[25px] lg:text-[30px] 4xl:text-[35px]">
                      protege tu inversión:
                    </h2>
                    <p className="text-white text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[45px] font-bold">
                      Busca la tranquilidad y seguridad que solo una empresa
                      sólida puede ofrecerte.
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-[50px] mn:gap-y-[100px] 1xl:flex-row 1xl:items-center 4xl:items-start 1xl:h-[380px] 4xl:h-[508px] w-full  1xl:gap-x-[88px] 4xl:gap-x-[61px]">
                    <p
                      data-aos="fade-up"
                      className="text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[30px] w-[263px] sm:w-[409px] lg:w-[463px] 1xl:w-[593px] 4xl:w-[711px] text-white italic font-semibold text-justify sm:text-start"
                    >
                      Somos miembros de la{" "}
                      <span className="text-[#0CB2D5] font-extrabold">
                        Cámara de Comercio de Lima
                      </span>{" "}
                      y contamos con una estructura formal: oficinas físicas,
                      comprobantes de pago y personal registrado en{" "}
                      <span className="text-[#0CB2D5] font-extrabold">
                        SUNEDU
                      </span>
                      .
                    </p>
                    <div
                      data-aos="zoom-in-up"
                      data-aos-offset="200"
                      className="w-[90%] mn:w-[339px] sm:w-[515px] lg:w-[560px] mx-auto 1xl:mx-0 sm:h-[337px] lg:h-[380px] 1xl:h-[380px] 1xl:w-[550px] 4xl:w-[700px] 4xl:h-[508px] flex justify-between relative"
                    >
                      <img
                        src={image_02}
                        className="w-[116px] h-[116px] sm:w-[184px] sm:h-[184px] lg:w-[207px] lg:h-[207px] 4xl:w-[312px] 4xl:h-[312px] rounded-full mt-[150px]"
                        alt="image_02"
                      />
                      <img
                        src={image_03}
                        className="w-[84px] h-[84px] sm:w-[147px] sm:h-[147px] lg:w-[166px] lg:h-[166px] 4xl:w-[225px] 4xl:h-[225px] rounded-full self-end absolute top-0 left-1/2 -translate-x-[50px]"
                        alt="image_02"
                      />
                      <img
                        src={image_04}
                        className="w-[116px] h-[116px] sm:w-[184px] sm:h-[184px] lg:w-[207px] lg:h-[207px] 4xl:w-[301px] 4xl:h-[301px] rounded-full self-end"
                        alt="image_02"
                      />
                    </div>
                  </div>

                  <p
                    data-aos="fade-up"
                    className="text-white text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[30px] font-semibold text-center 1xl:w-[696px] 4xl:w-[824px] mx-auto"
                  >
                    Nuestra transparencia y compromiso se reflejan en las
                    <span className="font-extrabold">
                      {" "}
                      alianzas estratégicas
                    </span>
                    , la activa presencia en{" "}
                    <span className="font-extrabold">redes sociales</span> y el
                    apoyo social que brindamos.
                  </p>
                </div>

                <div className="w-[90%] mx-auto mt-[200px]">
                  {/* Empresas */}
                  <CarouselMarquee />
                  {/* Empresas */}
                </div>

                <div className="mt-[200px] lg:mt-[350px] mn:w-[339px] sm:w-[520px] lg:w-[740px] border rounded-3xl 1xl:border-none 1xl:w-[1322px] 4xl:w-[1522px] mx-auto flex flex-col 1xl:flex-row italic relative">
                  <div className=" text-white flex-1 1xl:space-y-[150px] 4xl:space-y-[50px] 1xl:border-none py-[100px] 1xl:py-[0] border-b">
                    <p className="font-extrabold text-[13px] sm:text-[16px] lg:text-[18px] 1xl:text-[35px] text-center">
                      Otros
                    </p>
                    <div className="flex-1 space-y-[40px] 1xl:py-[55px] 1xl:px-[55px] 4xl:py-[80px] 4xl:px-[60px] font-semibold  1xl:border rounded-tl-xl p-8 1xl:h-[646px] 4xl:h-[1122px] text-center 1xl:text-start">
                      <div
                        data-aos="fade-right"
                        data-aos-offset="200"
                        className="space-y-[20px] text-[13px] sm:text-[15px] lg:text-[18px] 4xl:text-[25px] leading-tight"
                      >
                        <p>
                          Estudiantes de pregrado sin experiencia que te
                          causarán frustración.
                        </p>
                        <p>
                          Correcciones superficiales y apresuradas, generando
                          más trabajo y gastos adicional al contratar revisores
                          competentes.
                        </p>
                        <p>
                          Trabajos plagiados y de baja calidad, poniendo en
                          riesgo tu reputación académica.
                        </p>
                        <p>
                          Contenido repetitivo o generado por IA, sacrificando
                          la calidad y originalidad.
                        </p>
                        <p>
                          Cursos grabados, genéricos y poco adaptados a tus
                          necesidades.
                        </p>
                        <p>
                          Inducciones improvisadas que no inspiran confianza.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="1xl:text-[35px] text-white flex-1 1xl:space-y-[150px] 4xl:space-y-[50px] py-[100px] 1xl:py-0">
                    <div className="relative">
                      <p className="font-extrabold text-[13px] sm:text-[16px] lg:text-[18px] 1xl:text-[35px] text-center">
                        Nosotros
                      </p>
                      <img
                        src={capa_mini}
                        className="block absolute lg:w-[50px] lg:h-[50px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 1xl:w-[100px] 1xl:h-[100px]"
                        alt="capa_mini"
                      />
                    </div>
                    <div className="1xl:border-r 1xl:border-t 1xl:border-b rounded-tr-lg rounded-br-lg flex-1 1xl:py-[30px] 1xl:px-[30px] 4xl:py-[80px] 4xl:px-[60px] font-semibold p-8 1xl:h-[646px] 4xl:h-[1122px] pt-[80px]">
                      <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        className="leading-tight space-y-[20px] text-[13px] sm:text-[15px] lg:text-[18px] 4xl:text-[25px] text-center 1xl:text-start"
                      >
                        <p>
                          <span className="text-[#0CB2D5] uppercase">
                            Tu trabajo en las mejores manos:
                          </span>{" "}
                          planes de negocios, egresados de universidades
                          reconocidas, con un amplio conocimiento en
                          emprendimiento y startups, además de haber participado
                          en diversos concursos de PRODUCE.
                        </p>
                        <p>
                          <span className="text-[#0CB2D5] uppercase">
                            Excelencia garantizada:
                          </span>{" "}
                          Revisión exhaustiva por lingüistas expertos para
                          asegurar precisión gramatical, estilo impecable y
                          originalidad.
                        </p>
                        <p>
                          <span className="text-[#0CB2D5] uppercase">
                            Originalidad asegurada:
                          </span>{" "}
                          Utilizamos herramientas avanzadas de detección de IA y
                          similitudes para evitar plagios.
                        </p>
                        <p>
                          <span className="text-[#0CB2D5] uppercase">
                            Aprendizaje a tu ritmo:
                          </span>{" "}
                          Asesorías personalizadas y acceso a grabaciones
                          detalladas que refuerzan tu conocimiento.
                        </p>
                        <p>
                          <span className="text-[#0CB2D5] uppercase">
                            Preparación integral:
                          </span>{" "}
                          Simulacros de defensa y balotarios para que te sientas
                          seguro el día de tu presentación.
                        </p>
                        <p>
                          <span className="text-[#0CB2D5] uppercase">
                            Presentaciones impactantes:
                          </span>{" "}
                          Diapositivas diseñadas para captar la atención desde
                          el primer vistazo.
                        </p>
                        <p>
                          <span className="text-[#0CB2D5] uppercase">
                            Confianza y seguridad:
                          </span>{" "}
                          Descuentos especiales en talleres de oratoria y manejo
                          de nervios, en colaboración con empresas aliadas.
                        </p>
                        <p>
                          <span className="text-[#0CB2D5] uppercase">
                            BIENESTAR Y CUIDADO:
                          </span>{" "}
                          Descuentos exclusivos en clínicas, spas y otros
                          servicios, en colaboración con aliados estratégicos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="1xl:w-[450px] 1xl:h-[400px] 4xl:w-[450px] 4xl:h-[700px] absolute 1xl:-translate-y-[200px] 4xl:-translate-y-[400px] top-full -left-[187px] flex items-center test-abo">
                    <img
                      src={capa_01}
                      className="hidden 1xl:block 1xl:w-[250px] 1xl:h-[500px] 4xl:w-[300px] 4xl:h-[600px] z-10"
                      alt="capa_01"
                    />
                  </div>
                </div>

                {/*  */}
                <div className="mt-[200px] lg:mt-[350px] space-y-[150px]">
                  <div className="italic space-y-[20px] w-[274px] sm:w-[386px] lg:w-[740px] 1xl:w-[898px] 4xl:w-[905px] mx-auto text-center">
                    <p
                      data-aos="fade-up"
                      data-aos-offset="200"
                      className="text-[#0DB2D5] text-[16px] sm:text-[25px] lg:text-[30px] 1xl:text-[35px] font-semibold uppercase"
                    >
                      ¡No pierdas más tiempo!
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="200"
                      className="font-bold text-white text-[14px] sm:text-[20px] lg:text-[30px] 1xl:text-[45px] leading-tight"
                    >
                      Déjanos ayudarte a finalizar tu plan de negocio de manera
                      exitosa.
                    </p>
                  </div>

                  {/*  */}
                  <div className="grid 1xl:grid-cols-2 mx-auto w-[95%] mn:w-[340px] sm:w-[520px] lg:w-[740px] 1xl:w-[1280px] 4xl:w-[1522px] gap-x-8 italic gap-y-[100px]">
                    {/*  */}
                    <div className="space-y-10">
                      <div
                        data-aos="fade-right"
                        data-aos-offset="500"
                        className="gradiente_testimonio flex justify-center items-center rounded-3xl h-[200px] sm:h-[250px] lg:w-[600px] lg:h-[300px] 1xl:w-[600px] 1xl:h-[300px] 4xl:w-[720px] 4xl:h-[400px] lg:gap-x-[20px]"
                      >
                        <div className="flex mn:gap-x-[10px] sm:gap-x-[10px] sm:w-[400px] h-[150px] sm:h-[150px] lg:h-[180px] lg:w-[544px] 1xl:w-[484px] 4xl:w-[583px] 1xl:h-[160px] 4xl:h-[277px] 1xl:gap-x-[10px] lg:gap-x-[10px]">
                          {/* <img
                            src={comillas}
                            className="block w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] 1xl:w-[40px] lg:h-[30px] lg:w-[30px] 1xl:h-[30px] 4xl:w-[50px] 4xl:h-[40px]"
                            alt="comillas-icono"
                          /> */}
                          <p className="overflow-visible">
                            <ImQuotesLeft className="quote overflow-visible size-[20px] sm:size-[30px] 1xl:size-[40px] lg:size-[30px] 4xl:size-[40px]" />
                          </p>
                          <div className="flex flex-col justify-between">
                            <p className="text-md w-[240px] sm:w-[300px] lg:w-[484px] text-[14px] sm:text-[14px] lg:text-[20px] 1xl:text-[20px] 4xl:text-[30px] text-white font-bold leading-tight">
                              Gracias a Alejandría, estructuré mi plan de
                              negocio de forma efectiva, identificando
                              oportunidades clave y desarrollando una propuesta{" "}
                              <span className="relative">
                                sólida.
                                <span className="absolute rotate-180 -right-2 lg:-right-5 translate-x-full">
                                  {" "}
                                  <ImQuotesLeft className="quote overflow-visible size-[20px] sm:size-[30px] 1xl:size-[40px] lg:size-[30px] 4xl:size-[40px]" />
                                </span>
                              </span>
                            </p>
                            <div className="flex gap-x-4">
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-aos="fade-right"
                        className="flex h-[52px] sm:h-[50px] lg:h-[80px] 4xl:h-[114px]"
                      >
                        <img src={capa_03} className="h-full" alt="capa-03" />
                        <div className="leading-tight ml-[10px] mn:ml-[40px] flex flex-col justify-between">
                          <p className="text-white text-[16px] lg:text-[30px] 4xl:text-[45px] font-bold">
                            Mg. Juliana Ríos
                          </p>
                          <p className="text-[#0CB2D5] text-[14px] lg:text-[25px] 4xl:text-[35px] font-semibold">
                            Administración de empresas
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*  */}

                    {/*  */}
                    <div className="space-y-10">
                      <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        className="gradiente_testimonio flex justify-center items-center rounded-3xl h-[200px] sm:h-[250px] lg:w-[600px] lg:h-[300px] 1xl:w-[600px] 1xl:h-[300px] 4xl:w-[720px] 4xl:h-[400px] lg:gap-x-[20px]"
                      >
                        <div className="flex mn:gap-x-[10px] sm:gap-x-[10px] sm:w-[400px] h-[150px] sm:h-[150px] lg:h-[180px] lg:w-[544px] 1xl:w-[484px] 4xl:w-[583px] 1xl:h-[160px] 4xl:h-[277px] 1xl:gap-x-[10px] lg:gap-x-[10px]">
                          {/* <img
                            src={comillas}
                            className="block w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] 1xl:w-[40px] lg:h-[30px] lg:w-[30px] 1xl:h-[30px] 4xl:w-[50px] 4xl:h-[40px]"
                            alt="comillas-icono"
                          /> */}
                          <p className="overflow-visible">
                            <ImQuotesLeft className="quote overflow-visible size-[20px] sm:size-[30px] 1xl:size-[40px] lg:size-[30px] 4xl:size-[40px]" />
                          </p>
                          <div className="flex flex-col justify-between">
                            <p className="text-md w-[230px] sm:w-[300px] lg:w-[475px] text-[14px] sm:text-[14px] lg:text-[20px] 1xl:text-[20px] 4xl:text-[30px] text-white font-bold leading-tight">
                              El equipo de Alejandría fue clave en mi plan de
                              negocio, ayudándome a superar desafíos y lograr un
                              excelente{" "}
                              <span className="relative">
                                resultado.
                                <span className="absolute rotate-180 -right-2 lg:-right-5 translate-x-full">
                                  {" "}
                                  <ImQuotesLeft className="quote overflow-visible size-[20px] sm:size-[30px] 1xl:size-[40px] lg:size-[30px] 4xl:size-[40px]" />
                                </span>
                              </span>
                            </p>
                            <div className="flex gap-x-4">
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                              <img
                                className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                                src={star}
                                alt="star-icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-aos="fade-left"
                        className="flex h-[52px] sm:h-[50px] lg:h-[80px] 4xl:h-[114px]"
                      >
                        <img src={capa_03} className="h-full" alt="capa-03" />
                        <div className="leading-tight  ml-[10px] mn:ml-[40px] flex flex-col justify-between">
                          <p className="text-white text-[16px] lg:text-[30px] 4xl:text-[45px] font-bold">
                            Mg. Diego Martínez
                          </p>
                          <p className="text-[#0CB2D5] text-[14px] lg:text-[25px] 4xl:text-[35px] font-semibold">
                            Negocios internacionales
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                  {/*  */}
                </div>
                {/*  */}
              </div>
            </div>
            <div className="back_blur h-[400px]"></div>
            <div className="bg-white mb-[200px] lg:mb-[600px]">
              <div className="w-[95%] mn:w-[340px] sm:w-[520px] lg:w-[720px] 1xl:w-[909px] 4xl:w-[1397px]  space-y-[50px] lg:space-y-[100px] mx-auto text-center">
                <div className="text-[16px] sm:text-[25px] lg:text-[30px] 4xl:text-[40px]">
                  <p
                    data-aos="fade-up"
                    data-aos-offset="100"
                    className="uppercase font-extrabold italic"
                  >
                    ¡No te quedes atrás!
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="100"
                    className="italic font-bold text-[14px] sm:text-[20px] lg:text-[30px] 4xl:text-[40px]"
                  >
                    No esperes más para alcanzar tus sueños académicos. <br />
                    Tu futuro brillante comienza con una decisión inteligente.
                  </p>
                </div>
                <button
                  onClick={handleContact}
                  data-aos="fade-up"
                  data-aos-offset="300"
                  className="text-[14px] sm:text-[20px] lg:text-[30px] block text-white font-extrabold uppercase bg-[#FCB400] rounded-full w-full mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] lg:w-[720px] lg:h-[80px] 4xl:w-[800px] 4xl:h-[100px] mx-auto"
                >
                  ¡Únete hoy!
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* CONTENT */}
      </main>
    </LayoutApp>
  );
};

export default PlanNegocio;
