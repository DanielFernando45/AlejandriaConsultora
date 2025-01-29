import LayoutBlogOptions from "../layout/LayoutBlogOptions";
import backgroundArticulo from "../assets/images/banners/blogArticuloBackground.webp";
import icono_01 from "../assets/icons/blog/articulo/icono-01.svg";
import icono_02 from "../assets/icons/blog/articulo/icono-02.svg";
import icono_03 from "../assets/icons/blog/articulo/icono-03.svg";
import icono_04 from "../assets/icons/blog/articulo/icono-04.svg";
import icono_05 from "../assets/icons/blog/articulo/icono-05.svg";
import capa_02 from "../assets/images/capa_02.png";

const BlogArticulo = () => {
  return (
    <LayoutBlogOptions>
      <main>
        <div
          className={`h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative`}
        >
          <img
            src={backgroundArticulo}
            className="w-full h-full object-cover lg:object-fill"
            alt="back_hero"
            draggable={false}
              decoding="async"
          />
          <div className="main_background_02 absolute top-0 z-10 h-full w-full flex items-end">
            <p
              data-aos="zoom-in"
              className="text-white ml-2 font-bold mn:w-[191px] sm:w-[358px] lg:w-[751px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:w-[1126px] 4xl:w-[1352px] mb-[100px] 1xl:text-[40px] 4xl:text-[54px] mn:ml-[18px] sm:ml-[46px] lg:ml-[80px] 1xl:ml-[80px] 4xl:ml-[104px] uppercase leading-tight"
            >
              Pasos Clave para
              <span className="block font-extrabold mn:text-[14px] sm:text-[25px] lg:text-[30px] 1xl:text-[45px] 4xl:text-[54px]">
                Publicar un Artículo Académico Exitoso
              </span>
            </p>
          </div>
        </div>

        <section className="pt-[39px] sm:pt-[138px] lg:pt-[123px] 1xl:pt-[250px] pb-[150px] sm:pb-[250px] lg:pb-[250px]  1xl:pb-[346px] 4xl:pb-[352px] new">
          <div className="relative h-auto 1xl:h-[500px] 4xl:h-[500px] mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] flex items-center">
            <p
              data-aos="zoom-in"
              className="text-white w-[95%] mx-auto mn:mx-0 mn:w-[295px] sm:w-[436px] lg:w-[608px] 1xl:w-[966px] 4xl:w-[1238px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px] text-justify leading-tight font-bold"
            >
              Publicar un artículo académico es un hito importante en la carrera
              de cualquier investigador, ya que no solo permite compartir tus
              hallazgos con la comunidad científica, sino que también contribuye
              a tu desarrollo profesional y reputación en el campo. Este proceso
              puede abrir oportunidades para colaboraciones, financiamiento y
              participación en conferencias. Sin embargo, la publicación puede
              ser compleja y desafiante, ya que implica cumplir con rigurosos
              estándares de calidad y enfrentarse a la revisión por pares, lo
              que requiere paciencia y perseverancia.
            </p>
            <img
              src={capa_02}
              className="hidden sm:block top-1/2 -translate-y-1/2 absolute z-40 right-0 sm:h-[250px] lg:w-[300px] lg:h-[550px]"
              alt="capa-image"
              draggable={false}
            />
          </div>
          {/*  */}
          <div className="pt-[95px] sm:pt-[250px] lg:pt-[210px] 1xl:pt-[280px] 4xl:pt-[306px] w-[95%] mx-auto mn:mx-0 mn:w-[295px] sm:w-[525px] lg:w-[716px] 1xl:w-[1054px] 4xl:w-[1054px] mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] space-y-[25px] font-semibold text-start sm:text-center lg:text-start">
            <h3
              data-aos="fade-up"
              className="text-[#0CB2D5] uppercase mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] "
            >
              Elige un Tema Relevante y Original
            </h3>
            <p
              data-aos="fade-up"
              className="text-white mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[40px]"
            >
              El primer paso para un artículo exitoso es seleccionar un tema que
              sea relevante y original. Asegúrate de que tu investigación aborde
              una pregunta significativa o un vacío en la literatura existente.
              Investiga las tendencias actuales en tu campo y considera cómo tu
              trabajo puede contribuir a la discusión académica.
            </p>
          </div>
          {/*  */}
          <div className="pt-[95px] sm:pt-[250px] lg:pt-[200px] 1xl:pt-[150px] 4xl:pt-[250px] w-[95%] mx-auto mn:mx-0 mn:w-[326px] sm:w-[509px] lg:w-[725px] 1xl:w-[985px] 4xl:w-[1308px] mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] font-semibold space-y-[100px]">
            <div className="space-y-[25px]">
              <h3
                data-aos="fade-up"
                className="text-[#0CB2D5] mn:w-[268px] sm:w-[438px] lg:w-[505px] 1xl:w-auto mn:text-[14px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] uppercase"
              >
                Realiza una Revisión Exhaustiva de la Literatura
              </h3>
              <p
                data-aos="fade-up"
                className="text-white mn:w-[315px] sm:w-[481px] lg:w-[616px] 1xl:w-auto mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px]"
              >
                Antes de comenzar a escribir, realiza una revisión exhaustiva de
                la literatura relacionada con tu tema. Esto te ayudará a:
              </p>
            </div>
            <div className="text-[#0CB2D5] space-y-[25px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px] pl-[40px]">
              <div>
                <p
                  data-aos="fade-up"
                  className="arrow_list_revistas_depredadoras"
                >
                  Comprender el contexto de tu investigación.
                </p>
              </div>
              <div>
                <p
                  data-aos="fade-up"
                  className="arrow_list_revistas_depredadoras"
                >
                  Identificar estudios previos y enfoques metodológicos.
                </p>
              </div>
              <div>
                <p
                  data-aos="fade-up"
                  className="arrow_list_revistas_depredadoras"
                >
                  Justificar la importancia de tu trabajo y su contribución al
                  campo.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[95px] sm:pt-[250px] lg:pt-[200px] 1xl:pt-[150px] 4xl:pt-[250px] mn:w-[315px] sm:w-[500px] lg:w-[600px] 1xl:w-[1280px] 4xl:w-[1500px] mx-auto  space-y-[40px] lg:space-y-[80px] 1xl:space-y-[120px]">
            <h3
              data-aos="fade-up"
              className="text-[#0CB2D5] font-semibold mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] uppercase text-center"
            >
              Define una Estructura Clara
            </h3>
            <div className="space-y-[56px]">
              <div className="w-[95%] mx-auto mn:mx-0 mn:w-auto flex flex-wrap 1xl:gap-x-[40px] 4xl:gap-x-[60px] justify-center gap-y-14">
                <div
                  data-aos="zoom-in"
                  className="mn:w-[315px] w-full h-[150px] sm:w-[500px] lg:w-[600px] sm:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex 1xl:flex-col gap-x-[15px] sm:gap-x-[50px] items-center justify-center gap-y-4 rounded-3xl gradiente_testimonio"
                >
                  <img
                    src={icono_01}
                    className="block w-[40px] h-[44px] sm:w-[72px] sm:h-[80px] 1xl:w-[54px] 1xl:h-[60px] 4xl:w-[72px] 4xl:h-[79px]"
                    alt="icono_01"
                  />
                  <p className="text-white mn:text-[14px] sm:text-[20px] lg:text-[20px] 1xl:text-[18px] 4xl:text-[22px] w-[200px] sm:w-[280px] 1xl:w-[400px] 4xl:w-[400px] font-semibold leading-none 1xl:text-center">
                    <span className="font-bold sm:block 4xl:inline-block">
                      {" "}
                      Introducción:
                    </span>{" "}
                    Presenta el tema, la pregunta de investigación y la
                    relevancia del estudio.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  className="mn:w-[315px] w-full h-[150px] sm:w-[500px] lg:w-[600px] sm:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex 1xl:flex-col gap-x-[15px] sm:gap-x-[50px] items-center justify-center gap-y-4 rounded-3xl gradiente_testimonio"
                >
                  <img
                    src={icono_02}
                    className="block w-[37px] mn:w-[67px] mn:h-[80px]"
                    alt="icono_02"
                  />
                  <p className="text-white mn:text-[14px] sm:text-[20px] lg:text-[20px] w-[187px] 1xl:text-[18px] 4xl:text-[22px] sm:w-[280px] 1xl:w-[221px] 4xl:w-[400px] font-semibold leading-none 1xl:text-center">
                    <span className="font-bold sm:block 4xl:inline-block">
                      Métodos:
                    </span>{" "}
                    Describe cómo se llevó a cabo la investigación.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-full mn:w-[315px] h-[150px] sm:w-[500px] lg:w-[600px] sm:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex 1xl:flex-col gap-x-[15px] sm:gap-x-[50px] items-center justify-center gap-y-4 rounded-3xl gradiente_testimonio"
                >
                  <img
                    src={icono_03}
                    className="block w-[40px] h-[51px] sm:w-[62px] sm:h-[80px] lg:w-[62px] lg:h-[80px] 4xl:w-[62px] 4xl:h-[80px]"
                    alt="icono_03"
                  />
                  <p className="text-white mn:text-[14px] sm:text-[20px] lg:text-[20px] 1xl:text-[18px] 4xl:text-[22px] w-[180px] sm:w-[280px] 1xl:w-[241px] 4xl:w-[400px] font-semibold leading-none 1xl:text-center">
                    <span className="font-bold sm:block 4xl:inline-block">
                      {" "}
                      Resultados:
                    </span>{" "}
                    Presenta los hallazgos de manera clara y concisa.
                  </p>
                </div>
              </div>
              <div className="flex w-[95%] mx-auto mn:mx-0 mn:w-auto flex-wrap justify-center gap-x-14 gap-y-14">
                <div
                  data-aos="zoom-in"
                  className="w-full mn:w-[315px] h-[150px] sm:w-[500px] lg:w-[600px] sm:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex 1xl:flex-col gap-x-[15px] sm:gap-x-[50px] items-center justify-center gap-y-4 rounded-3xl gradiente_testimonio"
                >
                  <img
                    className="block w-[40px] h-[40px] sm:w-[79px] sm:h-[80px] 4xl:w-[79px] 4xl:h-[79px]"
                    src={icono_04}
                    alt="icono_04"
                  />
                  <p className="text-white mn:text-[14px] w-[200px] sm:text-[20px] 1xl:text-[18px] 4xl:text-[22px] sm:w-[280px] 1xl:w-[233px] 4xl:w-[400px] font-semibold leading-none 1xl:text-center">
                    <span className="font-bold sm:block 4xl:inline-block">
                      Discusión:
                    </span>{" "}
                    Interpreta los resultados y sugiere implicaciones.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-full mn:w-[315px] h-[150px] sm:w-[500px] lg:w-[600px] sm:h-[200px] 1xl:w-[400px] 1xl:h-[200px] 4xl:w-[460px] 4xl:h-[250px] flex 1xl:flex-col gap-x-[15px] sm:gap-x-[50px] items-center justify-center gap-y-4 rounded-3xl gradiente_testimonio"
                >
                  <img
                    className="block w-[40px] h-[41px] sm:w-[76px] sm:h-[80px]"
                    src={icono_05}
                    alt="icono_05"
                  />
                  <p className="text-white mn:text-[14px] sm:text-[20px] 1xl:text-[18px] 4xl:text-[22px] w-[200px] sm:w-[280px] 1xl:w-[400px] 4xl:w-[400px] font-semibold leading-none 1xl:text-center">
                    <span className="font-bold sm:block 4xl:inline-block">
                      Conclusiones:
                    </span>{" "}
                    Resume los hallazgos principales y propone futuras líneas de
                    investigación.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[95px] sm:pt-[250px] lg:pt-[200px] 1xl:pt-[150px] 4xl:pt-[250px] w-[95%] mx-auto mn:mx-0 mn:w-[348px] sm:w-[514px] lg:w-[737px] 1xl:w-[1301px] 4xl:w-[1301px] 4x:ml-[80px] mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] font-semibold space-y-[50px]">
            <h3
              data-aos="fade-up"
              className="text-[#0CB2D5] mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px]"
            >
              Selecciona la Revista Adecuada
            </h3>
            <div className="text-white h-[140px] mn:h-[210px] sm:h-[288px] lg:h-[322px] 1xl:h-[210px] 4xl:h-[387px] gap-x-4 flex mn:gap-x-[15px] sm:gap-x-[25px]">
              <div className="w-[5px] bg-[#0CB2D5] h-full"></div>
              <div className="text-[12px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px] 4xl:w-[1258px]  flex flex-col justify-between gap-y-[10px] mn:gap-y-[30px] leading-tight">
                <div>
                  <p data-aos="fade-up" className="arrow_list_blog_articulo">
                    <span className="text-[#0CB2D5]">Ámbito temático: </span>
                    Asegúrate de que la revista acepte artículos sobre tu tema
                    específico.
                  </p>
                </div>
                <div>
                  <p
                    data-aos="fade-up"
                    className="arrow_list_blog_articulo 1xl:w-[1125px] 4xl:w-auto"
                  >
                    <span className="text-[#0CB2D5]">
                      Proceso de revisión por pares:{" "}
                    </span>
                    Elige revistas que implementen un riguroso proceso de
                    revisión por pares para garantizar la calidad de las
                    publicaciones.
                  </p>
                </div>
                <div>
                  <p
                    data-aos="fade-up"
                    className="arrow_list_blog_articulo 1xl:w-[1125px] 4xl:w-auto"
                  >
                    <span className="text-[#0CB2D5]">
                      Políticas editoriales:{" "}
                    </span>
                    Lee las directrices para autores y asegúrate de cumplir con
                    todos los requisitos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[95px] w-[95%] sm:pt-[250px] lg:pt-[200px] 1xl:pt-[150px] 4xl:pt-[250px] mn:w-[320px] sm:w-[531px] lg:w-[687] 1xl:w-[973px] 4xl:w-[1205px] text-center mx-auto space-y-[40px] mn:space-y-[50px] lg:space-y-[100px] 1xl:space-y-[150px]">
            <p
              data-aos="fade-up"
              className="text-white font-semibold mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px] leading-tight"
            >
              Publicar un artículo académico exitoso requiere dedicación y
              atención al detalle. Siguiendo estos pasos clave, mejorarás tus
              posibilidades de publicación y contribuirás al conocimiento en tu
              campo. En Alejandría, te apoyamos en cada etapa, desde la
              redacción hasta la selección de revistas.
            </p>
            <h3
              data-aos="fade-up"
              className="text-[#0CB2D5] mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] font-extrabold"
            >
              ¡Comienza hoy tu camino hacia el éxito!
            </h3>
          </div>
        </section>
      </main>
    </LayoutBlogOptions>
  );
};

export default BlogArticulo;
