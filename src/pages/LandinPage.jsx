import LayoutApp from "../layout/LayoutApp";
// ICONOS
import tesis from "../assets/images/tesistaBible/tesisimg.png"
import testimonioOne from "../assets/images/tesistaBible/testimonio1.png"
import testimonioTwo from "../assets/images/tesistaBible/testimonio2.png"
import testimonioTree from "../assets/images/tesistaBible/testimonio3.png"
import garantia from "../assets/images/tesistaBible/GarantiaDorado.png"
import hotmart2 from "../assets/images/tesistaBible/hotmart2.png"
import oferta from "../assets/images/tesistaBible/descPromo.png"
// IMAGES
import capa_04 from "../assets/images/capa_04.png";



const LandinPage = () => {
  return (
    <LayoutApp>
      <main className="overflow-hidden ">
        <section className='h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative'>
          <div className="bg-[#1C1C34]  text-white   z-10 h-full w-full flex justify-center  ">
            <div className="text-center  absolute top-32 mn:top-40 sm:top-52 px-7 3xl:w-[1400px]">
              <p className="text-[13px] uppercase mb-[15px] sm:text-[25px] lg:text-[30px] xl:text-[40px] 1xl:text-[50px] 4xl:text-[55px] font-extrabold">
                La <span className="text-[#0CB2D5]">claridad</span>  que necesitas para avanzar con tu <span className="text-[#0CB2D5]">tesis</span>
              </p>
              <p className="text-[9px] uppercase mb-[20px] sm:text-[22px] lg:text-[28px] xl:text-[32px] 1xl:text-[39px]  font-semibold italic">
                Contamos con +5000 aprobados en 11 años de experiencia
              </p>
              <p className="text-[9px] sm:text-[13px] md:text-[15px] xl:text-[21px] 3xl:text-[25px]">📌<span className="font-semibold">Mira este video hasta el final</span>  y descubre los recursos que ofrecemos para ayudarte en tu tesis</p>
            </div>
            <div className="bg-white absolute top-[220px] mn:top-[240px] sm:top-[350px] lg:top-[370px] xl:top-[380px] 1xl:top-[500px]
             w-[250px] mn:w-[290px] sm:w-[480px] md:w-[650px] xl:w-[900px] 1xl:w-[1250px] h-[140px] mn:h-[180px] sm:h-[320px] md:h-[390px]
              xl:h-[520px] 1xl:h-[690px]">
            </div>

            <div className="absolute top-[400px] mn:top-[440px] sm:top-[700px] md:top-[800px] xl:top-[970px] 1xl:top-[1300px] w-full px-3">
              <button
                data-aos="fade-up"
                data-aos-offset="300"
                className="  italic  text-[14px] sm:text-[20px] lg:text-[30px] block text-white font-extrabold uppercase bg-[#FCB400] rounded-full w-full mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] lg:w-[720px] lg:h-[80px] 4xl:w-[800px] 4xl:h-[100px] mx-auto"
              >
                accede a la oferta ahora
              </button>
            </div>


            <div className="absolute top-[470px] mn:top-[510px] sm:top-[800px] md:top-[900px] xl:top-[1100px] 1xl:top-[1430px] ">

              <div className="flex w-full justify-center gap-9 text-[30px] sm:text-[40px] md:text-[60px] 3xl:text-[90px] font-bold">
                <div className="flex flex-col items-center  w-[50px] mn:w-[120px]">
                  <p >00</p>
                  <p className="text-[10px] sm:text-[15px] md:text-[20px] 3xl:text-[25px] font-normal text-center">Hora</p>
                </div>
                <div className="flex flex-col items-center w-[50px] mn:w-[120px]">
                  <p >00</p>
                  <p className="text-[10px] sm:text-[15px] md:text-[20px] 3xl:text-[25px] font-normal text-center">Minutos</p>
                </div>
                <div className="flex flex-col items-center  w-[50px] mn:w-[120px]">
                  <p >00</p>
                  <p className="text-[10px] sm:text-[15px] md:text-[20px] 3xl:text-[25px] font-normal text-center">Segundos</p>
                </div>
              </div>

              <p className="text-[9px] sm:text-[13px] md:text-[15px] xl:text-[21px] 3xl:text-[25px] mt-5 xl:mt-14 italic px-3 text-center">“No sabía por dónde empezar. Con la Biblia del Tesista avancé más en una semana que en tres meses.”
                — Camila R.</p>

            </div>

          </div>

        </section>

        <section >
          <div className="bg-[#1C1C34] pt-[93px] mn:pt-[133px] sm:pt-[440px] md:pt-[300px] xl:pt-[600px]">

            <div className="mb-20 w-[98%] mn:w-[339px] h-[373px] sm:w-[520px] md:w-full md:px-10  lg:w-[880px] xl:w-[1250px] 1xl:w-[1241px] 3xl:w-[1569px] sm:h-[563px] lg:h-[600px] 1xl:h-[402px] 4xl:h-[444px] 1xl:items-center flex flex-col  mx-auto  1xl:gap-x-[50px] gap-y-[20px]">

              <p className="text-white font-semibold text-[14px] sm:text-[30px] lg:text-[38px] xl:text-[45px] 3xl:text-[50px] text-center">
                Te damos las herramientas para dejar el caos atrás y avanzar con seguridad
              </p>

              <div className="flex flex-col text-white gap-5 xl:flex-row">

                <div className="w-full flex justify-center">
                  <img className="w-[200px] mn:w-[220px] sm:w-[400px] md:w-[450px] 3xl:w-[600px] h-[250px]  mn:h-[270px] sm:h-[500px] md:h-[600px] 3xl:h-[800px]"
                    src={tesis} alt=""
                  />
                </div>
                <div className="flex flex-col lg:gap-10 lg:justify-center">
                  <div className="px-5 3xl:w-[800px] ">
                    <div className="flex flex-col  xl:items-start 3xl:gap-5">
                      <p className="text-[18px] sm:text-[30px] md:text-[42px] 3xl:text-[50px] text-center">La Bilbia del Tesista</p>
                      <p className="text-center sm:text-[20px] md:text-[25px] xl:text-[33px] 3xl:text-[38px]">Un <spam className="text-[#0CB2D5] ">faro</spam>  para tu camino académico</p>
                    </div>
                    <div className="mt-7 font-medium text-[10px] mn:text-[12px] sm:text-[18px] md:text-[20px] lg:text-[25px] 3xl:text-[27px]">
                      <p>- Explicación simple de todos los capítulos de la tesis</p> <br></br>
                      <p className="textfinal">- Plantillas editables, ejemplos reales y ejercicios prácticos</p> <br></br>
                      <p className="textfinal">- Estrategias para elegir el tema, redactar sin bloqueo y organizar tus ideas</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative w-[200px] sm:w-[400px]  1xl:w-auto 1xl:h-auto mx-auto 1xl:mx-0]">
                    <img
                      src={capa_04}
                      className="block 1xl:hidden absolute  w-[250px] sm:w-[400px] -translate-y-1/2 z-10"
                      alt="capa_02"
                    />
                  </div>
                  <button
                    data-aos="fade-up"
                    data-aos-offset="300"
                    className=" text-[14px] sm:text-[20px] lg:text-[30px] block mt-4 text-white font-extrabold uppercase bg-[#FCB400] rounded-full w-full mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] lg:w-[720px] lg:h-[80px] 4xl:w-[800px] 4xl:h-[100px] mx-auto"
                  >
                    compre aqui
                  </button>
                </div>

              </div>

              <div className="flex flex-col text-white px-5  font-medium sm:text-[16px] md:text-[20px] xl:flex-row xl:items-end xl:text-[25px] ">
                <div>
                  <p className="text-[#0CB2D5]">Incluye:</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam>  Cap. I: Términos Básicos</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam>   Cap. II: Estructura de la Tesis</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam>  Cap. III: Problema de Investigación</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam>  Cap. IV: Título para una Investigación</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam>  Cap. V: Matrices de Consistencia y Operacionalización</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam>  Cap. VI: Redacción de la Introducción</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam>  Cap. VII: Planteamiento del problema</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam>  Cap. VIII: Marco Teórico </p> <br></br>
                </div>
                <div>
                  <p><spam className="text-[#464646]">✔</spam> Cap. IX: Recopilación de Información</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam> Cap. X: Metodología</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam> Cap. XI: Aspecto Administrativo</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam> Cap. XII: Resultados</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam> Cap. XIII: Prueba Estadística</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam> Cap. XIV: Discusión, Conclusión y Recomendación</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam> Cap. XV: Tipos de Matrices según Diseño</p> <br></br>
                  <p><spam className="text-[#464646]">✔</spam> Cap. XVI: Tips para realizar el Parafraseo</p> <br></br>
                </div>
              </div>

            </div>



            {/*  */}
            <div className="digital pt-[100px] pb-[2px]  1xl:pb-[50px] mt-[800px] sm:mt-[1060px] md:mt-[1300px] xl:mt-[700px] 1xl:mt-[1000px]">

              <div className="space-y-[47px] 1xl:space-y-[90px] w-[95%] mn:w-auto mx-auto ">
                <h3
                  data-aos="fade-up"
                  className="font-bold text-[18px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[50px]  mn:w-[340px] sm:w-[564px] lg:w-[649px] xl:w-[900px] 1xl:w-[1051px] 4xl:w-[1402px] mx-auto 4xl:text-[40px]  text-center"
                >
                  ¿Qué ganas con este libro digital?
                </h3>

                <div className="font-bold px-10   sm:text-[16px] md:text-[20px] xl:text-[28px] md:px-16 xl:px-20 1xl:px-44">
                  <p><spam className="text-[#272742] italic">✔ Tranquilidad mental:</spam> vas a entender lo que tienes que hacer</p> <br />
                  <p><spam className="text-[#272742] italic">✔ Confianza académica:</spam> sabrás cómo plantear bien tu tema y objetivos</p> <br />
                  <p><spam className="text-[#272742] italic">✔ Sensación de avance:</spam> dejas de procrastinar y comienzas a avanzar en serio</p>
                </div>

                <button
                  data-aos="fade-up"
                  className="italic uppercase text-white bg-[#FCB400] font-extrabold w-full  mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] sm:text-[18px] lg:w-[825px] lg:h-[80px] 4xl:h-[100px] 4xl:w-[913px] text-[11px] lg:text-[25px] 1xl:text-[30px] rounded-full mx-auto block"
                >
                  LO QUIERO AHORA
                </button>
              </div>

              <div className="mx-auto text-center mt-[50px] sm:mt-[120px] lg:mt-[250px] mb-[50px]">

                <p
                  data-aos="fade-up"
                  className="uppercase italic font-extrabold mx-auto w-[235px] sm:w-[480px] lg:w-[700px] 1xl:w-[615px] 4xl:w-[850px] text-[20px] mn:text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 4xl:text-[45px]"
                >
                  TESTIMONIOS
                </p>

                <div className="flex flex-col items-center justify-center mx-5 mt-5 xl:mt-20 gap-4 xl:flex-row">
                  <div className="testi p-2  sm:w-[456px]">
                    <img className="rounded-[20px]" src={testimonioOne} alt="" />
                  </div>
                  <div className="testi p-2 flex justify-center sm:w-[456px] ">
                    <img className="rounded-[20px]" src={testimonioTwo} alt="" />
                  </div>
                  <div className="testi p-2">
                    <img className="rounded-[20px] 1xl:w-[408px] " src={testimonioTree} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mx-5 justify-center items-center sm:mt-32 xl:flex-row-reverse xl:px-32 ">
                <div className="flex flex-col gap-4 xl:gap-8 text-center xl:text-start font-semibold sm:text-[17px] md:text-[20px] xl:text-[29px] mb-8 md:px-5">
                  <h2 className="text-[18px] sm:text-[25px] md:text-[35px] xl:text-[44px] font-bold "><spam className="text-[#FCB400]">Garantía </spam>
                    de satisfacción 7 días
                  </h2>
                  <p className="">Si el producto no te ayuda como prometemos, te devolvemos el 100% de tu dinero.</p>
                  <p className="">Sin preguntas. Sin letra chica.</p>
                </div>
                <img className="w-[200px] xl:w-[300px]" src={garantia} alt="" />
              </div>

            </div>
            {/*  */}

            <div className="hotmart pb-[20px] xl:pt-[105px]">
              <div>
                <div>..</div>
                <div className="mb-[80px] text-white font-bold  space-y-10 w-[95%] mn:w-[340px] sm:w-[495px] md:w-[600px] lg:w-[720px] xl:w-[1200px] 1xl:w-[1300px]  5xl:w-[1500px] mx-auto mt-[50px] sm:mt-[100px] ">
                  <div className="xl:flex xl:mb-52">
                    <div className="mb-5 xl:flex xl:flex-col xl:gap-20 xl:justify-end">
                      <h2
                        data-aos="fade-up"
                        className=" text-center text-[16px] sm:text-[25px] lg:text-[30px] xl:text-[40px] 4xl:text-[35px]"
                      >
                        La oferta termina en...
                      </h2>
                      <div className="flex w-full justify-center gap-9 text-[30px] sm:text-[40px] md:text-[60px] xl:text-[85px] font-bold">
                        <div className="flex flex-col items-center w-[120px] ">
                          <p >00</p>
                          <p className="text-[10px] sm:text-[15px] md:text-[20px] xl:text-[25px] font-normal text-center">Hora</p>
                        </div>
                        <div className="flex flex-col items-center w-[120px] ">
                          <p >00</p>
                          <p className="text-[10px] sm:text-[15px] md:text-[20px] xl:text-[25px] font-normal text-center">Minutos</p>
                        </div>
                        <div className="flex flex-col items-center  w-[120px] ">
                          <p >00</p>
                          <p className="text-[10px] sm:text-[15px] md:text-[20px] xl:text-[25px] font-normal text-center">Segundos</p>
                        </div>
                      </div>
                      <p className="font-medium text-center sm:text-[17px] md:text-[20px] mt-10 xl:mt-1 xl:text-[27px] ">Por sólo <spam className="text-[#FCB400]">$30</spam> , accede al ebook digital que te da claridad, estructura y acompañamiento real en tu tesis.</p>

                    </div>

                    <div className="flex flex-col  justify-center items-center xl:w-[1570px] ">
                      <div className="fondo_promo w-full h-[180px] sm:h-[280px] md:h-[320px] lg:h-[380px] 4xl:h-[420px]  relative">
                        <img className="absolute w-28 sm:w-36 top-0 right-0 xl:w-48" src={oferta} alt="" />
                      </div>
                      <img className="w-[200px] sm:w-[300px] " src={hotmart2} alt="" />
                    </div>
                  </div>


                  {/* Parte Final */}
                    <h1 className="text-[15px] sm:text-[20px] md:text-[23px] xl:text-[40px] 1xl:text-[45px] 5xl:text-[50px] text-center leading-[35px] xl:leading-[85px]">Tu <spam className="text-[#0CB2D5]">tesis</spam> no tiene que ser una fuente de
                    <spam className="text-[#0CB2D5]"> ansiedad</spam>. Con la
                    <spam className="text-[#FCB400]"> Biblia del Tesista</spam>, vas a tener
                    <spam className="text-[#0CB2D5]"> claridad</spam>,<spam className="text-[#0CB2D5]"> estructura</spam> y <spam className="text-[#0CB2D5]">motivación</spam>.
                  </h1>
                  
                  <button
                    data-aos="fade-up"
                    className="bg-[#FCB400] block mx-auto text-[14px] sm:text-[20px] lg:text-[30px] 4xl:text-[30px] uppercase text-white font-extrabold italic rounded-full w-full mn:w-[340px] h-[40px] sm:w-[520px] sm:h-[60px] lg:w-[720px] lg:h-[80px] 4xl:w-[800px] 4xl:h-[100px]"
                  >
                    QUIERO LA BIBLIA DEL TESISTA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </LayoutApp>

  )
}

export default LandinPage