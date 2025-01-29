import LayoutBlogOptions from "../layout/LayoutBlogOptions";
import backgroundTesis from "../assets/images/banners/blogTesisBackground.webp";
import capa_02 from "../assets/images/capa_02.png";
import icono_01 from "../assets/images/blog/tesis/icono-01.svg";
import icono_02 from "../assets/images/blog/tesis/icono-02.svg";
import icono_03 from "../assets/images/blog/tesis/icono-03.svg";
import triangle from "../assets/icons/icono-triangulo.svg";

const BlogTesis = () => {
  return (
    <LayoutBlogOptions>
      <main>
        <div
          className={`h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative `}
        >
          <img
            src={backgroundTesis}
            className="w-full h-full object-cover lg:object-fill"
            alt="back_hero"
            decoding="async"
          />
          <div className="main_background_02 absolute top-0 z-10 h-full w-full flex items-end">
            <p
              data-aos="zoom-in"
              className="text-white font-bold ml-2 mn:w-[242px] sm:w-[431px] lg:w-[751px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:w-[1126px] 4xl:w-[1352px] mb-[100px] 1xl:text-[40px] 4xl:text-[54px] mn:ml-[18px] sm:ml-[46px] lg:ml-[80px] 4xl:ml-[104px] uppercase leading-tight"
            >
              Como elegir el{" "}
              <span className="block font-extrabold mn:text-[14px] sm:text-[25px] lg:text-[30px] 1xl:text-[45px] 4xl:text-[54px]">
                tema perfecto para tu tesis
              </span>
            </p>
          </div>
        </div>

        <section className="1xl:pt-[400px] pt-[150px] pb-[250px] space-y-[110px] sm:space-y-[250px] lg:space-y-[210px] 1xl:space-y-[250px] new">
          <div className="relative mn:ml-[18px] sm:ml-[40px] lg:ml-[80px] h-auto 1xl:h-[500px] 4xl:h-[500px] flex items-center">
            <p
              data-aos="zoom-in"
              className="text-white w-[95%] mx-auto mn:mx-0 font-bold leading-tight mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px] text-justify mn:w-[295px] sm:w-[433px] lg:w-[588px] 1xl:w-[908px] 4xl:w-[1238px]"
            >
              Elegir el tema adecuado para tu tesis es fundamental en tu
              trayectoria académica, ya que establece la dirección de tu
              investigación. Un buen tema no solo te mantendrá motivado durante
              el proceso, sino que también influirá en el impacto y la
              relevancia de tu trabajo. Al abordar cuestiones actuales o vacíos
              en la literatura, contribuirás al avance del conocimiento en tu
              disciplina y abrirás puertas a futuras oportunidades. Dedicar
              tiempo a reflexionar sobre tus intereses y consultar con mentores
              es esencial para tomar esta decisión.
            </p>
            <img
              src={capa_02}
              className="hidden sm:block top-1/2 -translate-y-1/2 absolute z-40 right-0 sm:h-[250px] lg:w-[300px] lg:h-[550px]"
              alt="capa-image"
              draggable={false}
            />
          </div>

          <div className="w-[95%] mx-auto mn:mx-0 mn:w-[333px] sm:w-[520px] lg:w-[753px] 1xl:w-[1308px] 4xl:w-[1308px] 1xl:h-[452px] 4xl:h-[629px]  font-semibold 4xl:text-[35px] mn:ml-[18px] sm:ml-[40px] lg:ml-[80px]">
            <div className="space-y-[25px]">
              <h3
                data-aos="fade-up"
                className="text-[#0CB2D5] mn:w-[258px] sm:w-[520px] lg:w-[624px] 1xl:w-auto mn:text-[14px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] uppercase"
              >
                Identifica tus Intereses y Pasiones
              </h3>
              <p
                data-aos="fade-up"
                className="text-white leading-tight mn:w-[295px] sm:w-[432px] lg:w-[718px] 1xl:w-[1308px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px]"
              >
                El primer paso para elegir un tema es reflexionar sobre tus
                intereses personales y académicos. Pregúntate:
              </p>
            </div>
            <div className="text-[#0CB2D5] mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px] my-[50px] xl:my-[100px] space-y-[50px] leading-tight mn:w-[270px] sm:w-[431px] lg:w-[489px] 1xl:w-[968px] 4xl:w-[1130px] mx-auto ">
              <p
                data-aos="fade-up"
                className="arrow_list_revistas_depredadoras"
              >
                ¿Qué temas me apasionan dentro de mi campo de estudio?
              </p>
              <p
                data-aos="fade-up"
                className="arrow_list_revistas_depredadoras"
              >
                ¿Hay algún problema o cuestión que me gustaría explorar más a
                fondo?
              </p>
            </div>
            <p
              data-aos="fade-up"
              className="text-white leading-tight mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px]"
            >
              Seleccionar un tema que te apasione hará que el proceso de
              investigación sea más gratificante y menos tedioso.
            </p>
          </div>

          <div className="mn:w-[315px] sm:w-[500px] lg:w-[600px] 1xl:w-[1280px] 4xl:w-[1500px] xl:h-[443px] mx-auto space-y-[40px] lg:space-y-[80px] 1xl:space-y-[120px]">
            <h3
              data-aos="fade-up"
              className="uppercase text-[#0CB2D5] text-center mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px] font-semibold"
            >
              Revisa la Literatura Existente
            </h3>
            <div className="flex flex-wrap w-[95%] mx-auto mn:w-auto mn:mx-0 justify-between gap-x-4 gap-y-8 mn:text-[14px] sm:text-[20px] 1xl:text-[18px] 4xl:text-[22px]">
              <div
                data-aos="flip-left"
                className="mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[200px] lg:w-[600px] lg:h-[200px] 4xl:w-[460px] 4xl:h-[250px] 1xl:w-[400px] 1xl:h-[200px] flex 1xl:flex-col items-center justify-center border gap-y-[25px] gradiente_testimonio rounded-3xl mx-auto w-full sm:gap-x-[50px] gap-x-[15px]"
              >
                <img
                  src={icono_01}
                  className="block w-[40px] h-[38px] sm:w-[82px] sm:h-[80px] 1xl:w-[61px] 1xl:h-[60px] 4xl:w-[82px] 4xl:h-[80px]"
                  alt="icono_01"
                />
                <p className="text-white font-bold w-[200px] sm:w-[250px] lg:w-[250px] 1xl:w-[219px] 4xl:w-[400px] 1xl:text-center">
                  Identificar vacíos en la investigación actual.
                </p>
              </div>
              <div
                data-aos="flip-left"
                className="mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[200px] lg:w-[600px] lg:h-[200px] 4xl:w-[460px] 4xl:h-[250px] 1xl:w-[400px] 1xl:h-[200px] flex 1xl:flex-col items-center justify-center border gap-y-[25px] gradiente_testimonio rounded-3xl mx-auto w-full sm:gap-x-[50px] gap-x-[15px]"
              >
                <img
                  src={icono_02}
                  className="block w-[40px] h-[38px] sm:w-[82px] sm:h-[80px] 1xl:w-[59px] 1xl:h-[60px] 4xl:w-[79px] 4xl:h-[80px]"
                  alt="icono_01"
                />
                <p className="text-white font-bold w-[187px] sm:w-[250px] 1xl:w-[291px] 4xl:w-[400px] 1xl:text-center">
                  Comprender qué se ha estudiado previamente y qué enfoques se
                  han utilizado.
                </p>
              </div>
              <div
                data-aos="flip-left"
                className="mn:w-[315px] h-[150px] sm:w-[500px] sm:h-[200px] lg:w-[600px] lg:h-[200px] 4xl:w-[460px] 4xl:h-[250px] 1xl:w-[400px] 1xl:h-[200px] flex 1xl:flex-col items-center justify-center border gap-y-[25px] gradiente_testimonio rounded-3xl mx-auto w-full sm:gap-x-[50px] gap-x-[15px]"
              >
                <img
                  src={icono_03}
                  className="block w-[40px] h-[40px] sm:w-[79px] sm:h-[80px] 1xl:w-[59px] 1xl:h-[60px] 4xl:w-[79px] 4xl:h-[80px]"
                  alt="icono_01"
                />
                <p className="text-white font-bold w-[180px] sm:w-[250px] 1xl:w-[327px] 4xl:w-[400px] 1xl:text-center">
                  Asegurarte de que tu tema no esté saturado y que haya espacio
                  para nuevas contribuciones.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[95%] mx-auto mn:mx-auto mn:w-[334px] sm:w-[520px] lg:w-[690px] 1xl:w-[1129px] 4xl:w-[1207px] font-semibold space-y-[50px] mn:ml-[18px] sm:ml-[40px] lg:ml-[80px]">
            <div>
              <h3
                data-aos="fade-up"
                className="text-start text-[#0CB2D5] uppercase mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px]"
              >
                Considera la Viabilidad del Tema
              </h3>
              <p
                data-aos="fade-up"
                className="text-white mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px] 1xl:w-[782px] 4xl:w-[1207px]"
              >
                Es importante asegurarte de que el tema elegido sea viable.
                Reflexiona sobre:
              </p>
            </div>
            <div className="text-white space-y-[30px] mn:w-[333px] sm:w-[465px] lg:w-[590px] 1xl:w-[989px] 4xl:w-[1080px] mx-auto mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px]">
              <p
                data-aos="fade-up"
                className="arrow_list_metodologia_investigacion mn:w-[295px] sm:w-[425px] mx-auto lg:w-[550px] 1xl:w-[775px] 4xl:w-auto"
              >
                <span className="text-[#0CB2D5]">Recursos Disponibles:</span>{" "}
                ¿Tienes acceso a la información, datos o herramientas necesarias
                para investigar este tema?
              </p>
              <p
                data-aos="fade-up"
                className="arrow_list_metodologia_investigacion mn:w-[295px] sm:w-[425px] mx-auto lg:w-[550px] 1xl:w-auto 4xl:w-auto"
              >
                <span className="text-[#0CB2D5]">Tiempo: </span>
                ¿Es realista completar la investigación dentro del plazo
                establecido?
              </p>
              <p
                data-aos="fade-up"
                className="arrow_list_metodologia_investigacion mn:w-[295px] sm:w-[425px] mx-auto lg:w-[550px] 1xl:w-[970px] 4xl:w-auto"
              >
                <span className="text-[#0CB2D5]">Alcance:</span> Asegúrate de
                que el tema no sea demasiado amplio o demasiado específico; debe
                ser manejable dentro del marco de tu tesis.
              </p>
            </div>
          </div>

          <div className="w-[95%] mx-auto mn:mx-0 mn:w-[332px] sm:w-[477px] lg:w-[586px] 1xl:w-[962px] 4xl:w-[1137px] space-y-[50px] font-semibold mn:ml-[18px] sm:ml-[40px] lg:ml-[80px]">
            <h3
              data-aos="fade-up"
              className="text-[#0CB2D5] uppercase mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px]"
            >
              Define una Pregunta de Investigación Clara
            </h3>
            <div className="h-[170px] sm:h-[228px] lg:h-[277px] 1xl:h-[193px] 4xl:h-[288px] flex">
              <div className="w-[5px] bg-[#0CB2D5] h-full"></div>
              <div className="text-white space-y-[30px] leading-tight pl-[30px] mn:text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[35px] 1xl:text-[25px]">
                <p
                  data-aos="fade-up"
                  className="arrow_list_blog_tesis mn:w-auto sm:w-[369px] lg:w-[457px] 1xl:w-[777px] 4xl:w-auto"
                >
                  <span className="text-[#0CB2D5]">Concisa:</span> Debe expresar
                  claramente lo que deseas investigar.
                </p>
                <p
                  data-aos="fade-up"
                  className="arrow_list_blog_tesis mn:w-auto sm:w-auto lg:w-auto  4xl:w-auto"
                >
                  <span className="text-[#0CB2D5]">Relevante:</span>
                  Debe abordar un problema significativo dentro de tu campo.
                </p>
                <p
                  data-aos="fade-up"
                  className="arrow_list_blog_tesis mn:w-auto sm:w-auto lg:w-auto 4xl:w-auto"
                >
                  <span className="text-[#0CB2D5]">Investigable:</span>
                  Asegúrate de que puedas responderla mediante métodos de
                  investigación adecuados.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[95%] mn:w-[344px] sm:w-[515px] lg:w-[675px] 1xl:w-[891px] 4xl:w-[1205px] mx-auto space-y-[50px] sm:space-y-[100px] 4xl:space-y-[150px]">
            <div className="text-white space-y-[25px] font-semibold text-center leading-tight mn:text-[14px] sm:text-[20px] lg:text-[25px] 1xl:text-[25px] 4xl:text-[35px]">
              <p data-aos="fade-up">
                Elegir el tema perfecto para tu tesis requiere tiempo y
                reflexión. Con las estrategias adecuadas, puedes encontrar un
                tema que te apasione y contribuya al conocimiento en tu campo.{" "}
              </p>
              <p data-aos="fade-up">
                En Alejandría, te ofrecemos asesoría personalizada y podemos
                recomendarte hasta tres temas para tu tesis, asegurando que se
                ajusten a tus intereses y objetivos académicos.
              </p>
            </div>
            <p
              data-aos="fade-up"
              className="text-[#0CB2D5] text-center font-extrabold mn:text-[18px] sm:text-[25px] lg:text-[30px] 1xl:text-[30px] 4xl:text-[35px]"
            >
              ¡Buena suerte en esta emocionante etapa de tu carrera!
            </p>
          </div>
        </section>
      </main>
    </LayoutBlogOptions>
  );
};

export default BlogTesis;
