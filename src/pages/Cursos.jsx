import LayoutApp from "../layout/LayoutApp";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import background_main from "../assets/images/cursos/background_main.png";
//
import image_01 from "../assets/images/cursos/image_01.png";
import image_02 from "../assets/images/cursos/image_02.png";
import image_03 from "../assets/images/cursos/image_03.png";
import image_04 from "../assets/images/cursos/image_04.png";
import hexagon from "../assets/icons/hexagon.png";
// import image_05 from "../assets/images/cursos/image_05.png";
import empresa_01 from "../assets/images/empresa_01.webp";
import empresa_02 from "../assets/images/empresa_02.webp";
import empresa_03 from "../assets/images/empresa_03.webp";
import empresa_04 from "../assets/images/empresa_04.webp";
import empresa_05 from "../assets/images/empresa_05.webp";

//
import icono_01 from "../assets/icons/cursos/icono_01.svg";
import icono_02 from "../assets/icons/cursos/icono_02.svg";
import icono_03 from "../assets/icons/cursos/icono_03.svg";
import icono_04 from "../assets/icons/cursos/icono_04.svg";
import icono_05 from "../assets/icons/cursos/icono_05.svg";
import icono_06 from "../assets/icons/cursos/icono_06.svg";
import icono_07 from "../assets/icons/cursos/icono_07.svg";
import icono_08 from "../assets/icons/cursos/icono_08.svg";
import icono_09 from "../assets/icons/cursos/icono_09.svg";
import icono_10 from "../assets/icons/cursos/icono_10.svg";
import icono_11 from "../assets/icons/cursos/icono_11.svg";
import icono_12 from "../assets/icons/cursos/icono_12.svg";
import icono_13 from "../assets/icons/cursos/icono_13.svg";
import capa_03 from "../assets/icons/capa_03.png";
import estrellas from "../assets/icons/estrellas.svg";
import comillas from "../assets/icons/comillas.png";
import Marquee from "react-fast-marquee";

const Cursos = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <LayoutApp>
      <main className="bg-[#1c1c34]">
        <section className="4xl:h-[1117px] relative">
          <div className="main_background_02 absolute top-0 left-0 w-full h-full"></div>
          <figure className="w-full h-full">
            <img
              src={background_main}
              className="w-full h-full object-cover"
              alt="background-tsp"
            />
          </figure>
          <div
            data-aos="zoom-in-up"
            className="absolute bottom-0 text-white 1xl:text-[55px] 4xl:text-[55px]  text-center font-semibold w-full"
          >
            <p>¡Tu éxito comienza aquí!</p>
            <p className="italic"> ESTAMOS A LA ALTURA DE TUS GRANDES METAS</p>
          </div>
        </section>
        {/*  */}
        <section className="linear_centro_01 py-[248px]">
          <div className="1xl:w-[1263px] 4xl:w-[1522px] 1xl:h-[500px] 4xl:h-[500px] mx-auto flex  4xl:gap-x-[103px]">
            <div className="4xl:w-[613px] pt-[50px]">
              <h3 className="text-[#0CB2D5] 1xl:text-[35px] 4xl:text-[35px]">
                ¡TE INVITAMOS A SUPERARTE!
              </h3>
              <p className="text-white 1xl:text-[45px] 4xl:text-[45px]">
                Nuestro curso en{" "}
                <strong className="italic">Investigación Académica</strong> está
                especialmente diseñado para que logres:
              </p>
            </div>
            <div className="flex 1xl:gap-x-[40px] 4xl:gap-x-[43px] border">
              <div className="1xl:w-[171px] 4xl:w-[240px] 1xl:h-[200px] gradiente_testimonio rounded-xl border 4xl:h-[280px] flex flex-col items-center justify-center 1xl:gap-y-[5px] 4xl:gap-y-[30px]">
                <img
                  className="block 4xl:w-[80px] 4xl:h-[80px] "
                  src={icono_01}
                  alt="icono_01"
                />
                <p className="text-white 1xl:w-[150px] 4xl:w-[198px] 1xl:text-[16px] 4xl:text-[22px] font-bold italic text-center leading-tight">
                  Habilidades críticas para la investigación
                </p>
              </div>
              <div className="1xl:w-[171px] 4xl:w-[240px] 1xl:h-[200px] gradiente_testimonio border 4xl:h-[280px] rounded-xl self-center flex flex-col items-center justify-center 1xl:gap-y-[5px] 4xl:gap-y-[30px]">
                <img
                  className="block 1xl:w-[80px] 1xl:h-[80px] 4xl:w-[80px] 4xl:h-[80px] "
                  src={icono_02}
                  alt="icono_01"
                />
                <p className="text-white 1xl:w-[150px] 4xl:w-[197px] 1xl:text-[15px] 4xl:text-[22px] font-bold italic text-center leading-tight">
                  Dominar fundamentos de la metodología científica
                </p>
              </div>
              <div className="1xl:w-[171px] 4xl:w-[240px] 1xl:h-[200px] gradiente_testimonio border rounded-xl 4xl:h-[280px] self-end flex flex-col items-center justify-center gap-y-[30px]">
                <img
                  className="block 4xl:w-[80px] 4xl:h-[80px] "
                  src={icono_03}
                  alt="icono_01"
                />
                <p className="text-white 1xl:w-[150px] 4xl:w-[174px] 4xl:text-[22px] font-bold italic text-center leading-tight">
                  Destacar en tus trabajos académicos
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="bg-[#1c1c34]">
          <div className="1xl:w-[1400px] 4xl:w-[1522px] mx-auto border">
            <div className="text-center">
              <h3 className="text-[#0CB2D5] 4xl:text-[35px] font-semibold uppercase">
                Más que un curso:
              </h3>
              <p className="text-white italic 4xl:text-[45px] font-bold">
                Un nuevo comienzo en tu carrera académica
              </p>
            </div>
            <div className="flex 4xl:gap-[51px] relative mt-[110px]">
              <div className="w-[5px] bg-[#0CB2D5] "></div>
              <div className="text-white 1xl:w-[905px] 4xl:w-[905px] 4xl:text-[26px] font-semibold flex flex-col gap-y-[40px]">
                <p className="arrow_list_cursos 4xl:w-[745px]">
                  <span className="font-extrabold">
                    Multiplica tus ingresos
                  </span>{" "}
                  al realizar un trabajo académico que te abrirá nuevas
                  oportunidades.
                </p>
                <p className="arrow_list_cursos 4xl:w-[786px]">
                  <span className="font-extrabold">
                    Refuerza tus habilidades
                  </span>{" "}
                  al potenciar tu pensamiento crítico y analítico.
                </p>
                <p className="arrow_list_cursos 4xl:w-[756px]">
                  <span className="font-extrabold">
                    Incrementa tu desarrollo personal y profesional
                  </span>{" "}
                  al alcanzar una de las metas más importantes en tu vida.
                </p>
                <p className="arrow_list_cursos 4xl:w-[875px]">
                  <span className="font-extrabold">
                    Refuerza tu marca personal
                  </span>{" "}
                  para que logres ser reconocido en tu área por tu equipo de
                  trabajo, alumnos o por tus clientes.
                </p>
                <p className="arrow_list_cursos">
                  <span className="font-extrabold">
                    Elimina la presión social y familiar
                  </span>{" "}
                  demostrando tu capacidad para culminar tus proyectos y llena
                  de orgullo a quienes te rodean.
                </p>
              </div>
              <img
                className="block absolute rounded-full 4xl:w-[400px] 4xl:h-[400px] right-28 bottom-10"
                src={image_01}
                alt="image_01"
              />
            </div>
          </div>
        </section>
        {/*  */}
        <section className="pt-[525px] pb-[250px]">
          <div className="italic font-extrabold">
            <h3 className="4xl:text-[40px] text-white text-center">
              ¡Mejora tus habilidades con nuestros cursos!
            </h3>
            <p className="bg-[#FCB400] text-white uppercase 4xl:text-[30px] 4xl:w-[800px] 4xl:h-[100px] flex  items-center justify-center rounded-[50px] mt-[47px] mx-auto">
              ¡Quiero inscribirme ahora!
            </p>
          </div>
        </section>
        {/*  */}
        <section>
          <div className="4xl:w-[1522px] mx-auto space-y-[250px] border">
            <div className="italic text-center">
              <h3 className="text-[#0CB2D5] 4xl:text-[35px] font-semibold uppercase">
                De la mano contigo:
              </h3>
              <p className="text-white 4xl:text-[45px] font-bold">
                Tu guía personal en cada etapa de tu formación
              </p>
            </div>

            <div className="space-y-[100px]">
              <div className="flex 4xl:gap-x-[70px]">
                <div className="4xl:w-[460px] 4xl:h-[250px] rounded-xl flex flex-col justify-center items-center gap-y-[20px] gradiente_testimonio border">
                  <img src={icono_04} alt="icono_04" />
                  <p className="text-white 4xl:text-[22px] italic font-bold text-center 4xl:w-[355px] leading-tight">
                    Potencia tu pensamiento crítico y analítico
                  </p>
                </div>
                <div className="4xl:w-[460px] 4xl:h-[250px] rounded-xl flex flex-col justify-center items-center gap-y-[20px] gradiente_testimonio border">
                  <img src={icono_05} alt="icono_04" />
                  <p className="text-white 4xl:text-[22px] italic font-bold text-center 4xl:w-[355px] leading-tight">
                    Aprende a formular preguntas de investigación sólidas
                  </p>
                </div>
                <div className="4xl:w-[460px]  4xl:h-[250px] rounded-xl flex flex-col justify-center items-center gap-y-[20px] gradiente_testimonio border">
                  <img src={icono_06} alt="icono_04" />
                  <p className="text-white 4xl:text-[22px] italic font-bold text-center 4xl:w-[355px] leading-tight">
                    Domina técnicas de recolección y análisis de datos
                  </p>
                </div>
              </div>
              <div className="flex justify-center 4xl:gap-x-[70px]">
                <div className="4xl:w-[460px] 4xl:h-[250px] rounded-xl flex flex-col justify-center items-center gap-y-[20px] gradiente_testimonio border">
                  <img src={icono_07} alt="icono_04" />
                  <p className="text-white 4xl:text-[22px] italic font-bold text-center 4xl:w-[355px] leading-tight">
                    Mejora tus habilidades de escritura académica
                  </p>
                </div>
                <div className="4xl:w-[460px] 4xl:h-[250px] rounded-xl flex flex-col justify-center items-center gap-y-[20px] gradiente_testimonio border">
                  <img src={icono_08} alt="icono_04" />
                  <p className="text-white 4xl:text-[22px] italic font-bold text-center 4xl:w-[355px] leading-tight">
                    Prepárate para el éxito en posgrados e investigación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="pt-[400px]">
          <div className="4xl:w-[1522px] mx-auto">
            <h3 className="text-[#0CB2D5] 4xl:text-[50px] italic font-extrabold text-center mb-[137px]">
              Nuestros Cursos
            </h3>

            <div className="space-y-[200px]">
              {/* TABLA */}
              <div className="4xl:w-[1522px] 4xl:h-[844px]">
                <div className="uppercase italic text-center rounded-tr-[30px] border rounded-tl-[30px] py-[33px]">
                  <h3 className="text-[#0CB2D5] 4xl:text-[20px] mb-[10px]">
                    Curso 1:
                  </h3>
                  <h2 className="text-white 4xl:text-[36px] font-extrabold">
                    METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA
                  </h2>
                </div>
                {/* CUERPO */}
                <div className="flex 4xl:h-[694px]">
                  <div className="4xl:w-[1195px] flex">
                    <div className="4xl:w-[350px] 4xl:h-[694px]">
                      <h3 className="text-[#0CB2D5] 4xl:text-[30px] 4xl:h-[80px] font-extrabold italic uppercase flex items-center justify-center border-l border-b">
                        módulos
                      </h3>
                      <div className="4xl:h-[307px] text-[#0CB2D5] 4xl:text-[25px] italic border-l border-b leading-tight flex items-center justify-center font-semibold">
                        <p className="4xl:w-[233px] text-center">
                          I. Elaboración de informe final de investigación
                        </p>
                      </div>
                      <div className="4xl:h-[307px] text-[#0CB2D5] 4xl:text-[25px] italic leading-tight flex items-center justify-center font-semibold">
                        <p className="4xl:w-[233px] text-center">
                          {" "}
                          II. Elaboración de proyecto de investigación
                        </p>
                      </div>
                    </div>
                    <div className="4xl:w-[845px] 4xl:h-[694px] border-l border-r border-b">
                      <h3 className="text-[#0CB2D5] 4xl:text-[30px]  4xl:h-[80px] font-extrabold italic uppercase flex items-center justify-center border-b">
                        ¿Qué aprenderás?
                      </h3>
                      <div className="4xl:h-[307px] text-[#0CB2D5] 4xl:text-[25px]  leading-normal flex items-center font-semibold border-b pl-[100px]">
                        <div className="4xl:text-[25px] font-semibold text-white">
                          <p className="arrow_list_cursos">
                            Fundamentos y ética en la investigación científica
                          </p>
                          <p className="arrow_list_cursos">
                            Planteamiento del problema y objetivos
                          </p>
                          <p className="arrow_list_cursos">
                            Marco teórico y revisión de literatura
                          </p>
                          <p className="arrow_list_cursos">
                            Diseños de investigación
                          </p>
                          <p className="arrow_list_cursos">
                            Técnicas de recolección de datos
                          </p>
                        </div>
                      </div>
                      <div className="4xl:h-[307px] text-[#0CB2D5] 4xl:text-[25px] leading-normal flex items-center font-semibold  pl-[100px]">
                        <div className="4xl:text-[25px] font-semibold text-white">
                          <p className="arrow_list_cursos">
                            Análisis de datos cuantitativos y cualitativos
                          </p>
                          <p className="arrow_list_cursos">
                            Estadística básica aplicada a la investigación
                          </p>
                          <p className="arrow_list_cursos">
                            Redacción de informes científicos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="4xl:w-[327px] ">
                    <div className="text-[#0CB2D5] 4xl:h-[80px] 4xl:text-[30px] font-extrabold italic uppercase flex items-center justify-center border-b border-r">
                      <h3 className="">Duración</h3>
                    </div>
                    <div className="flex 4xl:h-[614px] items-center justify-center border-r border-b rounded-br-[30px]">
                      <p className="text-white 4xl:text-[25px] font-semibold 4xl:w-[149px] text-center">
                        24 horas sincrónicas
                      </p>
                    </div>
                  </div>
                </div>
                {/* CUERPO */}
              </div>
              {/* TABLA */}
              <div className="4xl:w-[1522px]">
                <div className="uppercase italic text-center rounded-tr-[30px] border rounded-tl-[30px] py-[33px]">
                  <h3 className="text-[#0CB2D5] 4xl:text-[20px] mb-[10px]">
                    Curso 2:
                  </h3>
                  <h2 className="text-white 4xl:text-[36px] font-extrabold">
                    REDACCIÓN DE ARTÍCULOS CIENTÍFICOS: REVISIONES Y META
                    ANÁLISIS
                  </h2>
                </div>
                {/* CUERPO */}
                <div className="flex 4xl:h-[800px]">
                  <div className="4xl:w-[1195px] flex">
                    <div className="4xl:w-[350px] 4xl:h-[694px]">
                      <h3 className="text-[#0CB2D5] 4xl:text-[30px] 4xl:h-[80px] font-extrabold italic uppercase flex items-center justify-center border-l border-b">
                        Módulos
                      </h3>
                      <div className="4xl:h-[420px] text-[#0CB2D5] 4xl:text-[25px] italic border-l border-b leading-tight flex items-center justify-center font-semibold">
                        <p className="4xl:w-[233px] text-center">
                          I. Elaboración de artículo científico
                        </p>
                      </div>
                      <div className="4xl:h-[300px] text-[#0CB2D5] 4xl:text-[25px] italic leading-tight flex items-center justify-center font-semibold border-l border-b rounded-bl-[30px]">
                        <p className="4xl:w-[206px] text-center">
                          {" "}
                          II. Publicación en revistas científicas
                        </p>
                      </div>
                    </div>
                    <div className="4xl:w-[845px] 4xl:h-[800px] border-l border-r border-b">
                      <h3 className="text-[#0CB2D5] 4xl:text-[30px]  4xl:h-[80px] font-extrabold italic uppercase flex items-center justify-center border-b">
                        ¿Qué aprenderás?
                      </h3>
                      <div className="4xl:h-[420px] text-[#0CB2D5] 4xl:text-[25px]  leading-normal flex items-center font-semibold border-b pl-[100px]">
                        <div className="4xl:text-[25px] space-y-[20px] 4xl:w-[685px] font-semibold text-white">
                          <p className="arrow_list_cursos">
                            Fundamentos y ética en la investigación científica
                          </p>
                          <p className="arrow_list_cursos">
                            Tipo de revisiones sistemática
                          </p>
                          <p className="arrow_list_cursos">
                            Metodología para la elaboración de revisión
                            sistemática y meta análisis
                          </p>
                          <p className="arrow_list_cursos">PRISMA 2020</p>
                          <p className="arrow_list_cursos">MEMRSM</p>
                        </div>
                      </div>
                      <div className="4xl:h-[300px] text-[#0CB2D5] 4xl:text-[25px] leading-normal flex items-center font-semibold pl-[100px]">
                        <div className="4xl:text-[25px] font-semibold text-white">
                          <p className="arrow_list_cursos">
                            Introducción a las revistas científicas
                          </p>
                          <p className="arrow_list_cursos">
                            Marco ético y legal
                          </p>
                          <p className="arrow_list_cursos">
                            Criterios de calidad
                          </p>
                          <p className="arrow_list_cursos">Proceso editorial</p>
                          <p className="arrow_list_cursos">
                            Gestión para la publicación
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="4xl:w-[327px] ">
                    <div className="text-[#0CB2D5] 4xl:h-[80px] 4xl:text-[30px] font-extrabold italic uppercase flex items-center justify-center border-b border-r">
                      <h3 className="">Duración</h3>
                    </div>
                    <div className="flex 4xl:h-[720px] items-center justify-center border-r border-b rounded-br-[30px]">
                      <p className="text-white 4xl:text-[25px] font-semibold 4xl:w-[149px] text-center">
                        24 horas sincrónicas
                      </p>
                    </div>
                  </div>
                </div>
                {/* CUERPO */}
              </div>
              {/* TABLA */}
              <div className="4xl:w-[1522px]">
                <div className="uppercase italic text-center rounded-tr-[30px] border rounded-tl-[30px] py-[33px]">
                  <h3 className="text-[#0CB2D5] 4xl:text-[20px] mb-[10px]">
                    Curso 3:
                  </h3>
                  <h2 className="text-white 4xl:text-[36px] font-extrabold">
                    ESTADÍSTICA APLICADA A LA INVESTIGACIÓN CON SPSS
                  </h2>
                </div>
                {/* CUERPO */}
                <div className="flex 4xl:h-[1100px]">
                  <div className="4xl:w-[1195px] flex">
                    <div className="4xl:w-[350px] 4xl:h-[694px]">
                      <h3 className="text-[#0CB2D5] 4xl:text-[30px] 4xl:h-[80px] font-extrabold italic uppercase flex items-center justify-center border-l border-b">
                        Módulos
                      </h3>
                      <div className="4xl:h-[520px] text-[#0CB2D5] 4xl:text-[25px] italic border-l border-b leading-tight flex items-center justify-center font-semibold">
                        <p className="4xl:w-[233px] text-center">
                          I. Elaboración de informe final de investigación
                        </p>
                      </div>
                      <div className="4xl:h-[500px] text-[#0CB2D5] 4xl:text-[25px] italic leading-tight flex items-center justify-center font-semibold border-l border-b rounded-bl-[30px]">
                        <p className="4xl:w-[206px] text-center">
                          {" "}
                          II. Elaboración de proyecto de investigación
                        </p>
                      </div>
                    </div>
                    <div className="4xl:w-[845px] 4xl:h-[1100px] border-l border-r border-b">
                      <h3 className="text-[#0CB2D5] 4xl:text-[30px]  4xl:h-[80px] font-extrabold italic uppercase flex items-center justify-center border-b">
                        ¿Qué aprenderás?
                      </h3>
                      <div className="4xl:h-[520px] text-[#0CB2D5] 4xl:text-[25px]  leading-normal flex items-center font-semibold border-b pl-[100px]">
                        <div className="4xl:text-[25px] space-y-[20px] 4xl:w-[685px] font-semibold text-white">
                          <p className="arrow_list_cursos">
                            Fundamentos y ética en la Estadística
                          </p>
                          <p className="arrow_list_cursos">Muestreo</p>
                          <p className="arrow_list_cursos">
                            Análisis de datos y Confiabilidad y validez de
                            instrumentos
                          </p>
                          <p className="arrow_list_cursos">
                            Análisis factorial
                          </p>
                          <p className="arrow_list_cursos">
                            Estadística descriptiva
                          </p>
                          <p className="arrow_list_cursos">
                            Nivel de investigación: Descriptivo y explicativo
                          </p>
                          <p className="arrow_list_cursos">
                            Diseño de investigación: Experimental y no
                            experimental
                          </p>
                        </div>
                      </div>
                      <div className="4xl:h-[500px] text-[#0CB2D5] 4xl:text-[25px] flex items-center font-semibold pl-[100px]">
                        <div className="4xl:text-[25px] 4xl:w-[685px] font-semibold text-white space-y-[20px]">
                          <p className="arrow_list_cursos">
                            Estadística inferencial
                          </p>
                          <p className="arrow_list_cursos">
                            Prueba de Normalidad y homogeneidad
                          </p>
                          <p className="arrow_list_cursos">
                            Pruebas de hipótesis para estudio descriptivo
                            comparativo
                          </p>
                          <p className="arrow_list_cursos">
                            Pruebas de hipótesis para estudio descriptivo
                            correlacional
                          </p>
                          <p className="arrow_list_cursos">
                            Pruebas de hipótesis para estudio explicativo:
                            Regresión lineal y múltiple.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="4xl:w-[327px] ">
                    <div className="text-[#0CB2D5] 4xl:h-[80px] 4xl:text-[30px] font-extrabold italic uppercase flex items-center justify-center border-b border-r">
                      <h3 className="">Duración</h3>
                    </div>
                    <div className="flex 4xl:h-[1020px] items-center justify-center border-r border-b rounded-br-[30px]">
                      <p className="text-white 4xl:text-[25px] font-semibold 4xl:w-[149px] text-center">
                        24 horas sincrónicas
                      </p>
                    </div>
                  </div>
                </div>
                {/* CUERPO */}
              </div>
              {/* TABLA */}
            </div>
          </div>
        </section>
        {/*  */}
        <section className="pt-[400px]">
          {/* TABLA */}
          <div className="4xl:w-[1522px] mx-auto">
            <h3 className="text-[#0CB2D5] 4xl:text-[50px] uppercase font-extrabold italic text-center mb-[137px]">
              Nuestros TALLERES
            </h3>
            <div className="grid grid-cols-1 4xl:h-[494px] ">
              <div className="4xl:h-[150px] border row-span-1 italic text-center flex flex-col justify-center">
                <h3 className="text-[#0CB2D5] 4xl:text-[25px]">Taller 1:</h3>
                <h2 className="text-white 4xl:text-[36px] font-extrabold">
                  IA APLICADO A LA INVESTIGACIÓN
                </h2>
              </div>
              <div className="4xl:h-[80px] row-span-1 italic text-center 4xl:text-[30px] font-extrabold flex text-[#0CB2D5] border-r border-l">
                <div className="4xl:w-[1195px] flex items-center justify-center border-r">
                  Malla curricular
                </div>
                <div className="flex items-center justify-center 4xl:w-[327px]">
                  Duración
                </div>
              </div>
              <div className="4xl:h-[264px] border flex">
                <div className="4xl:w-[1195px] h-[264px] border-r text-white 4xl:text-[25px] font-semibold flex flex-col justify-center 4xl:pl-[278px] gap-y-[15px]">
                  <p className="arrow_list_cursos">
                    Herramientas de IA para el marco teórico
                  </p>
                  <p className="arrow_list_cursos">
                    Realización de una revisión sistemática asistida por IA
                  </p>
                  <p className="arrow_list_cursos">
                    Corrección gramatical y parafraseo mediante IA
                  </p>
                </div>
                <div className="4xl:w-[327px] text-white 4xl:text-[25px] flex items-center justify-center font-semibold">
                  <p className="4xl:w-[149px] text-center">
                    3 horas sincrónicas
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* TABLA */}
          <div className="4xl:w-[1522px] mx-auto mt-[200px]">
            <div className="grid grid-cols-1 4xl:h-[494px] ">
              <div className="4xl:h-[150px] border row-span-1 italic text-center flex flex-col justify-center">
                <h3 className="text-[#0CB2D5] 4xl:text-[25px]">Taller 2:</h3>
                <h2 className="text-white 4xl:text-[36px] font-extrabold">
                  GESTOR BIBLIOGRÁFICO Y ATLAS.TI
                </h2>
              </div>
              <div className="4xl:h-[80px] row-span-1 italic text-center 4xl:text-[30px] font-extrabold flex text-[#0CB2D5] border-r border-l">
                <div className="4xl:w-[1195px] flex items-center justify-center border-r">
                  Malla curricular
                </div>
                <div className="flex items-center justify-center 4xl:w-[327px]">
                  Duración
                </div>
              </div>
              <div className="4xl:h-[264px] border flex">
                <div className="4xl:w-[1195px] h-[264px] border-r text-white 4xl:text-[25px] font-semibold flex flex-col justify-center 4xl:pl-[278px] gap-y-[15px]">
                  <p className="arrow_list_cursos">Zotero</p>
                  <p className="arrow_list_cursos">Mendeley</p>
                  <p className="arrow_list_cursos">ATLAS.ti</p>
                </div>
                <div className="4xl:w-[327px] text-white 4xl:text-[25px] flex items-center justify-center font-semibold">
                  <p className="4xl:w-[149px] text-center">
                    3 horas sincrónicas
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* TABLA */}
        </section>
        {/*  */}
        <section className="pt-[400px]">
          <div className="4xl:w-[1522px] mx-auto border">
            <div className="italic text-center">
              <h2 className="4xl:text-[50px] text-[#FCB400] font-extrabold">
                Tu éxito, nuestro compromiso
              </h2>
              <h3 className="text-white 4xl:text-[45px] font-bold">
                Contamos con:
              </h3>
            </div>
            <div className="flex justify-between">
              <div className="4xl:w-[291px] 4xl:h-[342px] flex flex- items-center justify-center relative">
                <img
                  src={hexagon}
                  className="w-full h-full"
                  alt="hexagon-icon"
                />
                <div className="absolute flex flex-col items-center gap-y-[20px]">
                  <img
                    className="block 4xl:w-[78px] 4xl:h-[80px]"
                    src={icono_09}
                    alt="icono_09"
                  />
                  <p className="4xl:w-[163px] italic 4xl:text-[22px] text-white leading-tight text-center font-bold">
                    Docentes expertos en investigación académica
                  </p>
                </div>
              </div>
              <div className="4xl:w-[291px] 4xl:h-[342px] flex flex- items-center justify-center relative">
                <img
                  src={hexagon}
                  className="w-full h-full"
                  alt="hexagon-icon"
                />
                <div className="absolute flex flex-col items-center gap-y-[20px]">
                  <img
                    className="block 4xl:w-[78px] 4xl:h-[80px]"
                    src={icono_10}
                    alt="icono_09"
                  />
                  <p className="4xl:w-[163px] italic 4xl:text-[22px] text-white leading-tight text-center font-bold">
                    Enfoque práctico y aplicado
                  </p>
                </div>
              </div>
              <div className="4xl:w-[291px] 4xl:h-[342px] flex flex- items-center justify-center relative">
                <img
                  src={hexagon}
                  className="w-full h-full"
                  alt="hexagon-icon"
                />
                <div className="absolute flex flex-col items-center gap-y-[20px]">
                  <img
                    className="block 4xl:w-[78px] 4xl:h-[80px]"
                    src={icono_11}
                    alt="icono_09"
                  />
                  <p className="4xl:w-[163px] italic 4xl:text-[22px] text-white leading-tight text-center font-bold">
                    Grupos reducidos para atención personalizada
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center 4xl:gap-x-[260px]">
              <div className="4xl:w-[291px] 4xl:h-[342px] flex flex- items-center justify-center relative">
                <img
                  src={hexagon}
                  className="w-full h-full"
                  alt="hexagon-icon"
                />
                <div className="absolute flex flex-col items-center gap-y-[20px]">
                  <img
                    className="block 4xl:w-[78px] 4xl:h-[80px]"
                    src={icono_12}
                    alt="icono_09"
                  />
                  <p className="4xl:w-[163px] italic 4xl:text-[22px] text-white leading-tight text-center font-bold">
                    Recursos y materiales actualizados
                  </p>
                </div>
              </div>
              <div className="4xl:w-[291px] 4xl:h-[342px] flex flex- items-center justify-center relative">
                <img
                  src={hexagon}
                  className="w-full h-full"
                  alt="hexagon-icon"
                />
                <div className="absolute flex flex-col items-center gap-y-[20px]">
                  <img
                    className="block 4xl:w-[78px] 4xl:h-[80px]"
                    src={icono_13}
                    alt="icono_09"
                  />
                  <p className="4xl:w-[163px] italic 4xl:text-[22px] text-white leading-tight text-center font-bold">
                    Certificación avalada por nuestra institución
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="pt-[200px] pb-[250px]">
          <div className="italic uppercase">
            <h2 className="text-white font-extrabold 4xl:text-[40px] text-center mb-[47px]">
              ¿Listo para asegurar tu éxito académico?
            </h2>
            <p className="4xl:text-[30px] 4xl:w-[800px] 4xl:h-[100px] text-white bg-[#FCB400] rounded-[50px] font-extrabold flex items-center justify-center mx-auto">
              ¡Estoy listo para comenzar!
            </p>
          </div>
        </section>
        {/*  */}
        <section>
          <div className="4xl:w-[1522px] border mx-auto">
            <div className="text-center italic">
              <h2 className="4xl:text-[35px] text-[#0CB2D5] uppercase font-semibold">
                Protege tu inversión:
              </h2>
              <h3 className="text-white 4xl:text-[45px] font-bold 4xl:w-[1086px] mx-auto">
                Busca la tranquilidad y seguridad que solo una empresa sólida
                puede ofrecerte.
              </h3>
            </div>
            <div className="mt-[139px] flex 4xl:gap-x-[47px]">
              <p className="text-white italic 4xl:text-[30px] font-extrabold 4xl:w-[711px]">
                Somos miembros de la{" "}
                <span className="text-[#0CB2D5]">
                  Cámara de Comercio de Lima
                </span>{" "}
                y contamos con una estructura formal: oficinas físicas,
                comprobantes de pago y personal registrado en SUNEDU.
              </p>
              <div className="relative 4xl:w-[760px] 4xl:h-[500px] border flex justify-between">
                <img
                  className="4xl:w-[312px] 4xl:h-[312px] rounded-full mt-[100px]"
                  src={image_02}
                  alt="image_02"
                />
                <img
                  className="4xl:w-[225px] 4xl:h-[225px] absolute rounded-full left-[310px]"
                  src={image_03}
                  alt="image_03"
                />
                <img
                  className="4xl:w-[301px] 4xl:h-[301px] rounded-full self-end"
                  src={image_04}
                  alt="image_04"
                />
              </div>
            </div>
            <div className="mt-[150px]">
              <p className="4xl:w-[956px] 4xl:text-[30px] italic font-semibold text-center mx-auto text-white">
                Nuestra transparencia y compromiso se reflejan en nuestras
                <span className="font-extrabold"> alianzas estratégicas </span>
                nuestra activa presencia en{" "}
                <span className="font-extrabold">redes sociales</span> y nuestro
                apoyo a{" "}
                <span className="font-extrabold">iniciativas sociales.</span>
              </p>
            </div>
            <div className="mt-[140px]">
              <Marquee speed={250} className="space h-[140px]">
                <div className="image_wrapper">
                  <img
                    className="3xl:w-[272px]"
                    src={empresa_01}
                    alt="empresa_01"
                  />
                </div>
                <div className="image_wrapper h-[140px]">
                  <img
                    className="3xl:w-[150.77px] h-full"
                    src={empresa_02}
                    alt="empresa_02"
                  />
                </div>
                <div className="image_wrapper">
                  <img
                    className="3xl:w-[115.89px] h-[100px]"
                    src={empresa_03}
                    alt="empresa_03"
                  />
                </div>
                <div className="image_wrapper">
                  <img
                    className="3xl:w-[272px]"
                    src={empresa_04}
                    alt="empresa_04"
                  />
                </div>
                <div className="image_wrapper">
                  <img
                    className="3xl:w-[272px]"
                    src={empresa_05}
                    alt="empresa_05"
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="pt-[245px] pb-[700px] grandient_top_cursos">
          <div className="4xl:w-[1522px] mx-auto">
            <div className="italic mb-[139px]">
              <h2 className="text-[#0CB2D5] 4xl:text-[35px] font-semibold text-center">
                ¡No pierdas más tiempo!
              </h2>
              <h3 className="text-white 4xl:text-[45px] 4xl:w-[809px] mx-auto font-bold text-center">
                Déjanos ayudarte a alcanzar tus metas de manera exitosa.
              </h3>
            </div>
          </div>
          <div className="4xl:w-[1602px] border mx-auto flex gap-x-[70px]">
            <div>
              <div className="4xl:w-[761px] 4xl:h-[400px] rounded-[50px] gradiente_testimonio flex 4xl:gap-x-[39px] items-center justify-center">
                <div className="4xl:h-[300px]">
                  <img
                    className="block 4xl:w-[50px] 4xl:h-[40px] "
                    src={comillas}
                    alt="comillas"
                  />
                </div>
                <div className="4xl:h-[300px] border flex flex-col justify-between">
                  <p className="4xl:w-[484px] text-white 4xl:text-[30px] italic font-bold">
                    El curso mejoró mi proyecto de investigación, enseñándome a
                    aplicar y analizar correctamente las pruebas estadísticas."
                  </p>
                  <img
                    className="block 4xl:h-[38px] self-start"
                    src={estrellas}
                    alt="estrellas-icono"
                  />
                </div>
              </div>
              <div className="flex mt-[51px] gap-x-[39px]">
                <img src={capa_03} className="h-full" alt="capa-03" />
                <div className="italic">
                  <h2 className="text-white 4xl:text-[45px] font-bold">
                    Lic. Ana María Sánchez
                  </h2>
                  <h3 className="text-[#0CB2D5] 4xl:text-[35px] font-semibold">
                    Investigación Social{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="4xl:w-[761px] 4xl:h-[400px] rounded-[50px] gradiente_testimonio flex 4xl:gap-x-[39px] items-center justify-center">
                <div className="4xl:h-[300px]">
                  <img
                    className="block 4xl:w-[50px] 4xl:h-[40px] "
                    src={comillas}
                    alt="comillas"
                  />
                </div>
                <div className="4xl:h-[300px] border flex flex-col justify-between">
                  <p className="4xl:w-[484px] text-white 4xl:text-[30px] italic font-bold mt-[20px]">
                    Ahora puedo vincular fácilmente la estadística con la
                    investigación, gracias a los cursos dictados."
                  </p>
                  <img
                    className="block 4xl:h-[38px] self-start"
                    src={estrellas}
                    alt="estrellas-icono"
                  />
                </div>
              </div>
              <div className="flex mt-[51px] gap-x-[39px]">
                <img src={capa_03} className="h-full" alt="capa-03" />
                <div className="italic">
                  <h2 className="text-white 4xl:text-[45px] font-bold">
                    Mg. Luis Alberto Pérez
                  </h2>
                  <h3 className="text-[#0CB2D5] 4xl:text-[35px] font-semibold">
                    Docente Universitario{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="bg-white pt-[382px] pb-[370px]">
          <div className="italic">
            <h2 className="text-center 4xl:text-[40px] font-extrabold mb-[20px] uppercase">
              ¡No te quedes atrás!
            </h2>
            <p className="4xl:w-[1397px] 4xl:text-[40px] font-bold mx-auto text-center">
              No esperes más para alcanzar tus sueños académicos. Tu futuro
              brillante comienza con una decisión inteligente.
            </p>
            <p className="4xl:text-[30px] 4xl:h-[100px] text-white 4xl:w-[800px] flex items-center justify-center mx-auto font-extrabold rounded-[50px] bg-[#FCB400] uppercase mt-[100px]">
              ¡Únete hoy!
            </p>
          </div>
        </section>
        {/*  */}
      </main>
    </LayoutApp>
  );
};

export default Cursos;
