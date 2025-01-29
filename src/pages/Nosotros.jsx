import React, { useState } from "react";
import LayoutApp from "../layout/LayoutApp";
import background_main from "../assets/images/banners/backgroundNosotros.webp";
import image_01 from "../assets/images/nosotros/image_01.webp";
import image_02 from "../assets/images/nosotros/image_02.webp";
import image_03 from "../assets/images/nosotros/image_03.webp";
import image_04 from "../assets/images/nosotros/image_04.webp";
import image_06 from "../assets/images/nosotros/image_06.webp";
import image_07 from "../assets/images/nosotros/image_07.webp";
import image_08 from "../assets/images/nosotros/image_08.webp";
import image_09 from "../assets/images/nosotros/image_09.webp";
import image_10 from "../assets/images/nosotros/image_10.webp";
import image_11 from "../assets/images/nosotros/image_11.webp";
import image_12 from "../assets/images/nosotros/image_12.webp";
import image_13 from "../assets/images/nosotros/image_13.webp";
import image_14 from "../assets/images/nosotros/image_14.webp";
import image_15 from "../assets/images/nosotros/image_15.webp";
import image_16 from "../assets/images/nosotros/image_16.webp";
import image_17 from "../assets/images/nosotros/image_17.webp";
import image_18 from "../assets/images/nosotros/image_18.webp";

//
import hexagon from "../assets/icons/hexagon.png";
import icono_01 from "../assets/icons/nosotros/icon_01.svg";
import icono_02 from "../assets/icons/nosotros/icon_02.svg";
import icono_03 from "../assets/icons/nosotros/icon_03.svg";
import icono_04 from "../assets/icons/nosotros/icon_04.svg";
import icono_05 from "../assets/icons/nosotros/icon_05.svg";
import icon_06 from "../assets/icons/nosotros/icon_06.svg";
import icono_07 from "../assets/images/empresa_02.webp";
import icono_08 from "../assets/images/empresa_03.webp";
import icono_09 from "../assets/images/empresa_05.webp";
import icono_10 from "../assets/images/empresa_01.webp";
import icono_11 from "../assets/images/empresa_04.webp";
//
import ModaMgGiancarlo from "../components/ModaMgGiancarlo";
import ModalMgDiana from "../components/ModalMgDiana";
import ModalMgJenn from "../components/ModalMgJenn";
import ModalMgBrenda from "../components/ModalMgBrenda";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Nosotros = () => {
  const [modalMgGiancarlo, setModalMgGiancarlo] = useState(false);
  const [modalMgDiana, setModalMgDiana] = useState(false);
  const [modalMgJenn, setModalMgJenn] = useState(false);
  const [modalMgBrenda, setModalMgBrenda] = useState(false);

  return (
    <LayoutApp>
      <main className="bg-[#1c1c34] overflow-hidden">
        <section
          className={`h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative`}
        >
          <div className="main_background_02 absolute top-0 left-0 w-full h-full"></div>
          <img
            src={background_main}
            className="w-full h-full object-cover"
            alt="background-tsp"
          />
        </section>
        {/*  */}
        <section className="linear_centro_01 pt-0.5">
          <div className="w-[95%] mn:w-[312px] sm:w-[542px] lg:w-[804px] 1xl:w-[1220px] 4xl:w-[1358px] mx-auto space-y-[150px] mn:space-y-[300px] mt-[158px] text-white">
            <div className="mn:w-[312px] sm:w-[520px] lg:w-[670px] 1xl:w-[1068px] 4xl:w-[1068px] mx-auto flex flex-col gap-[50px] text-center border-black">
              <h2
                data-aos="fade-up"
                data-aos-offset="100"
                className="text-[#0CB2D5] font-extrabold text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[40px] 4xl:text-[55px] italic uppercase"
              >
                Visión
              </h2>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className="text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[30px] 4xl:text-[40px] font-semibold mx-auto"
              >
                Ser un faro de innovación e investigación de vanguardia,
                iluminando el camino del{" "}
                <span className="text-[#0CB2D5]">
                  progreso científico, tecnológico y académico
                </span>{" "}
                de nuestro país hacia nuevos horizontes de excelencia global.
              </p>
            </div>
            <div className="w-[90%] mn:w-full text-center flex flex-col gap-y-[50px] mx-auto mn:mx-0">
              <h2
                data-aos="fade-up"
                data-aos-offset="100"
                className="text-[#0CB2D5] font-extrabold text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[40px] 4xl:text-[55px] italic uppercase"
              >
                Misión
              </h2>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className="text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[30px] 4xl:text-[40px] font-semibold"
              >
                Somos un equipo de profesionales profundamente apasionados por
                la{" "}
                <span className="text-[#0CB2D5]">
                  investigación y la innovación
                </span>
                , dedicados a ofrecer un servicio excepcional que motive e
                impulse a nuestros clientes a alcanzar la excelencia en cada uno
                de sus trabajos académicos. Nuestro propósito es convertirnos en
                sus <span className="text-[#0CB2D5]">aliados estratégicos</span>
                , acompañándolos en cada paso hacia el éxito y ayudándolos a
                construir un{" "}
                <span className="text-[#0CB2D5]">
                  legado significativo de conocimiento y transformación
                </span>
                .
              </p>
            </div>
          </div>
        </section>
        {/*  */}

        <section>
          <div className="mt-[180px] mn:mt-[260px] w-[95%] mn:w-[339px] sm:w-[526px] lg:w-[760px] 1xl:w-[1225px] 4xl:w-[1442px] mx-auto flex flex-col gap-y-[150px]">
            <div className="w-[90%] mn:w-[312px] sm:w-[429px] lg:w-[581px] 1xl:w-[889px] 4xl:w-[1054px]">
              <h3
                data-aos="fade-up"
                data-aos-offset="100"
                className="text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] text-[#0CB2D5] font-semibold uppercase"
              >
                Filosofía
              </h3>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className="text-white 1xl:w-[889px] 4xl:w-[1054px] text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[40px] font-semibold text-justify"
              >
                Ser un faro de innovación e investigación de vanguardia,
                iluminando el camino del progreso científico, tecnológico y
                académico de nuestro país hacia nuevos horizontes de excelencia
                global.
              </p>
            </div>
            <div className="space-y-[60px]">
              <h3
                data-aos="fade-up"
                data-aos-offset="100"
                className="text-[18px] sm:text-[25px] lg:text-[30px] 4xl:text-[35px] text-[#0CB2D5] font-semibold uppercase"
              >
                Valores
              </h3>

              {/*  */}
              <div className="flex lg:hidden flex-wrap justify-center gap-x-[40px] sm:gap-x-[100px] gap-y-[20px]">
                <div
                  data-aos="flip-down"
                  className="flex flex-col w-[120px] h-[140px] sm:w-[137px] sm:h-[160px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[10px]">
                    <figure>
                      <img
                        className="block w-[38px] h-[39px] sm:w-[48] sm:h-[50px]"
                        src={icono_01}
                        alt="icono_01"
                      />
                    </figure>
                    <p className="text-white font-extrabold text-[10px] sm:text-[14px]">
                      Pasión
                    </p>
                  </div>
                </div>
                <div
                  data-aos="flip-down"
                  className="flex flex-col w-[120px] h-[140px] sm:w-[137px] sm:h-[160px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[10px]">
                    <figure>
                      <img
                        className="block w-[38px] h-[39px] sm:w-[48] sm:h-[50px]"
                        src={icono_02}
                        alt="icono_02"
                      />
                    </figure>
                    <p className="text-white font-extrabold text-[10px] sm:text-[14px]">
                      Confidencialidad
                    </p>
                  </div>
                </div>
                <div
                  data-aos="flip-down"
                  className="flex flex-col w-[120px] h-[140px] sm:w-[137px] sm:h-[160px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[10px]">
                    <figure>
                      <img
                        className="block w-[38px] h-[39px] sm:w-[48] sm:h-[50px]"
                        src={icono_03}
                        alt="icono_03"
                      />
                    </figure>
                    <p className="text-white font-extrabold text-[10px] sm:text-[14px]">
                      Innovación
                    </p>
                  </div>
                </div>
                <div
                  data-aos="flip-down"
                  className="flex flex-col w-[120px] h-[140px] sm:w-[137px] sm:h-[160px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[10px]">
                    <figure>
                      <img
                        className="block w-[38px] h-[39px] sm:w-[48] sm:h-[50px]"
                        src={icono_04}
                        alt="icono_04"
                      />
                    </figure>
                    <p className="text-white font-extrabold text-[10px] sm:text-[14px]">
                      Honestidad
                    </p>
                  </div>
                </div>
                <div
                  data-aos="flip-down"
                  className="flex flex-col w-[120px] h-[140px] sm:w-[137px] sm:h-[160px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[10px]">
                    <figure>
                      <img
                        className="block w-[38px] h-[39px] sm:w-[48] sm:h-[50px]"
                        src={icono_05}
                        alt="icono_05"
                      />
                    </figure>
                    <p className="text-white font-extrabold text-[10px] sm:text-[14px]">
                      Proactividad
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="hidden lg:flex justify-between">
                {/*  */}
                <div
                  data-aos="flip-down"
                  className="flex flex-col lg:w-[212px] lg:h-[250px] 1xl:w-[255px] 1xl:h-[300px] 4xl:w-[290px] 4xl:h-[342px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[25px]">
                    <figure>
                      <img
                        className="block 1xl:w-[77px] 1xl:h-[80px]"
                        src={icono_01}
                        alt="icono_01"
                      />
                    </figure>
                    <p className="text-white font-extrabold 4xl:text-[25px]">
                      Pasión
                    </p>
                  </div>
                </div>
                {/*  */}
                <div
                  data-aos="flip-down"
                  className="flex flex-col lg:w-[212px] lg:h-[250px] 1xl:w-[255px] 1xl:h-[300px] 4xl:w-[290px] 4xl:h-[342px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[25px]">
                    <figure>
                      <img
                        className="block 4xl:w-[77px] 4xl:h-[80px]"
                        src={icono_02}
                        alt="icono_02"
                      />
                    </figure>
                    <p className="text-white font-extrabold 4xl:text-[25px]">
                      Confidencialidad
                    </p>
                  </div>
                </div>
                {/*  */}
                <div
                  data-aos="flip-down"
                  className="flex flex-col lg:w-[212px] lg:h-[250px] 1xl:w-[255px] 1xl:h-[300px] 4xl:w-[290px] 4xl:h-[342px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[25px]">
                    <figure>
                      <img
                        className="block 4xl:w-[77px] 4xl:h-[80px]"
                        src={icono_03}
                        alt="icono_03"
                      />
                    </figure>
                    <p className="text-white font-extrabold 4xl:text-[25px]">
                      Innovación
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex justify-center lg:gap-x-[43px] 1xl:gap-x-[260px]">
                {/*  */}
                <div
                  data-aos="flip-down"
                  className="flex flex-col lg:w-[212px] lg:h-[250px] 1xl:w-[255px] 1xl:h-[300px] 4xl:w-[290px] 4xl:h-[342px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[25px]">
                    <figure>
                      <img
                        className="block 4xl:w-[77px] 4xl:h-[80px]"
                        src={icono_04}
                        alt="icono_04"
                      />
                    </figure>
                    <p className="text-white font-extrabold 4xl:text-[25px]">
                      Honestidad
                    </p>
                  </div>
                </div>
                {/*  */}
                <div
                  data-aos="flip-down"
                  className="flex flex-col lg:w-[212px] lg:h-[250px] 1xl:w-[255px] 1xl:h-[300px] 4xl:w-[290px] 4xl:h-[342px] justify-center items-center"
                >
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute flex flex-col items-center gap-y-[25px]">
                    <figure>
                      <img
                        className="block 4xl:w-[77px] 4xl:h-[80px]"
                        src={icono_05}
                        alt="icono_05"
                      />
                    </figure>
                    <p className="text-white font-extrabold 4xl:text-[25px]">
                      Proactividad
                    </p>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>

            <div className="flex gap-x-[15px] sm:gap-x-[35px]">
              <div className="w-[5px] bg-[#0CB2D5] "></div>
              <div className="text-white 1xl:w-[905px] 4xl:w-[1204px] text-[12px] sm:text-[20px] 4xl:text-[35px] font-semibold flex flex-col gap-y-[40px]">
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className="arrow_list_nosotros"
                >
                  <span className="text-[#0CB2D5]">
                    Confidencialidad inquebrantable:
                  </span>{" "}
                  Salvaguardamos con celo la confidencialidad de la información
                  de nuestros clientes y de la misma empresa.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className="arrow_list_nosotros"
                >
                  <span className="text-[#0CB2D5]">Absoluta honestidad:</span>{" "}
                  Cultivamos una cultura de honestidad absoluta tanto con
                  nuestra empresa como con nuestros valiosos clientes.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className="arrow_list_nosotros"
                >
                  <span className="text-[#0CB2D5]">
                    Pasión por la excelencia del cliente:
                  </span>{" "}
                  Creamos experiencias extraordinarias para el cliente
                  fomentando una lealtad duradera y generando recomendaciones
                  entusiastas.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className="arrow_list_nosotros"
                >
                  <span className="text-[#0CB2D5]">
                    Proactividad visionaria:
                  </span>{" "}
                  Ofrecemos soluciones eficientes y oportunas, manteniendo
                  siempre un paso adelante.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className="arrow_list_nosotros"
                >
                  <span className="text-[#0CB2D5]">
                    Innovación transformadora:
                  </span>{" "}
                  Fomentamos un ambiente donde las ideas audaces florecen y las
                  nuevas tecnologías se adoptan con entusiasmo, impulsando
                  constantemente los límites de lo posible.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="pt-[200px] lg:pt-[408px]">
          <div className="w-[95%] mn:w-[339px] sm:w-[520px] lg:w-[742px] 1xl:w-[1299px] 4xl:w-[1399px] mx-auto space-y-[150px]">
            <div className="text-center mn:w-[315px] sm:w-[505px] lg:w-[689px] 1xl:w-[1123px] 4xl:w-[1273px] mx-auto">
              <h3
                data-aos="fade-up"
                className="text-[18px] sm:text-[25px] lg:text-[30px]  1xl:text-[40px] 4xl:text-[55px] text-[#0CB2D5] font-extrabold italic"
              >
                Nuestro equipo
              </h3>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className="text-white text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[40px] font-semibold mt-[100px]"
              >
                En{" "}
                <span className="text-[#0CB2D5] font-extrabold">
                  Alejandría Centro de Investigación
                </span>
                , contamos con un equipo multidisciplinario de expertos
                altamente capacitados y especializados en diversas áreas
                académicas. Nuestros profesionales combinan experiencia,
                innovación y pasión por el conocimiento, garantizando soluciones
                personalizadas para cada proyecto académico. Trabajamos contigo
                para transformar tus ideas en logros concretos.
              </p>
            </div>

            <div className="space-y-[50px] mn:space-y-[80px]">
              <div className="flex flex-col gap-y-[150px]">
                <div className="4xl:w-[583px] mx-auto flex flex-col gap-y-[25px] lg:gap-y-[60px]">
                  <img
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    onClick={() => setModalMgGiancarlo(true)}
                    className="cursor-pointer w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px] 1xl:w-[270px] 1xl:h-[270px] 4xl:w-[400px] 4xl:h-[400px] block rounded-full mx-auto object-cover"
                    src={image_01}
                    alt="image_01"
                  />
                  <div>
                    <p className="text-[18px] sm:text-[25px] lg:text-[25px] 1xl:text-[35px] 4xl:text-[50px] text-white font-extrabold text-center">
                      Mg. Giancarlo Moreno
                    </p>
                    <p className="text-[14px] sm:text-[20px] 1xl:text-[30px] 4xl:text-[35px] text-[#0CB2D5] text-center font-semibold mt-[20px]">
                      CEO
                    </p>
                  </div>
                  <Link
                    to={"https://www.linkedin.com/in/gian-mores/"}
                    target="_blank"
                    className="block mx-auto w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      src={icon_06}
                      className="block w-full h-full"
                      alt="icon_06"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col mn:flex-row justify-between items-center mn:items-start gap-y-[50px] mn:gap-y-0">
                <div className="1xl:w-[519px] 1xl:h-[617px] 4xl:h-[755px] 4xl:w-[519px] flex flex-col gap-y-[40px] lg:gap-y-[60px] text-center">
                  <img
                    onClick={() => setModalMgBrenda(true)}
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    className="cursor-pointer w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] 1xl:w-[270px] 1xl:h-[270px] 4xl:w-[400px] 4xl:h-[400px] block rounded-full mx-auto object-cover"
                    src={image_02}
                    alt="image_01"
                  />
                  <div className="w-[161px] sm:w-[238px] lg:w-[261px] 1xl:w-[519px]">
                    <p className="text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[35px] 4xl:text-[50px] text-white font-extrabold">
                      Mg. Brenda Castillo
                    </p>
                    <p className="text-[12px] sm:text-[18px] 1xl:text-[30px] 4xl:text-[35px] text-[#0CB2D5] text-center font-semibold mt-[20px]">
                      Supervisora en Ciencias Empresariales, Economía y Derecho
                    </p>
                  </div>
                  <Link
                    to={
                      "https://www.linkedin.com/in/brenda-lucia-castillo-rodriguez-930518322/"
                    }
                    target="_blank"
                    className="block mx-auto w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      src={icon_06}
                      className="block w-full h-full"
                      alt="icon_06"
                    />
                  </Link>
                </div>
                <div className="1xl:w-[519px] 1xl:h-[617px] 4xl:h-[755px] 4xl:w-[519px] flex flex-col gap-y-[40px] lg:gap-y-[60px] text-center">
                  <img
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    onClick={() => setModalMgDiana(true)}
                    className="cursor-pointer w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] 1xl:w-[270px] 1xl:h-[270px] 4xl:w-[400px] 4xl:h-[400px] block rounded-full mx-auto object-cover"
                    src={image_03}
                    alt="image_01"
                  />
                  <div className="w-[161px] sm:w-[238px] lg:w-[261px] 1xl:w-[519px]">
                    <p className="text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[35px] 4xl:text-[50px] text-white font-extrabold">
                      Mg. Diana Solis
                    </p>
                    <p className="text-[12px] sm:text-[18px] 1xl:text-[30px] 4xl:text-[35px] text-[#0CB2D5] text-center font-semibold mt-[20px]">
                      Supervisora del área de Salud y Biología.
                    </p>
                  </div>
                  <Link
                    to="https://www.linkedin.com/in/diana-solis-7235b71ba"
                    target="_blank"
                    className="block mx-auto w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      src={icon_06}
                      className="block w-full h-full"
                      alt="icon_06"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="1xl:w-[519px] 1xl:h-[617px] 4xl:h-[755px] 4xl:w-[519px] flex flex-col gap-y-[40px] lg:gap-y-[60px] text-center mx-auto">
                  <img
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    onClick={() => setModalMgJenn(true)}
                    className="cursor-pointer w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] 1xl:w-[270px] 1xl:h-[270px] 4xl:w-[400px] 4xl:h-[400px] block rounded-full mx-auto object-cover"
                    src={image_04}
                    alt="image_01"
                  />
                  <div className="w-[161px] sm:w-[238px] lg:w-[261px] 1xl:w-[519px]">
                    <p className="text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[35px] 4xl:text-[50px] text-white font-extrabold">
                      Mg. Jenn García
                    </p>
                    <p className="text-[12px] sm:text-[18px] 1xl:text-[30px] 4xl:text-[35px] text-[#0CB2D5] text-center font-semibold mt-[20px]">
                      Supervisor de Ingeniería & Arquitectura
                    </p>
                  </div>
                  <Link
                    to={
                      "https://www.linkedin.com/in/jen-garc%C3%ADa-guzm%C3%A1n-00a417176/"
                    }
                    target="_blank"
                    className="block mx-auto w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      src={icon_06}
                      className="block w-full h-full"
                      alt="icon_06"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModaMgGiancarlo
          activeModal={modalMgGiancarlo}
          setActiveModal={setModalMgGiancarlo}
        />
        <ModalMgDiana
          activeModal={modalMgDiana}
          setActiveModal={setModalMgDiana}
        />
        <ModalMgJenn
          activeModal={modalMgJenn}
          setActiveModal={setModalMgJenn}
        />
        <ModalMgBrenda
          activeModal={modalMgBrenda}
          setActiveModal={setModalMgBrenda}
        />
        {/*  */}
        <section className="pt-[250px]">
          {/* El primero div es para tener referencia y posicionar la capa a la izquierda o derecha */}
          <div className="relative ">
            <div className="w-[95%] mn:w-[339px] sm:w-[520px] lg:w-[741px] 1xl:w-[1277px] 1xl:h-[847px] 4xl:w-[1522px] 4xl:h-[1031px] mx-auto space-y-[150px]">
              <div className="flex flex-col 1xl:flex-row 1xl:gap-x-[150px] 4xl:gap-x-[50px] 1xl:h-[551px] 4xl:h-[711px] items-center gap-y-[50px] sm:gap-y-[100px]">
                <div className="font-semibold w-auto lg:w-[521px] 1xl:w-[549px] 4xl:w-[830px] 4xl:h-[610px] flex flex-col justify-center space-y-[20px] text-justify leading-tight self-start">
                  <h3
                    data-aos="fade-up"
                    data-aos-offset="100"
                    className="text-[18px] sm:text-[25px] lg:text-[30px] 4xl:text-[35px] text-[#0CB2D5] uppercase leading-tight"
                  >
                    Alianzas
                  </h3>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="100"
                    className="text-white text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[40px]"
                  >
                    Estamos convencidos de que mantener el equilibrio emocional
                    y psicológico es fundamental para afrontar con éxito la
                    etapa de sustentación de tesis.
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="100"
                    className="text-white text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[40px] mt-[20px]"
                  >
                    Por ello, hemos establecido alianzas estratégicas con
                    centros de salud y bienestar, asegurándonos de que nuestros
                    clientes estén plenamente preparados para enfrentar cada
                    reto.
                  </p>
                </div>
                <div className="relative flex-1 flex flex-col justify-between min-h-[330px] h-[300px] sm:min-h-[600px] lg:max-h-[650px] 1xl:max-h-[711px] lg:w-[672px] 4xl:h-[711px] w-full">
                  <img
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    className="block rounded-full w-[132px] h-[132px] sm:w-[225px] sm:h-[225px] lg:w-[300px] lg:h-[300px] 1xl:w-[225px] 1xl:h-[225px] 4xl:w-[289px] 4xl:h-[289px]"
                    src={image_06}
                    alt="image_06"
                  />
                  <img
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    className="block absolute w-[132px] h-[132px] sm:w-[225px] sm:h-[225px] lg:w-[300px] lg:h-[300px] right-0 4xl:right-10 top-[40px] mn:top-[45px] 1xl:top-[100px] 4xl:top-[150px] rounded-full 1xl:w-[225px] 1xl:h-[225px] 4xl:w-[289px] 4xl:h-[289px]"
                    src={image_07}
                    alt="image_07"
                  />
                  <img
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    className="block rounded-full w-[132px] h-[132px] sm:w-[225px] sm:h-[225px] lg:w-[300px] lg:h-[300px] 4xl:min-w-[289px] 1xl:w-[225px] 1xl:h-[225px] 4xl:min-h-[289px] ml-[100px] 4xl:w-[289px] 4xl:h-[289px]"
                    src={image_08}
                    alt="image_08"
                  />
                </div>
              </div>
              <div className="1xl:h-[146px] flex items-center justify-center gap-x-[40px] sm:gap-x-[80px] 1xl:gap-x-[147px] 4xl:gap-x-[171px]">
                <img
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  src={icono_07}
                  className="w-[69px] h-[64px] sm:w-[97px] sm:h-[90px] lg:w-[125px] lg:h-[116px] 1xl:w-[157] 1xl:h-[146px] 4xl:h-[170px] 4xl:w-[182px]"
                  alt="icono_07"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  src={icono_08}
                  className="w-[53px] h-[64px] sm:w-[74px] sm:h-[64px] lg:w-[96px] lg:h-[82px] 1xl:w-[121px] 1xl:h-[104px] 4xl:w-[140px] 4xl:h-[121px]"
                  alt="icono_08"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  src={icono_09}
                  className="w-[98px] h-[39px] sm:w-[138px] sm:h-[56px] lg:w-[178px] lg:h-[72px] 1xl:w-[224px] 1xl:h-[91px] 4xl:h-[106px] 4xl:w-[261]"
                  alt="icono_09"
                />
              </div>
            </div>
            <div className="w-[95%] mn:w-[339px] sm:w-[520px] lg:w-[741px] 1xl:w-[1277px] 4xl:w-[1522px] 1xl:h-[786px] 4xl:h-[919px] mx-auto space-y-[150px] mt-[250px]">
              <div className="flex flex-col 1xl:flex-row 1xl:gap-x-[150px] 4xl:gap-x-[111px] gap-y-[50px] sm:gap-y-[100px]">
                <div className="font-semibold  1xl:w-[628px] 4xl:w-[704px] 4xl:h-[711px] flex flex-col justify-center space-y-[20px] text-justify">
                  <h3
                    data-aos="fade-up"
                    data-aos-offset="100"
                    className="text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] text-[#0CB2D5] uppercase"
                  >
                    Cámara de comercio de lima
                  </h3>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="100"
                    className="text-white sm:w-[343px] lg:w-[422px] 1xl:w-auto text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[40px]"
                  >
                    Contamos con una{" "}
                    <span className="text-[#0CB2D5]">afiliación a la CCL</span>,
                    lo que nos permite ofrecer mayor confianza y respaldo a
                    quienes confían en nosotros.
                  </p>
                </div>
                <div className="relative flex-1 flex flex-col justify-between w-full sm:w-[502px] lg:w-[672px] mx-auto 1xl:h-[551px] 4xl:h-[695px] h-[500px] min-h-[350px] sm:min-h-[550px]">
                  <img
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    className="block rounded-full w-[132px] h-[132px] sm:w-[225px] sm:h-[225px] lg:w-[300px] lg:h-[300px] 1xl:w-[225px] 1xl:h-[225px] 4xl:w-[289px] 4xl:h-[289px]"
                    src={image_09}
                    alt="image_09"
                  />
                  <img
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    className="block absolute w-[132px] h-[132px] sm:w-[225px] sm:h-[225px] lg:w-[300px] lg:h-[300px] right-0 4xl:right-10 top-[40px] mn:top-[45px] 1xl:top-[100px] 4xl:top-[150px] rounded-full 1xl:w-[225px] 1xl:h-[225px] 4xl:w-[289px] 4xl:h-[289px]"
                    src={image_10}
                    alt="image_10"
                  />
                  <img
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    className="block rounded-full w-[132px] h-[132px] sm:w-[225px] sm:h-[225px] lg:w-[300px] lg:h-[300px] 4xl:min-w-[289px] 1xl:w-[225px] 1xl:h-[225px] 4xl:min-h-[289px] ml-[100px] 4xl:w-[289px] 4xl:h-[289px]"
                    src={image_11}
                    alt="image_11"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  src={icono_10}
                  className="4xl:h-[74px] w-[178px] sm:w-[250px] 4xl:w-[330px]"
                  alt="icono_07"
                />
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="pt-[250px]">
          <div className="relative">
            <div className="w-[95%] mn:w-[315px] sm:w-[520px] lg:w-[741px] 1xl:w-[1061px] 4xl:w-[1061px] mx-auto font-semibold text-center">
              <h3
                data-aos="fade-up"
                data-aos-offset="100"
                className="uppercase text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[30px] 4xl:text-[35px]"
              >
                Responsabilidad social
              </h3>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                className="text-white text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[40px] sm:w-[504px] lg:w-[671px] 1xl:w-auto mx-auto mt-[20px]"
              >
                En nuestro compromiso con la responsabilidad social, respaldamos
                iniciativas como las de{" "}
                <span className="text-[#0CB2D5]">Aldeas Infantiles</span>,
                porque estamos convencidos de que la educación, el cuidado
                respetuoso y una nutrición adecuada son fundamentales para
                formar a los líderes del futuro, ofreciendo también a los niños
                oportunidades de crecimiento integral que impulsen un porvenir
                lleno de potencial.
              </p>
              <div className="mt-[50px] sm:mt-[100px] mx-auto sm:w-[445px] lg:w-[494px] 1xl:mt-[250px] 1xl:w-[722px] 4xl:h-[533px] flex items-center gap-x-[15px] mn:gap-x-[50px] sm:gap-x-[50px] lg:gap-x-[50px] 1xl:gap-x-[100px] 4xl:gap-x-[100px]">
                <img
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  className="block w-[100px] h-[26px] sm:w-[149px] sm:h-[39px] 1xl:w-[228px] 1xl:h-[60px] 4xl:w-[300px] 4xl:h-[80px]"
                  src={icono_11}
                  alt="icono_11"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  className="block w-[150px] h-[153px] sm:w-[245px] sm:h-[250px] lg:w-[294px] lg:h-[300px] 1xl:w-[400px] 1xl:h-[400px] 4xl:w-[530px] 4xl:h-[530px] rounded-2xl"
                  src={image_12}
                  alt="image_12"
                />
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="py-[250px]">
          <div className="w-[90%] 1xl:w-[1280px] 4xl:w-[1500px] mx-auto">
            <h3 className="text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] uppercase mb-[0] sm:mb-[50px] lg:mb-[80px] font-semibold">
              Ayudas Sociales
            </h3>
            <Marquee
              speed={300}
              className="space h-[300px] overflow-hidden py-4"
            >
              <div className="image_wrapper">
                <img
                  className="block w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] lg:w-[350px] lg:h-[250px] 1xl:w-[462px] 1xl:h-[290px] object-cover rounded-3xl"
                  src={image_13}
                  alt="image_01"
                />
              </div>
              <div className="image_wrapper">
                <img
                  className="block w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] lg:w-[350px] lg:h-[250px] 1xl:w-[462px] 1xl:h-[290px] object-cover rounded-3xl"
                  src={image_14}
                  alt="image_02"
                />
              </div>
              <div className="image_wrapper">
                <img
                  className="block w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] lg:w-[350px] lg:h-[250px] 1xl:w-[462px] 1xl:h-[290px] object-cover rounded-3xl"
                  src={image_15}
                  alt="image_03"
                />
              </div>
              <div className="image_wrapper">
                <img
                  className="block w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] lg:w-[350px] lg:h-[250px] 1xl:w-[462px] 1xl:h-[290px] object-cover rounded-3xl"
                  src={image_16}
                  alt="image_03"
                />
              </div>
              <div className="image_wrapper">
                <img
                  className="block w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] lg:w-[350px] lg:h-[250px] 1xl:w-[462px] 1xl:h-[290px] object-cover rounded-3xl"
                  src={image_17}
                  alt="image_03"
                />
              </div>
              <div className="image_wrapper">
                <img
                  className="block w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] lg:w-[350px] lg:h-[250px] 1xl:w-[462px] 1xl:h-[290px] object-cover rounded-3xl"
                  src={image_18}
                  alt="image_03"
                />
              </div>
            </Marquee>
          </div>
        </section>
        {/*  */}
      </main>
    </LayoutApp>
  );
};

export default Nosotros;
