import { useLocation } from "react-router-dom";
import LayoutApp from "../layout/LayoutApp";
import { useEffect, useState } from "react";

const LibroReclamasiones = () => {
  const { pathname } = useLocation();
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [values, setValues] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    tipo_documento: "dni",
    numero_documento: "",
    celular: "",
    departamento: "",
    provincia: "",
    direccion: "",
    tipo_queja: "queja",
    relacionado: "producto",
    descripcion: "",
    detalle_reclamo: "",
    pedido_cliente: "",
  });

  const handleChange = (event) => {
    setValues((lastValues) => ({
      ...lastValues,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://alejandriaconsultora.com/send_email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(values).toString(),
        }
      );

      const data = await response.json();
      setRespuesta(data.message);

      if (data.status === "success") {
        alert("Correo enviado exitosamente");
      } else {
        alert("Error al enviar el correo: " + data.message);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un error inesperado al enviar el formulario");
    }
    console.log(respuesta);
  };

  return (
    <LayoutApp>
      <div className="pt-[150px] bg-[#1c1c34]"></div>
      <div className="py-16">
        <div className="mb-[50px]">
          <h1 className="text-center font-bold uppercase text-4xl mt-10 before:">
            Alejandría
          </h1>
          <hr className="mx-auto w-[150px] h-[5px] bg-[#0CB2D5]" />
        </div>

        <div className="w-[90%] sm:w-[550px] lg:w-[850px] 1xl:w-[1140px] space-y-10  mx-auto">
          <div className="text-[15px]">
            <p>
              <span className="font-bold">RECLAMO</span>: Disconformidad
              relacionada a los productos o servicios.
            </p>
            <p>
              <span className="font-bold">QUEJA</span>: Disconformidad no
              relacionada a los productos o servicios; o, malestar o descontento
              respecto a la atención al público.
            </p>
            <hr className="my-[30px]" />
            <p>
              La formulación del reclamo no impide acudir a otras vías de
              solución de controversias ni de requisitos previos para interponer
              una denuncia ante el INDECOPI. El proveedor deberá dar respuesta
              al reclamo en un plazo no mayor a diez (10) días calendario,
              pudiendo ampliar el plazo hasta por treinta (30) días más, previa
              comunicación al consumidor.
            </p>
            <hr className="my-[15px]" />
            <p className="italic">
              (*) Datos Obligados Artículo 5 D.S. 006-2014-PCM
            </p>
          </div>
          {/*  */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2 text-sm">
                  <label htmlFor="nombre" className="font-medium">
                    Nombres
                  </label>
                  <input
                    type="text"
                    name="nombres"
                    id="nombres"
                    required
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2 text-sm">
                  <label htmlFor="apellidos" className="font-medium">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    id="apellidos"
                    required
                    onChange={handleChange}
                    placeholder="Apellidos"
                    className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2 text-sm">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2 text-sm">
                  <label htmlFor="tipo_documento" className="font-medium">
                    Seleccionar Tipo de Documentos
                  </label>
                  <select
                    name="tipo_documento"
                    id="tipo_documento"
                    required
                    onChange={handleChange}
                    className="block w-full p-2 border border-gray-400 rounded-md outline-none"
                    defaultValue={"dni"}
                  >
                    <option value="dni" defaultValue>
                      DNI
                    </option>
                    <option value="ruc">RUC</option>
                    <option value="ce">CE</option>
                    <option value="pasaporte">Pasaporte</option>
                  </select>
                </div>
                <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2 text-sm">
                  <label htmlFor="numero_documento" className="font-medium">
                    Indicar Número Documento
                  </label>
                  <input
                    type="number"
                    name="numero_documento"
                    id="numero_documento"
                    required
                    onChange={handleChange}
                    placeholder="Indicar Número Documento"
                    className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2 text-sm">
                  <label htmlFor="celular" className="font-medium">
                    Celular
                  </label>
                  <input
                    type="number"
                    name="celular"
                    id="celular"
                    required
                    onChange={handleChange}
                    placeholder="Celular"
                    className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2 text-sm">
                  <label htmlFor="departamento" className="font-medium">
                    Departamento
                  </label>
                  <input
                    type="text"
                    name="departamento"
                    id="departamento"
                    required
                    onChange={handleChange}
                    placeholder="Departamento"
                    className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2 text-sm">
                  <label htmlFor="provincia" className="font-medium">
                    Provincia
                  </label>
                  <input
                    type="text"
                    name="provincia"
                    id="provincia"
                    required
                    onChange={handleChange}
                    placeholder="Provincia"
                    className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2 text-sm">
                  <label htmlFor="direccion" className="font-medium">
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    required
                    onChange={handleChange}
                    placeholder="Dirección"
                    className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none"
                  />
                </div>
                <div className="col-span-full grid grid-cols-12 gap-4">
                  <div className="col-span-full space-y-1">
                    <p className="text-[15px]">
                      Al brindar mi correo electrónico, autorizo a que cualquier
                      comunicación respecto al reclamo se realice a través del
                      mismo.
                    </p>
                    <span className="block font-bold">DETALLE DEL RECLAMO</span>
                  </div>
                  <div className="mn:col-span-full sm:col-span-6 space-y-2 text-sm">
                    <label htmlFor="tipo_queja" className="font-medium">
                      Tipo
                    </label>
                    <select
                      name="tipo_queja"
                      id="tipo_queja"
                      required
                      onChange={handleChange}
                      defaultValue="queja"
                      className="block w-full p-2 border border-gray-400 rounded-md outline-none"
                    >
                      <option value="queja">Queja</option>
                      <option value="reclamo">Reclamo</option>
                    </select>
                  </div>
                  <div className="mn:col-span-full sm:col-span-6 space-y-2 text-sm">
                    <label
                      htmlFor="relacionado"
                      className="font-medium text-sm"
                    >
                      Relacionado a:
                    </label>
                    <select
                      name="relacionado"
                      id="relacionado"
                      required
                      onChange={handleChange}
                      defaultValue={"producto"}
                      className="block w-full p-2 border border-gray-400 rounded-md outline-none"
                    >
                      <option value="producto" defaultValue>
                        Producto
                      </option>
                      <option value="servicio">Servicio</option>
                    </select>
                  </div>
                  <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2">
                    <label
                      htmlFor="descripcion"
                      required
                      onChange={handleChange}
                      className="block font-medium text-sm mb-9 lg:mb-0"
                    >
                      Descripción del producto o servicio:
                    </label>
                    <textarea
                      name="descripcion"
                      id="descripcion"
                      className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none text-sm"
                      draggable="false"
                      required
                      onChange={handleChange}
                      placeholder="Descripción del producto o servicio:"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-span-12 sm:col-span-6 1xl:col-span-4 space-y-2">
                    <label
                      htmlFor="detalle_reclamo"
                      className="font-medium text-sm"
                    >
                      Detalle del Reclamo / Queja, según indica el cliente:
                    </label>
                    <textarea
                      name="detalle_reclamo"
                      id="detalle_reclamo"
                      className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none text-sm"
                      draggable="false"
                      required
                      onChange={handleChange}
                      placeholder="Detalle del Reclamo / Queja, según indica el cliente:"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-span-12 1xl:col-span-4 space-y-2">
                    <label
                      htmlFor="pedido_cliente"
                      className="font-medium text-sm"
                    >
                      Pedido del cliente:
                    </label>
                    <textarea
                      name="pedido_cliente"
                      id="pedido_cliente"
                      className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none text-sm"
                      draggable="false"
                      required
                      onChange={handleChange}
                      placeholder="Pedido del cliente:"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-span-12 space-y-2 text-sm">
                    <label htmlFor="fecha_reclamo" className="font-medium">
                      Fecha de reclamo / queja
                    </label>
                    <input
                      type="date"
                      name="fecha_reclamo"
                      id="fecha_reclamo"
                      required
                      onChange={handleChange}
                      placeholder="Fecha de reclamo / queja"
                      className="w-full block placeholder:text-gray-400 border border-gray-400 rounded-md p-2 outline-none"
                    />
                  </div>
                </div>
              </div>
              <button className="block w-full text-center rounded-md py-2 bg-[#0CB2D5] text-white font-semibold mt-4">
                Enviar
              </button>
            </form>
          </div>
          {/*  */}
        </div>
      </div>
    </LayoutApp>
  );
};

export default LibroReclamasiones;
