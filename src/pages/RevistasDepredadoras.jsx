import LayoutBlogOptions from "../layout/LayoutBlogOptions";
import main_background from "../assets/images/banners/blogRevistaBackground.webp";
import icono_altavoz from "../assets/icons/icono-altavoz.svg";
import icono_dollar from "../assets/icons/icono-dollar.svg";
import icono_lupa from "../assets/icons/icono-lupa.svg";
import capa_01 from "../assets/images/capa_01.png";
import capa_02 from "../assets/images/capa_02.png";
import icono_04 from "../assets/icons/revistas/icono-04.svg";
import icono_05 from "../assets/icons/revistas/icono-05.svg";
import icono_06 from "../assets/icons/revistas/icono-06.svg";
import icono_07 from "../assets/icons/revistas/icono-07.svg";
import icono_08 from "../assets/icons/revistas/icono-08.svg";

const RevistasDepredadoras = () => {
  return (
    <LayoutBlogOptions>
      <main>
        <div
          className={`h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative `}
        >
          <img
            src={main_background}
            className="w-full h-full object-cover lg:object-fill"
            alt="back_hero"
            decoding="async"
          />
          <div className="main_background_02 absolute top-0 z-10 h-full w-full flex items-end">
            <p
              data-aos="zoom-in"
              className="text-white font-bold ml-2 w-[95%] mn:w-[209px] sm:w-[431px] lg:w-[456px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:w-[1254px] 4xl:w-[1505px] mb-[100px] 1xl:text-[40px] 4xl:text-[54px] mn:ml-[18px] sm:ml-[46px] lg:ml-[79px] 1xl:ml-[80px] 4xl:ml-[104px] uppercase leading-tight"
            >
              REVISTAS DEPREDADORAS:{" "}
              <span className="block font-extrabold mn:text-[14px] sm:text-[25px] lg:text-[30px] 1xl:text-[45px] 4xl:text-[54px]">
                ¿Cómo identificarlas y proteger tu trabajo?
              </span>
            </p>
          </div>
        </div>
        <section className="new py-[0.1px]">
          <div className="mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] 1xl:pt-[400px] mt:pt-[123px] mt-[64px] sm:mt-[138px]">
            <div className="relative">
              <p
                data-aos="zoom-in"
                className="text-white font-bold mn:text-[14px] w-[95%] mn:w-[295px] sm:w-[440px] lg:w-[539px] 1xl:w-[970px] 4xl:w-[1238px]  sm:text-[20px] lg:text-[25px] text-[14px] 1xl:text-[25px] 4xl:text-[35px] text-justify mx-auto mn:mx-0"
              >
                En el mundo académico, la publicación de investigaciones es un
                paso crucial para compartir conocimientos y contribuir al avance
                de la ciencia. Sin embargo, la proliferación de{" "}
                <strong className="text-[#0CB2D5] font-bold">
                  revistas depredadoras
                </strong>{" "}
                ha complicado este proceso. Estas publicaciones, que a menudo
                parecen legítimas, pueden poner en riesgo la integridad de tu
                trabajo y tu reputación profesional. En este artículo,
                exploraremos qué son las revistas depredadoras, cómo
                identificarlas y qué pasos puedes seguir para proteger tu
                investigación.
              </p>
              <img
                src={capa_02}
                className="hidden sm:block top-1/2 -translate-y-1/2 absolute z-40 right-0 sm:h-[250px] lg:w-[300px] lg:h-[550px]"
                alt="capa-image"
                draggable={false}
              />
            </div>
          </div>

          <div className="1xl:mt-[395px] w-[95%] mx-auto mn:mx-0 lg:mt-[210px] sm:mt-[250px] mt-[140px] mn:mt-[150px]  flex flex-col lg:ml-[80px] 1xl:flex-row lg:w-[740px] 1xl:w-[1263px] 4xl:w-[1521px] 1xl:h-[402px] 4xl:h-[482px] gap-[86px]">
            <div className="text-white mn:w-[339px] text-center mx-auto sm:w-[521px] lg:w-[740px] 1xl:w-[629px] flex flex-col justify-center gap-y-[25px]">
              <h3
                data-aos="fade-right"
                className="text-[#0CB2D5] font-extrabold mx-auto lg:mx-0 uppercase mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] mn:w-[295px] sm:w-[331px] lg:w-[397px] 4xl:w-[530px] italic text-center lg:text-start"
              >
                ¿Qué Son las Revistas Depredadoras?
              </h3>
              <p
                data-aos="fade-right"
                className="font-semibold mn:w-[295px] sm:w-[471px] lg:w-[570px] 4xl:w-auto mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px] text-center lg:text-start mx-auto lg:mx-0"
              >
                Las revistas depredadoras son aquellas que se dedican a publicar
                artículos científicos sin seguir un proceso riguroso de revisión
                por pares ni cumplir con estándares éticos. Suelen tener
                prácticas engañosas, como:
              </p>
            </div>
            <div className="flex items-center sm:items-start gap-y-5 sm:gap-y-0 flex-row h-[280px] mn:h-[242px] sm:h-[402px] 4xl:h-[482px] justify-center gap-x-2 mn:gap-x-5 text-white font-bold 1xl:text-[18px] 4xl:text-[22px] italic">
              <div
                data-aos="flip-left"
                className="w-[100px] h-[120px] sm:w-[138px] sm:h-[200px] lg:w-[171px] lg:h-[200px] 4xl:w-[240px] 4xl:h-[280px] gap-y-4 rounded-xl gradiente_testimonio flex flex-col items-center justify-center transition-transform hover:scale-105 self-start"
              >
                <img
                  src={icono_dollar}
                  className="block w-[42px] h-[35px] sm:w-[61px] sm:h-[50px] lg:w-[74px] lg:h-[60px] 4xl:w-[98px] 4xl:h-[80px]"
                  alt="icono_lupa"
                />
                <p className="mn:text-[10px] text-[10px] sm:text-[15px] lg:text-[18px] w-[76px] lg:w-[91px] 1xl:w-[91px] 4xl:w-[198px] text-center">
                  Cobros excesivos
                </p>
              </div>
              <div
                data-aos="flip-left"
                className="w-[100px] h-[120px] sm:w-[138px] sm:h-[200px] lg:w-[171px] lg:h-[200px] 4xl:w-[240px] 4xl:h-[280px] gap-y-4 rounded-xl gradiente_testimonio flex flex-col items-center justify-center mn:self-center  transition-transform hover:scale-105"
              >
                <img
                  src={icono_lupa}
                  className="block w-[34px] h-[35px] sm:w-[48px] sm:h-[50px] lg:w-[58px] lg:h-[60px] 4xl:w-[78px] 4xl:h-[80px]"
                  alt="icono_lupa"
                />
                <p className="text-[10px] mn:text-[10px] sm:text-[15px] lg:text-[18px] 4xl:w-[197px] text-center">
                  Falta de transparencia
                </p>
              </div>
              <div
                data-aos="flip-left"
                className="w-[100px] h-[120px] sm:w-[138px] sm:h-[200px] lg:w-[171px] lg:h-[200px] 4xl:w-[240px] 4xl:h-[280px] gap-y-4 rounded-xl gradiente_testimonio flex flex-col items-center justify-center self-end  transition-transform hover:scale-105"
              >
                <img
                  src={icono_altavoz}
                  className="block w-[50px] h-[43px] mn:w-[50px] mn:h-[43px] sm:w-[50px] sm:h-[43px] lg:w-[69px] lg:h-[60px] 4xl:w-[92px] 4xl:h-[80px]"
                  alt="icono_lupa"
                />
                <p className="text-[10px] mn:text-[10px] sm:text-[15px] w-[95%] mn:w-[80px] sm:w-[97px] lg:text-[18px] 4xl:w-[174px] text-center">
                  Promesas de rápida publicación
                </p>
              </div>
            </div>
          </div>

          <div className="w-[95%] mx-auto mn:mx-0 4xl:mt-[250px] 1xl:mt-[326px] lg:mt-[200px] sm:mt-[250px] mt-[80px] mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] mn:w-[323px] sm:w-[505px] lg:w-[778px] 1xl:w-[1302px] 4xl:w-[1309px] space-y-10">
            <h3
              data-aos="fade-up"
              className="text-[#0CB2D5] sm:w-[379px] lg:w-auto mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] uppercase font-bold"
            >
              ¿Cómo identificar revistas depredadoras?
            </h3>
            {/*  */}
            <div className="h-[480px] mn:h-[375px] sm:h-[707px] lg:h-[789px]  1xl:h-[553px] 4xl:h-[805px] flex gap-x-[33px]">
              <div className="w-[5px] bg-[#0CB2D5] h-full"></div>
              <div className="text-white flex flex-col justify-between mn:text-[12px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px]">
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className=" font-semibold leading-tight 1xl:w-[1186px] 4xl:w-auto arrow_list_revistas_depredadoras"
                >
                  <span className="text-[#0CB2D5]">Revisión por Pares:</span>{" "}
                  Verifica si la revista tiene un proceso claro de revisión por
                  pares. Si no hay información disponible sobre cómo se revisan
                  los artículos, es una señal de advertencia.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className="font-semibold leading-tight 1xl:w-[1186px] 4xl:w-auto arrow_list_revistas_depredadoras"
                >
                  <span className="text-[#0CB2D5]">Indexación:</span> Comprueba
                  si la revista está indexada en bases de datos reconocidas como
                  Scopus, Web of Science o PubMed. Las revistas depredadoras
                  suelen no estar incluidas en estos índices.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className="font-semibold leading-tight 1xl:w-[1186px] 4xl:w-auto arrow_list_revistas_depredadoras"
                >
                  <span className="text-[#0CB2D5]">Transparencia:</span> Revisa
                  la página web de la revista. Las publicaciones legítimas
                  suelen proporcionar información clara sobre el equipo
                  editorial, políticas de publicación y tarifas.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className="font-semibold leading-tight 1xl:w-[1186px] 4xl:w-auto arrow_list_revistas_depredadoras"
                >
                  <span className="text-[#0CB2D5]">
                    {" "}
                    Frecuencia de Publicación:
                  </span>{" "}
                  Si una revista publica un número excesivo de artículos en un
                  corto período, puede ser un indicativo de que no está llevando
                  a cabo una revisión adecuada.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  className="font-semibold leading-tight 1xl:w-[1186px] 4xl:w-auto arrow_list_revistas_depredadoras"
                >
                  <span className="text-[#0CB2D5]">
                    {" "}
                    Calidad del Contenido::
                  </span>{" "}
                  Examina artículos publicados anteriormente. Si encuentras
                  errores evidentes o falta de rigor científico, es probable que
                  la revista no sea confiable.
                </p>
              </div>
            </div>
            {/*  */}
          </div>

          <div className="4xl:mt-[274px] 1xl:mt-[266px] lg:mt-[229px] sm:mt-[250px] mt-[110px] w-[95%] mn:w-[315px] sm:w-[500px] lg:w-[696px] 1xl:w-[1280px] 4xl:w-[1500px] 1xl:h-[637px] 4xl:h-[739px] mx-auto">
            <h3
              data-aos="fade-up"
              data-aos-offset="100"
              className="uppercase text-[#0CB2D5] sm:w-[344px] mx-auto lg:w-auto mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] font-semibold text-center mb-[50px] sm:mb-[100px]"
            >
              Estrategias para Proteger tu Trabajo
            </h3>
            <div className="text-white space-y-10">
              <div className="flex flex-wrap gap-y-10 justify-center gap-x-10 4xl:italic font-bold 1xl:text-center text-[12px] mn:text-[14px] sm:text-[20px] lg:text-[20px] 1xl:text-[18px] 4xl:text-[22px]">
                <div
                  data-aos="zoom-in"
                  className="gradiente_testimonio gap-y-4 w-full rounded-xl flex 1xl:flex-col items-center justify-center mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[200px] lg:w-[600px] lg:h-[200px] 1xl:w-[400px] gap-x-[15px] sm:gap-x-[50px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] transition-transform hover:scale-110"
                >
                  <img
                    className="block w-[40px] h-[48px] sm:w-[66px] sm:h-[80px] 1xl:w-[49px] 1xl:h-[60px] 4xl:w-[66px] 4xl:h-[80px]"
                    src={icono_04}
                    alt="icono_04"
                  />
                  <p className="1xl:mx-auto w-[200px] sm:w-[270px] lg:w-[360px] 1xl:w-[280px] 4xl:w-[400px] leading-none">
                    Investiga Antes de Enviar: Verifica la legitimidad de la
                    revista.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  className="gradiente_testimonio w-full gap-y-4 rounded-xl flex 1xl:flex-col items-center justify-center mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[200px] lg:w-[600px] lg:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] transition-transform hover:scale-110 gap-x-[15px] sm:gap-x-[50px]"
                >
                  <img
                    className="block w-[40px] h-[40px] sm:w-[79px] sm:h-[80px]  1xl:w-[59px] 1xl:h-[60px] 4xl:w-[79px] 4xl:h-[80px]"
                    src={icono_05}
                    alt="icono_05"
                  />
                  <p className="1xl:mx-auto w-[200px] sm:w-[270px] lg:w-[360px] 1xl:w-[346px] 4xl:w-[400px] leading-none">
                    Consulta a Colegas y Mentores: Obtén recomendaciones de
                    expertos en el campo.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  className="gradiente_testimonio w-full gap-y-4 rounded-xl flex 1xl:flex-col items-center justify-center mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[200px] lg:w-[600px] lg:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] transition-transform hover:scale-110 gap-x-[15px] sm:gap-x-[50px]"
                >
                  <img
                    className="block w-[40px] h-[42px] sm:w-[75px] sm:h-[80px] 1xl:w-[56px] 1xl:h-[60px] 4xl:w-[75px] 4xl:h-[80px]"
                    src={icono_06}
                    alt="icono_06"
                  />
                  <p className="1xl:mx-auto w-[200px] sm:w-[270px] lg:w-[360px] 1xl:w-[261px] 4xl:w-[400px] leading-none">
                    Mantente Informado: Conoce las características de revistas
                    depredadoras.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-y-10 justify-center gap-x-10 4xl:italic font-bold 1xl:text-center text-[12px] mn:text-[14px] sm:text-[20px] lg:text-[20px] 1xl:text-[18px] 4xl:text-[22px]">
                <div
                  data-aos="zoom-in"
                  className="gradiente_testimonio w-full gap-y-4 rounded-xl flex 1xl:flex-col items-center justify-center mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[200px] lg:w-[600px] lg:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] transition-transform hover:scale-110 gap-x-[15px] sm:gap-x-[50px]"
                >
                  <img
                    className="block w-[40px] h-[47px] sm:w-[67px] sm:h-[80px] 1xl:w-[50px] 1xl:h-[60px] 4xl:w-[67px] 4xl:h-[80px]"
                    src={icono_07}
                    alt="icono_07"
                  />
                  <p className="1xl:mx-auto w-[200px] sm:w-[270px] lg:w-[360px] 1xl:w-[400px] 4xl:w-[400px] leading-none">
                    Revisa las Políticas de Publicación: Asegúrate de que sean
                    claras y justas.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  className="gradiente_testimonio w-full gap-y-4 rounded-xl flex 1xl:flex-col items-center justify-center mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[200px] lg:w-[600px] lg:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] transition-transform hover:scale-110 gap-x-[15px] sm:gap-x-[50px]"
                >
                  <img
                    className="block w-[40px] h-[40px] sm:w-[79px] sm:h-[80px] 1xl:w-[59px] 1xl:h-[60px] 4xl:w-[79px] 4xl:h-[80px]"
                    src={icono_08}
                    alt="icono_08"
                  />
                  <p className="1xl:mx-auto w-[200px] sm:w-[270px] lg:w-[360px] 1xl:w-[349px] 4xl:w-[400px] leading-none">
                    Utiliza Recursos de Verificación: Apóyate en herramientas
                    confiables para evaluar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-auto">
            <div className="pt-[95px] sm:pt-[250px] lg:pt-[200px] 1xl:pt-[150px] 4xl:pt-[250px] pb-[150px] lg:pb-[250px] 1xl:pb-[362px] w-[95%] mn:w-[320px] sm:w-[512px] lg:w-[692px] 1xl:w-[886px] 4xl:w-[886px mx-auto text-center font-semibold">
              <h3
                data-aos="fade-up"
                className="text-[#0CB2D5] uppercase mn:text-[18px] sm:text-[25px] lg:text-[35px] 1xl:text-[35px] 4xl:text-[35px]"
              >
                Herramientas importantes:
              </h3>
              <p
                data-aos="fade-up"
                className="text-white mn:text-[14px] sm:text-[20px] lg:text-[35px] 1xl:text-[35px] 4xl:text-[35px]"
              >
                Utiliza herramientas como el "Directory of Open Access Journals"
                (DOAJ) o "Think.Check.Submit" para evaluar la legitimidad de las
                revistas.
              </p>
              <img
                src={capa_01}
                className="hidden lg:block top-1/2 translate-y-2/4 1xl:-translate-y-1/2 absolute z-40 right-0 1xl:left-0 sm:h-[250px] lg:w-[200px] lg:h-[300px] 1xl:w-[250px] 1xl:h-[450px] rotate-180 1xl:rotate-0"
                alt="capa-image"
                draggable={false}
              />
            </div>
          </div>
        </section>
      </main>
    </LayoutBlogOptions>
  );
};

export default RevistasDepredadoras;
