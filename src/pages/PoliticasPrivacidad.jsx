import React from "react";

const PoliticasPrivacidad = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 md:p-12">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Política de Privacidad
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Última actualización: Noviembre 2025
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          En <strong>Alejandría Consultora</strong>, valoramos la confianza que depositas en nosotros. 
          Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos 
          personales cuando utilizas nuestra aplicación e Intranet para tesistas.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          1. Información que recopilamos
        </h2>
        <ul className="list-disc ml-6 text-gray-700 leading-relaxed mb-4">
          <li>Datos de contacto: nombre, correo electrónico, teléfono.</li>
          <li>Datos académicos: carrera, universidad, nivel académico.</li>
          <li>Datos de acceso: IP, tipo de dispositivo, navegador.</li>
          <li>Datos de uso de la app para mejorar la experiencia de usuario.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          2. Uso de la información
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Utilizamos tus datos exclusivamente para fines relacionados con la asesoría académica, 
          la comunicación con nuestros clientes, la mejora del servicio y análisis internos.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          3. Herramientas de terceros
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Podemos usar herramientas de medición como el TikTok Pixel, Google Analytics 
          u otros servicios que recopilan datos de navegación para mejorar nuestro rendimiento 
          y campañas. Estos datos no incluyen información sensible.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          4. Protección de la información
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Implementamos medidas de seguridad técnicas y organizativas para proteger tu información 
          contra accesos no autorizados.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          5. Derechos del usuario
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Puedes solicitar la actualización, eliminación o acceso a tus datos enviando un correo a:  
          <span className="font-semibold"> info@alejandriaconsultora.com</span>
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          6. Cambios en esta política
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nos reservamos el derecho de actualizar esta Política para reflejar cambios legislativos o 
          mejoras del servicio. Todas las actualizaciones se publicarán en esta misma página.
        </p>

        <p className="text-center text-gray-600 mt-12">
          © {new Date().getFullYear()} Alejandría Consultora — Todos los derechos reservados.
        </p>

      </div>
    </div>
  );
};

export default PoliticasPrivacidad;
