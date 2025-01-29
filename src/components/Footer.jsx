import logo from "../assets/images/logo.png";
import facebook_icon from "../assets/icons/facebook_icon.png";
import instagram_icon from "../assets/icons/instagram_icon.png";
import linkedin_icon from "../assets/icons/linkedin_icon.png";
import tiktok_icon from "../assets/icons/tiktok_icon.png";
import yt_icon from "../assets/icons/yt_icon.png";
import libro_reclamaciones from "../assets/icons/libro_reclamaciones.png";
import icono_contacto_01 from "../assets/icons/icono-contacto_01.svg";
import icono_contacto_02 from "../assets/icons/icono-contacto_02.svg";
import icono_contacto_03 from "../assets/icons/icono-contacto_03.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C34] px-8 py-14 h-auto flex items-center justify-center">
      <div className="w-[1252px] h-auto gap-x-[60px] items-start flex flex-wrap lg:justify-center">
        {/* COL 1 */}
        <div className="flex flex-col justify-start space-y-[40px] sm:mb-[100px] mb-[100px]">
          <img
            src={logo}
            className="w-[180px] h-[50px] sm:h-[50px] lg:h-[50px]"
            alt="logo"
          />
          <div className="space-y-[20px]">
            <h2 className="uppercase text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[20px] font-semibold">
              Contáctanos
            </h2>
            <div className="space-y-[20px] font-semibold text-[14px] sm:text-[20px] lg:text-[16px]">
              <div className="text-white flex gap-x-4 items-center">
                <figure className="w-[22px] h-[24.64px]">
                  <img src={icono_contacto_01} alt="icono-telefono" />
                </figure>
                <p className="xl:text-[20px]">922 060 146</p>
              </div>
              <div className="text-white flex gap-x-4 items-end">
                <figure className="w-[22px] h-[24.64px]">
                  <img src={icono_contacto_02} alt="icono-telefono" />
                </figure>
                <p className="xl:text-[20px]">
                  clientes@alejandriaconsultora.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* COL 1 */}

        {/* COL 2 */}
        <div className="lg:w-[340px] 1xl:w-[393px] flex flex-col justify-between mb-[100px]">
          <h2 className="uppercase font-bold text-white text-[20px] sm:text-[25px] lg:text-[28px] mb-[10px]">
            Nuestras sedes
          </h2>
          <div className="space-y-4 lg:space-y-4 text-[14px] sm:text-[20px] lg:text-[16px]">
            <div className="text-white space-y-[20px]">
              <h3 className="uppercase text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[20px] font-semibold">
                Sede principal
              </h3>
              <div className="flex gap-x-[20px]">
                <figure className="w-[22px] h-[26.83px]">
                  <img
                    src={icono_contacto_03}
                    className="w-full h-full"
                    alt="icono-contacto"
                  />
                </figure>
                <p className="leading-[24.38px] font-semibold">
                  C. Enrique Villar 159, Ofic. 201 - Urb. Santa Beatriz, Lima
                </p>
              </div>
            </div>
            <div className="text-white space-y-[20px]">
              <h3 className="uppercase text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[20px] font-semibold">
                Sede Chiclayo
              </h3>
              <div className="flex gap-x-[20px]">
                <figure className="w-[22px] h-[26.83px]">
                  <img
                    src={icono_contacto_03}
                    className="w-full h-full"
                    alt="icono-ubicacion"
                  />
                </figure>
                <p className="text-[14px] xl:text-[20px] leading-[24.38px] font-semibold">
                  C. Torres Paz N° 280, Ofic. 206 2° piso - Edificio Consorcio
                  Romero
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* COL 2 */}

        {/* COL 3 */}
        <div className="flex flex-col items-center gap-y-2 mx-auto lg:w-[600px] 1xl:w-auto h-auto lg:h-[230px] sm:w-auto">
          <Link
            to={"/libro-de-reclamaciones"}
            className="max-w-[263px] h-[105.03px] max-h-[105.03px]"
          >
            <img
              src={libro_reclamaciones}
              className="w-full h-full"
              alt="libro_reclamaciones-icono"
            />
          </Link>

          <div className="w-[263px] space-y-[20px] flex  flex-col items-center">
            <h4 className="text-[#0CB2D5] text-[18px] mt-5 font-semibold sm:text-[25px] lg:text-[20px] 1xl:text-[18px] 4xl:text-[20px]">
              Síguenos
            </h4>
            <div className="flex justify-between gap-x-[20px]">
              <Link
                target="_blank"
                to={"https://www.facebook.com/alejandria.oficial1?locale=es_LA"}
              >
                <img
                  className="w-[36.78px] h-[36.78px]"
                  src={facebook_icon}
                  alt="fb-icono"
                />
              </Link>
              <Link
                to={"https://www.instagram.com/alejandria.oficial1/"}
                target="_blank"
              >
                <img
                  className="w-[36.78px] h-[36.78px]"
                  src={instagram_icon}
                  alt="fb-icono"
                />
              </Link>
              <Link
                target="_blank"
                to={"https://www.linkedin.com/company/alejandriaconsultora/"}
              >
                <img
                  className="w-[36.78px] h-[36.78px]"
                  src={linkedin_icon}
                  alt="fb-icono"
                />
              </Link>
              <Link
                target="_blank"
                to={"https://www.tiktok.com/@alejandria.oficial"}
              >
                <img
                  className="w-[36.78px] h-[36.78px]"
                  src={tiktok_icon}
                  alt="fb-icono"
                />
              </Link>
              <Link
                target="_blank"
                to={"https://www.youtube.com/@alejandriaoficial"}
              >
                <img
                  className="w-[36.78px] h-[36.78px]"
                  src={yt_icon}
                  alt="fb-icono"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* COL 3 */}
      </div>
    </footer>
  );
};

export default Footer;
