import LayoutApp from "../layout/LayoutApp";
import backgroundBlog from "../assets/images/blog/blog_background.webp";
import backgroundMetodologia from "../assets/images/banners/backgroundMetodologia.webp";
import backgroundRevista from "../assets/images/banners/blogRevistaBackground.webp";
import backgroundArticulo from "../assets/images/banners/blogArticuloBackground.webp";
import backgroundTesis from "../assets/images/banners/blogTesisBackground.webp";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <LayoutApp>
      <main className="overflow-hidden">
        <div
          className={`h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative`}
        >
          <div className="main_background_02 absolute top-0 z-10 h-full w-full"></div>
          <img
            src={backgroundBlog}
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
              Nuestras últimas novedades en
              <span className="block font-bold text-[13px] sm:text-[22px] lg:text-[30px] 1xl:text-[50px] 4xl:text-[60px]">
                investigación, tecnología y negocios.
              </span>
            </p>
          </div>
        </div>
        <section className="bg_gradient_main pt-[209px] pb-[100px] sm:pb-[250px] lg:pb-[123px] 1xl:pb-[550px] 4xl:pb-[500px]">
          <div className="grid 1xl:grid-cols-2 1xl:gap-x-[150px] 4xl:gap-x-[200px] gap-y-[50px] sm:gap-y-[150px] lg:gap-y-[200px] 1xl:gap-y-[250px] 4xl:gap-y-[150px] w-[250px] sm:w-[450px] lg:w-[565px] 1xl:w-[1280px] 4xl:w-[1460px] mx-auto">
            <div
              data-aos="fade-down-right"
              className="blog_grandient sm:w-[450px] lg:w-[565px] 1xl:w-[565px] 4xl:w-[630px] h-[300px] sm:h-[600px] lg:h-[651px] 1xl:h-[651px] 4xl:h-[710px] flex flex-col items-center justify-center 4xl:gap-y-[50px] gap-y-[20px] sm:gap-y-[50px] sm:rounded-[35px] lg:p-[60px] 1xl:p-0 rounded-[10px] bg-red-200"
            >
              <img
                loading="lazy"
                className="block w-[207px] h-[150px] sm:w-[400px] sm:h-[280px] lg:w-[435px] lg:h-[316px] 4xl:w-[510px] 4xl:h-[370px] rounded-[10px] sm:rounded-[35px]"
                src={backgroundMetodologia}
                alt="backgroundMetodologia"
              />
              <div className="text-white w-[205px] sm:w-[395px] lg:w-[395px] 1xl:w-[435px] 4xl:w-[510px] space-y-[10px] sm:space-y-[25px] 1xl:space-y-[25px] 4xl:space-y-[25px] lg:self-start 1xl:self-auto">
                <h2 className="text-[12px] sm:text-[20px] 4xl:text-[25px] font-extrabold">
                  Metodología de la Investigación
                </h2>
                <p className="text-[10px] sm:text-[18px] 1xl:w-[395px] 4xl:w-[466px]  4xl:text-[20px] font-semibold sm:leading-[25px] leading-tight">
                  La metodología de la investigación es un componente esencial
                  en el desarrollo de cualquier proyecto académico.
                </p>
                <Link
                  to={"/blog/metodologia-investigacion"}
                  className="text-[10px] sm:text-[20px] lg:text-[20px] 1xl:text-[20px] 4xl:text-[25px] block font-semibold underline"
                >
                  Leer más
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-down-left"
              className="blog_grandient sm:w-[450px] lg:w-[565px] 1xl:w-[565px] 4xl:w-[630px] h-[300px] sm:h-[600px] lg:h-[651px] 1xl:h-[651px] 4xl:h-[710px] flex flex-col items-center justify-center 4xl:gap-y-[50px] gap-y-[20px] sm:gap-y-[50px] sm:rounded-[35px] lg:p-[60px] 1xl:p-0 rounded-[10px]"
            >
              <img
                loading="lazy"
                className="block w-[207px] h-[150px] sm:w-[400px] sm:h-[280px] lg:w-[435px] lg:h-[316px] 4xl:w-[510px] 4xl:h-[370px] rounded-[10px] sm:rounded-[35px]"
                src={backgroundRevista}
                alt="background-revistasDepredadoras"
              />
              <div className="text-white w-[205px] sm:w-[395px] lg:w-[395px] 1xl:w-[435px] 4xl:w-[510px] space-y-[10px] sm:space-y-[25px] 1xl:space-y-[25px] 4xl:space-y-[25px] lg:self-start 1xl:self-auto">
                <h2 className="text-[12px] sm:text-[20px] 4xl:text-[25px] font-extrabold">
                  Revistas depredadoras
                </h2>
                <p className="text-[10px] sm:text-[18px] 1xl:w-[395px] 4xl:w-[466px]  4xl:text-[20px] font-semibold sm:leading-[25px] leading-tight">
                  Las revistas depredadoras son aquellas que se dedican a
                  publicar artículos científicos sin seguir un proceso riguroso.
                </p>
                <Link
                  to={"/blog/revistas-depredadoras"}
                  className="text-[10px] sm:text-[20px] lg:text-[20px] 1xl:text-[20px] 4xl:text-[25px] block font-semibold underline"
                >
                  Leer más
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up-right"
              className="blog_grandient sm:w-[450px] lg:w-[565px] 1xl:w-[565px] 4xl:w-[630px] h-[300px] sm:h-[600px] lg:h-[651px] 1xl:h-[651px] 4xl:h-[710px] flex flex-col items-center justify-center 4xl:gap-y-[50px] gap-y-[20px] sm:gap-y-[50px] sm:rounded-[35px] lg:p-[60px] 1xl:p-0 rounded-[10px]"
            >
              <img
                loading="lazy"
                className="block w-[207px] h-[150px] sm:w-[400px] sm:h-[280px] lg:w-[435px] lg:h-[316px] 4xl:w-[510px] 4xl:h-[370px] rounded-[10px] sm:rounded-[35px]"
                src={backgroundTesis}
                alt="background-tesis"
              />
              <div className="text-white w-[205px] sm:w-[395px] lg:w-[395px] 1xl:w-[435px] 4xl:w-[510px] space-y-[10px] sm:space-y-[25px] 1xl:space-y-[25px] 4xl:space-y-[25px] lg:self-start 1xl:self-auto">
                <h2 className="text-[12px] sm:text-[20px] 4xl:text-[25px] font-extrabold">
                  El tema perfecto para tu tesis
                </h2>
                <p className="text-[10px] sm:text-[18px] 1xl:w-[395px] 4xl:w-[466px]  4xl:text-[20px] font-semibold sm:leading-[25px] leading-tight">
                  Un buen tema no solo te motivará durante el proceso de
                  investigación, sino que también puede influir en el impacto y
                  la relevancia de tu trabajo.
                </p>
                <Link
                  to={"/blog/tesis"}
                  className="text-[10px] sm:text-[20px] lg:text-[20px] 1xl:text-[20px] 4xl:text-[25px] block font-semibold underline"
                >
                  Leer más
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="blog_grandient sm:w-[450px] lg:w-[565px] 1xl:w-[565px] 4xl:w-[630px] h-[300px] sm:h-[600px] lg:h-[651px] 1xl:h-[651px] 4xl:h-[710px] flex flex-col items-center justify-center 4xl:gap-y-[50px] gap-y-[20px] sm:gap-y-[50px] sm:rounded-[35px] lg:p-[60px] 1xl:p-0 rounded-[10px]"
            >
              <img
                loading="lazy"
                className="block w-[207px] h-[150px] sm:w-[400px] sm:h-[280px] lg:w-[435px] lg:h-[316px] 4xl:w-[510px] 4xl:h-[370px] rounded-[10px] sm:rounded-[35px]"
                src={backgroundArticulo}
                alt="background-articulo"
              />
              <div className="text-white w-[205px] sm:w-[395px] lg:w-[395px] 1xl:w-[435px] 4xl:w-[510px] space-y-[10px] sm:space-y-[25px] 1xl:space-y-[25px] 4xl:space-y-[25px] lg:self-start 1xl:self-auto">
                <h2 className="text-[12px] sm:text-[20px] 4xl:text-[25px] font-extrabold">
                  Publica un artículo académico
                </h2>
                <p className="text-[10px] sm:text-[18px] 1xl:w-[395px] 4xl:w-[466px]  4xl:text-[20px] font-semibold sm:leading-[25px] leading-tight">
                  Publicar un artículo académico es un hito importante en la
                  carrera de cualquier investigador.
                </p>
                <Link
                  to={"/blog/Articulo"}
                  className="text-[10px] sm:text-[20px] lg:text-[20px] 1xl:text-[20px] 4xl:text-[25px] block font-semibold underline"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutApp>
  );
};

export default Blog;
