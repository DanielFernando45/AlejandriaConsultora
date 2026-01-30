import { useLocation } from "react-router-dom";
import LayoutApp from "../layout/LayoutApp";
import { useEffect, useState } from "react";

const Postulaciones = () => {
  const { pathname } = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    education: "",
    motivation: "",
    cv_filename: "",
    termsAccepted: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Validar tamaño máximo (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('El archivo es demasiado grande. Máximo 5MB.');
        event.target.value = '';
        return;
      }

      // Validar tipo de archivo
      const validTypes = ['application/pdf', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        alert('Formato de archivo no válido. Solo PDF, DOC o DOCX.');
        event.target.value = '';
        return;
      }

      setFormData(prev => ({
        ...prev,
        cv_filename: file.name
      }));
    }
  };

  const handleCheckboxChange = (event) => {
    setFormData(prev => ({
      ...prev,
      termsAccepted: event.target.checked
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.termsAccepted) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Preparar los datos para enviar al servidor PHP
      const formDataToSend = new FormData();

      // Agregar todos los campos del formulario
      formDataToSend.append('tipo_formulario', 'postulacion');
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('education', formData.education);
      formDataToSend.append('motivation', formData.motivation);
      formDataToSend.append('cv_filename', formData.cv_filename || 'No adjuntado');

      const response = await fetch(
        "https://alejandriaconsultora.com/send_email.php",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setSubmitStatus('success');
        // Resetear formulario
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          position: '',
          education: '',
          motivation: '',
          cv_filename: '',
          termsAccepted: false,
        });

        // Resetear el input de archivo
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
        alert("Error al enviar la postulación: " + data.message);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setSubmitStatus('error');
      alert("Ocurrió un error inesperado al enviar el formulario. Por favor, intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LayoutApp>
      <div className="pt-[150px] bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen">
        <div className="absolute top-0 left-0 w-full h-40 bg-gray-800/30" />

        <main className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Únete a Nuestro Equipo
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Somos una organización comprometida con la excelencia profesional y el crecimiento
            </p>
            <p className="text-gray-400">
              Completa el siguiente formulario para postular a nuestras vacantes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Sección de datos personales */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white border-b border-gray-700 pb-3">
                    Información Personal
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Ej: María González López"
                        className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="ejemplo@dominio.com"
                        className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+51 999 999 999"
                        className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Ciudad / País *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        placeholder="Ej: Lima, Perú"
                        className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Sección de información profesional */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white border-b border-gray-700 pb-3">
                    Información Profesional
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Puesto de interés *
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        placeholder="Ej: Desarrollador Frontend Senior"
                        className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nivel académico *
                      </label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="Bachillerato">Bachillerato</option>
                        <option value="Técnico">Técnico</option>
                        <option value="Licenciatura">Licenciatura</option>
                        <option value="Maestría">Maestría</option>
                        <option value="Doctorado">Doctorado</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Sección de documentos */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white border-b border-gray-700 pb-3">
                    Documentación
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Currículum Vitae (PDF) *
                    </label>
                    <input
                      type="file"
                      name="cv"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="block w-full text-sm text-gray-400
                        file:mr-4 file:py-3 file:px-4
                        file:rounded-lg file:border-0
                        file:bg-blue-700 file:text-white
                        hover:file:bg-blue-800
                        file:transition file:cursor-pointer"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Formatos aceptados: PDF, DOC, DOCX. Tamaño máximo: 5MB
                    </p>
                  </div>
                </div>

                {/* Sección de motivación */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white border-b border-gray-700 pb-3">
                    Carta de Motivación
                  </h3>

                  <div>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      placeholder="Describa por qué desea formar parte de nuestro equipo, sus experiencias relevantes y cómo puede contribuir a nuestros objetivos..."
                      rows={6}
                      className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                    />
                  </div>
                </div>

                {/* Términos y condiciones */}
                <div className="flex items-start space-x-3 p-4 bg-gray-900/50 rounded-lg">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 h-5 w-5 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-600 focus:ring-offset-gray-900"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    Autorizo el tratamiento de mis datos personales según la{' '}
                    <a href="/privacidad" className="text-blue-400 hover:text-blue-300 underline">
                      Política de Privacidad
                    </a>
                    . Acepto que mi información sea utilizada para fines de selección y contratación.
                  </label>
                </div>

                {/* Estado de envío */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-900/30 border border-green-700 rounded-lg">
                    <p className="text-green-400 font-medium">
                      ✓ Postulación enviada exitosamente. Revisaremos tu perfil y nos pondremos en contacto contigo.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg">
                    <p className="text-red-400 font-medium">
                      ✗ Hubo un error al enviar la postulación. Por favor, intente nuevamente.
                    </p>
                  </div>
                )}

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-300 ${isSubmitting
                      ? 'bg-blue-800 cursor-not-allowed'
                      : 'bg-blue-700 hover:bg-blue-600 active:transform active:scale-[0.98]'
                    } text-white shadow-lg`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Postulación'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </LayoutApp>
  );
};

export default Postulaciones;