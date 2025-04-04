import { Link } from "react-router-dom";
import LayoutApp from "../layout/LayoutApp";
import backgroundPromocion from "../assets/images/banners/backgroundPromociones.webp"
import wow from "../assets/images/promociones/CyberWow.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ModalPromocion from "../components/ModalPromocion";


 const Promociones = () => {
    const [modalPromocion, setModalPromocion] = useState(false);
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          const section = document.getElementById("seccionObjetivo");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Espera 2 segundos antes de hacer scroll
    
        return () => clearTimeout(timer); // Limpia el timeout si el componente se desmonta
      }, []);


    const[formInputs, setFormInputs] = useState({
        nombre: "",
        carrera: "",
        universidad: "",
    });

    const handleChange = (event) => {
      setFormInputs((lastValues) => ({
        ...lastValues,
        [event.target.id]: event.target.value,
      }));
    };

    const handleForm = (event) =>{
      event.preventDefault();
      if (
        [
          formInputs.nombre.trim(),
          formInputs.carrera.trim(),
          formInputs.universidad.trim(),
          
        ].some((field) => field === "")
      ){
        alert("Ingrese todos los campos");
        return;
      }
      
      let mensaje = `Hola Soy *${formInputs.nombre}*, de la carrera de *${formInputs.carrera}* de la universidad *${formInputs.universidad}* y deseo adquirir la promoción del CYBERWOW`;
      const numero = "51922060146";

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    };

    return(
        <LayoutApp>
            <main className="overflow-hidden">
                <div className={`h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative`}>
                    <div className="main_background_02 absolute top-0 z-10 h-full w-full"></div>
                    
                    <img 
                       src={backgroundPromocion}
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
                            ¡Aprovecha Nuestros
                            <span className="block font-bold text-[13px] sm:text-[22px] lg:text-[30px] 1xl:text-[50px] 4xl:text-[60px]">
                            Descuentos y Promociones!
                            </span>
                        </p>
                    </div>
                </div>

        
                <section id="seccionObjetivo" className="bg_gradient_main pb-[263px]" >
                  <div data-aos="zoom-in" className="flex pb-[70px] pt-10 w-full justify-center text-white text-[22px] ">
                    <h2 className=" uppercase font-semibold text-[16px] sm:text-[30px] md:text-[38px]">CYBER WOW</h2>
                  </div>
                  
                  <div className=" lg:flex-row flex-col  flex justify-center items-center gap-[72px]">
                    
                     <div className="1xl:w-[600px] w-[80%] sm:w-[500px]">
                              <img
                               data-aos="zoom-in"
                               data-aos-duration="700"
                               onClick={() => setModalPromocion(true)}
                               src={wow} 
                               className="block"
                               alt="back_hero" 
                               draggable={false}
                               decoding="async"
                               />
                     </div>

                     <div className="1xl:w-[600px] w-[79%] sm:w-[500px]">
                          <form
                             data-aos="zoom-in"
                             data-aos-duration="700"
                             onSubmit={handleForm}
                             className="block w-full space-y-6"
                                >
                                  <input
                                    className="block w-full border  sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    required
                                    placeholder="Nombre"
                                    onChange={handleChange}
                                  />
                                  
                                  <input
                                    className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                                    type="text"
                                    name="carrera"
                                    id="carrera"
                                    required
                                    placeholder="Carreras"
                                    onChange={handleChange}
                                  />
                                  <input
                                    className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                                    type="text"
                                    name="universidad"
                                    id="universidad"
                                    required
                                    placeholder="Universidad"
                                    onChange={handleChange}
                                  />
                                  <input
                                    className="block w-full  border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                                    type="text"
                                    required
                                    placeholder="Whatsapp "
                                  />
                                  <button
                                    type="submit"
                                    className="block w-full  py-3 uppercase bg-[#0CB2D5] text-white font-bold mn:text-[22px] rounded-full"
                                  >
                                    ¡Quiero la Oferta!
                                  </button>
                          </form>
                     </div>
                          
                  </div>
                       
                </section>
                <ModalPromocion
                  activeModal = {modalPromocion}
                  setActiveModal = {setModalPromocion}
                />
            </main>
        </LayoutApp>
    )
 }

export default Promociones;
