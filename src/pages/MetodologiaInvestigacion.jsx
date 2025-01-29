import React, { useRef } from "react";
import LayoutBlogOptions from "../layout/LayoutBlogOptions";
import icono_01 from "../assets/icons/blog/metodologia/icono_01.svg";
import icono_02 from "../assets/icons/blog/metodologia/icono_02.svg";
import icono_03 from "../assets/icons/blog/metodologia/icono_03.svg";
import icono_04 from "../assets/icons/blog/metodologia/icono_04.svg";
import icono_05 from "../assets/icons/blog/metodologia/icono_05.svg";
import backgroundMetodologia from "../assets/images/banners/backgroundMetodologia.webp";
import capa_02 from "../assets/images/capa_02.png";

const MetodologiaInvestigacion = () => {
  return (
    <LayoutBlogOptions>
      <main className="">
        <div className="h-[500px] sm:h-[600px] md:h-[700px] xl:h-[1117px] flex items-end relative">
          <img
            src={backgroundMetodologia}
            className="w-full h-full object-cover lg:object-fill"
            alt="back_hero"
          />
          <div className="main_background_02 absolute top-0 z-10 h-full w-full flex items-end">
            <p
              data-aos="zoom-in"
              className="text-white font-bold w-[95%] mn:w-[300px] sm:w-[471px] lg:w-[751px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:w-[1126px] 4xl:w-[1352px] mb-[100px] 1xl:text-[40px] 4xl:text-[54px] mn:ml-[14px] sm:ml-[46px] lg:ml-[80px] 4xl:ml-[104px] uppercase leading-tight ml-2"
            >
              Metodología de la Investigación:{" "}
              <span className="block font-extrabold mn:text-[14px] sm:text-[25px] lg:text-[30px] 1xl:text-[45px] 4xl:text-[54px]">
                Clave para el Éxito Académico
              </span>
            </p>
          </div>
        </div>

        <section className="bg_gradient_metodologia pt-[103px] sm:pt-[138px] lg:pt-[123px] 1xl:pt-[299px] 4xl:pt-[241px]">
          <div className="mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] relative w-[95%] mx-auto">
            <p
              data-aos="zoom-in"
              className="mn:w-[295px] sm:w-[432px] lg:w-[530ppx] 1xl:w-[971px] 4xl:w-[1140px] leading-normal mn:leading-tight mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px] font-bold text-justify text-white"
            >
              La{" "}
              <span className="text-[#0CB2D5]">
                metodología de la investigación
              </span>{" "}
              es un componente esencial en el desarrollo de cualquier proyecto
              académico, ya que proporciona las herramientas necesarias para
              abordar preguntas y problemas de manera sistemática y rigurosa. En
              este artículo, exploraremos los aspectos fundamentales de la
              metodología de la investigación, su importancia en el contexto
              académico y cómo{" "}
              <span className="text-[#0CB2D5]">Alejandría</span> puede ayudarte
              en este proceso.
            </p>
            <img
              src={capa_02}
              className="hidden sm:block top-1/2 -translate-y-1/2 absolute z-40 right-0 sm:h-[250px] lg:w-[300px] lg:h-[550px]"
              alt="capa-image"
              draggable={false}
            />
          </div>
        </section>
        {/*  */}
        <section className="pt-[100px] sm:pt-[250px] lg:pt-[210px] 1xl:pt-[410px] 4xl:pt-[349px] w-[95%] mn:w-[300px] sm:w-[442px] lg:w-[750px] 1xl:w-[1024px] 4xl:w-[1186px] text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[35px] font-bold mx-auto text-center mb-[250px]">
          <h2
            data-aos="fade-up"
            className="text-[#0CB2D5] mn:w-[320px] sm:w-[398px] lg:w-[472px] 1xl:w-auto text-[18px] mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] uppercase italic mb-[50px] mx-auto"
          >
            ¿Qué es la Metodología de la Investigación?
          </h2>
          <p
            data-aos="fade-up"
            className="text-white leading-normal text-[14px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px]"
          >
            La metodología de la investigación se refiere al conjunto de
            métodos, técnicas y procedimientos que se utilizan para llevar a
            cabo una investigación. Esto incluye la formulación del problema, el
            diseño del estudio, la recolección de datos y el análisis de los
            resultados. Un enfoque bien estructurado permite a los
            investigadores obtener conclusiones válidas y confiables.
          </p>
        </section>
        {/*  */}

        {/*  */}
        <section className="mn:w-[315px] sm:w-[500px] lg:w-[734px] 1xl:w-[1280px] 4xl:w-[1510px] 5xl:w-[1580px] font-bold 1xl:ml-[80px] 4xl:ml-[109px] mt-[150px] mb-[250px] mx-auto">
          <h3
            data-aos="fade-up"
            className="text-[#0CB2D5] uppercase text-[18px] mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] font-semibold mb-[40px] mn:mb-[50px] lg:mb-[100px]  text-center mn:w-auto sm:w-[328px] lg:w-auto mx-auto"
          >
            Importancia de una Buena Metodología:
          </h3>
          <div className="flex flex-col 1xl:flex-row gap-x-[30px] gap-y-[65px] mb-[60px] justify-center items-center">
            <div
              data-aos="flip-left"
              className="w-[95%] mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[250px] lg:w-[600px] lg:h-[250px] justify-center 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex gap-x-[30px] items-center px-[37px] lg:px-6 rounded-[28px] gradiente_testimonio"
            >
              <img
                src={icono_01}
                className="w-[40px] h-[55px] sm:w-[57px] sm:h-[80px] lg:w-[54px] lg-[80px] 1xl:w-[42px] 1xl:h-[60px] 4xl:w-[65px] 4xl:h-[56px]"
                alt="icon-box"
              />
              <p className="text-white text-sm font-bold text-[13px] mn:text-[14px] sm:text-[20px] 1xl:text-[16px] 4xl:text-[22px] md:w-[290px] leading-tight">
                Proporciona una hoja de ruta clara y estructurada, lo que
                asegura que cada paso esté alineado con los objetivos del
                estudio.
              </p>
            </div>
            <div
              data-aos="flip-left"
              className="w-[95%] mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[250px] lg:w-[600px] lg:h-[250px] justify-center 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex gap-x-[30px] items-center px-[37px] lg:px-6 rounded-[28px] gradiente_testimonio"
            >
              <img
                src={icono_02}
                className="w-[45px] mn:w-[40px] mn:h-[34px] sm:w-[91px] sm:h-[80px] lg:w-[91px] lg-[80px] 1xl:w-[68px] 1xl:h-[60px] 4xl:w-[65px] 4xl:h-[56px]"
                alt="icon-box"
              />
              <p className="text-white text-sm font-bold text-[13px] mn:text-[14px] sm:text-[20px] 1xl:text-[16px] 4xl:text-[22px] md:w-[290px] leading-tight">
                Ayuda a identificar y controlar variables, reduciendo sesgos y
                aumentando la precisión de los resultados.
              </p>
            </div>
            <div
              data-aos="flip-left"
              className="w-[95%] mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[250px] lg:w-[600px] lg:h-[250px] justify-center 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex gap-x-[30px] items-center px-[37px] lg:px-6 rounded-[28px] gradiente_testimonio"
            >
              <img
                src={icono_03}
                className="w-[40px] h-[43px] sm:w-[72px] sm:h-[80px] lg:w-[72px] lg-[80px] 1xl:w-[54px] 1xl:h-[60px] 4xl:w-[65px] 4xl:h-[71px]"
                alt="icon-box"
              />
              <p className="text-white text-sm font-bold text-[13px] mn:text-[14px] sm:text-[20px] 1xl:text-[16px] 4xl:text-[22px] md:w-[290px] leading-tight">
                Permite que otros investigadores puedan replicar el estudio,
                verificando o ampliando los hallazgos.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-[30px] gap-y-[60px] justify-normal md:justify-center ">
            <div
              data-aos="flip-left"
              className="w-[95%] mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[250px] lg:w-[600px] lg:h-[250px] justify-center 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex gap-x-[30px] items-center px-[37px] lg:px-6 rounded-[28px] gradiente_testimonio mx-auto mn:mx-0"
            >
              <img
                src={icono_04}
                className="w-[40px] h-[39px] sm:w-[80px] sm:h-[80px] lg:w-[80px] lg-[80px] 1xl:w-[60px] 1xl:h-[60px] 4xl:w-[65px] 4xl:h-[64px]"
                alt="icon-box"
              />
              <p className="text-white text-sm font-bold mn:text-[14px] sm:text-[20px] 1xl:text-[16px] 4xl:text-[22px] md:w-[290px] leading-tight">
                Una metodología bien fundamentada refuerza la confianza en los
                resultados obtenidos y en la calidad de la investigación.
              </p>
            </div>
            <div
              data-aos="flip-left"
              className="w-[95%] mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[250px] lg:w-[600px] lg:h-[250px] justify-center 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex gap-x-[30px] items-center px-[37px] lg:px-6 rounded-[28px] gradiente_testimonio mx-auto mn:mx-0"
            >
              <img
                src={icono_05}
                className="w-[40px] h-[41px] sm:w-[76px] sm:h-[80px] lg:w-[76px] lg-[80px] 1xl:w-[57px] 1xl:h-[60px] 4xl:w-[65px] 4xl:h-[90px]"
                alt="icon-box"
              />
              <p className="text-white text-sm font-bold mn:text-[14px] sm:text-[20px] 1xl:text-[16px] 4xl:text-[22px] md:w-[290px] leading-tight">
                Facilita el uso eficiente del tiempo, presupuesto y materiales,
                maximizando el impacto del proyecto.
              </p>
            </div>
          </div>
        </section>
        {/*  */}

        {/*  */}
        <section className="w-[95%] mx-auto mn:mx-0 mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] space-y-[40px] mn:space-y-[65px] mn:w-[323px] sm:w-[520px] lg:w-[732px] 1xl:w-[1259px] 4xl:w-[1265px] 1xl:ml-[80px] 4xl:ml-[104px]">
          <h3
            data-aos="fade-up"
            className="text-[#0CB2D5] text-[18px] md:text-[30px] 4xl:text-[35px] font-semibold uppercase"
          >
            Tipos de metodologías
          </h3>
          <div className="h-[490px] mn:h-[375px] sm:h-[660px] lg:h-[849px] 1xl:h-[550px] 4xl:h-[838px] flex gap-x-[23px] mx-auto">
            <div className="w-[5px] bg-[#0CB2D5] h-full"></div>
            <div className=" text-white flex flex-col justify-between mn:text-[12px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px]">
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className=" font-semibold leading-tight 2xl:w-[1204px] arrow_list_metodologia_investigacion"
              >
                <span className="text-[#0CB2D5]">
                  Metodologías Cuantitativas:
                </span>{" "}
                Se centran en la recolección y análisis de datos numéricos. Son
                ideales para estudios que buscan establecer relaciones entre
                variables o probar hipótesis.
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className=" font-semibold leading-tight 2xl:w-[1204px] arrow_list_metodologia_investigacion"
              >
                <span className="text-[#0CB2D5]">
                  Metodologías Cualitativas:
                </span>{" "}
                Se utilizan para explorar fenómenos en profundidad, enfocándose
                en las percepciones y experiencias de los participantes. Métodos
                como entrevistas y grupos focales son comunes en este enfoque.
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className=" font-semibold leading-tight 2xl:w-[1204px] arrow_list_metodologia_investigacion"
              >
                <span className="text-[#0CB2D5]">Métodos Mixtos:</span> Combinan
                elementos tanto cualitativos como cuantitativos, permitiendo una
                comprensión más rica y completa del fenómeno estudiado.
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className=" font-semibold leading-tight 2xl:w-[1204px] arrow_list_metodologia_investigacion"
              >
                <span className="text-[#0CB2D5]"> Metodología Inductiva:</span>{" "}
                Parte de observaciones específicas para llegar a conclusiones
                generales, útil en investigaciones exploratorias.
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className=" font-semibold leading-tight 2xl:w-[1204px] arrow_list_metodologia_investigacion"
              >
                <span className="text-[#0CB2D5]">Metodología Deductiva:</span>{" "}
                Comienza con teorías existentes y busca aplicarlas a situaciones
                específicas para validar o refutar hipótesis.
              </p>
            </div>
          </div>
        </section>
        {/*  */}

        {/*  */}
        <section className="mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] mt-[80px] mn:mt-[108px] sm:mt-[200px] lg:mt-[300px] 1xl:mt-[338px] mn:mb-[150px] sm:mb-[250px] lg:mb-[250px] 1xl:mb-[536px] 4xl:mb-[335px]">
          <div className="relative">
            <p
              data-aos="fade-up"
              data-aos-offset="100"
              className="text-white lg:text-[25px] mn:text-[14px] sm:text-[20px] lg:txt-[25px] 1xl:text-[25px] 4xl:text-[35px] text-justify font-semibold w-[95%] mx-auto mn:mx-0 mn:w-[312px] sm:w-[458px] lg:w-[592px] 1xl:w-[889px] 4xl:w-[1159px]"
            >
              La metodología de investigación no es solo un requisito académico;
              es la base sobre la cual se construyen los hallazgos científicos.
              Un enfoque metódico garantiza que cada paso del proceso
              investigativo esté bien fundamentado y justificado, lo que aumenta
              la credibilidad y utilidad del estudio realizado. Al entender y
              aplicar correctamente las metodologías adecuadas, los
              investigadores pueden contribuir significativamente al
              conocimiento en sus respectivos campos.
            </p>
            <img
              src={capa_02}
              className="hidden lg:block top-1/2 -translate-y-1/2 absolute z-40 right-0 sm:h-[250px] lg:w-[300px] lg:h-[550px]"
              alt="capa-image"
              draggable={false}
            />
          </div>
        </section>
        {/*  */}
      </main>
    </LayoutBlogOptions>
  );
};

export default MetodologiaInvestigacion;
