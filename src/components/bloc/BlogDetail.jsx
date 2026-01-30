import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LayoutApp from "../../layout/LayoutApp";
import { getBlogById } from '../../components/bloc/blogsData';
import imagen1 from "../../assets/images/bloc/tesis-cover.png";

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const blogData = getBlogById(parseInt(id));
        if (blogData) {
            setBlog(blogData);
        }
        setLoading(false);
    }, [id]);

    const handleContact = () => {
        event.preventDefault(event);
        let mensaje = `Hola vengo de tu página web y deseo información de los servicios que brindan.`;
        const numero = "51989575820";

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    };



    if (loading) {
        return (
            <LayoutApp>
                <div className="min-h-screen bg-[#131b2f] flex items-center justify-center px-4">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
                        <div className="text-white text-lg">Cargando artículo...</div>
                    </div>
                </div>
            </LayoutApp>
        );
    }

    if (!blog) {
        return (
            <LayoutApp>
                <div className="min-h-screen bg-[#131b2f] flex items-center justify-center px-4">
                    <div className="text-white text-center max-w-md">
                        <svg className="w-16 h-16 mx-auto text-[#a1a1c2] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
                        <p className="text-[#a1a1c2] mb-6">El artículo que buscas no existe o ha sido eliminado.</p>
                        <button
                            onClick={() => navigate('/bloc')}
                            className="bg-white hover:bg-gray-200 text-[#1C1C34] px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto"
                        >
                            Volver al Blog
                        </button>
                    </div>
                </div>
            </LayoutApp>
        );
    }

    // Función para formatear el contenido con estilos
    const formatContent = (content) => {
        return content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
                // Título principal
                return <h2 key={index} className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-white">{paragraph.replace('# ', '')}</h2>;
            } else if (paragraph.startsWith('## ')) {
                // Subtítulo
                return <h3 key={index} className="text-xl sm:text-2xl font-bold mt-6 mb-3 text-white">{paragraph.replace('## ', '')}</h3>;
            } else if (paragraph.startsWith('### ')) {
                // Sub-subtítulo
                return <h4 key={index} className="text-lg sm:text-xl font-bold mt-4 mb-2 text-white">{paragraph.replace('### ', '')}</h4>;
            } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                // Títulos en negrita
                return <h3 key={index} className="text-lg sm:text-xl font-bold mt-6 mb-3 text-white">{paragraph.replace(/\*\*/g, '')}</h3>;
            } else if (paragraph.includes('**')) {
                // Texto con negrita dentro
                const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                return (
                    <p key={index} className="mb-4 text-[#a1a1c2] text-base sm:text-lg leading-relaxed">
                        {parts.map((part, i) =>
                            part.startsWith('**') && part.endsWith('**') ?
                                <strong key={i} className="text-white font-semibold">{part.replace(/\*\*/g, '')}</strong> :
                                part
                        )}
                    </p>
                );
            } else if (paragraph.trim().startsWith('-')) {
                // Lista
                return (
                    <div key={index} className="flex items-start mb-2">
                        <span className="text-white mr-2 mt-2">•</span>
                        <span className="text-[#a1a1c2] text-base sm:text-lg">{paragraph.replace('-', '')}</span>
                    </div>
                );
            } else if (paragraph.trim().startsWith('1.') || paragraph.trim().startsWith('2.') || paragraph.trim().startsWith('3.')) {
                // Lista numerada
                return (
                    <div key={index} className="flex items-start mb-2">
                        <span className="text-white mr-3 mt-2 font-semibold min-w-[20px]">{paragraph.split('.')[0]}.</span>
                        <span className="text-[#a1a1c2] text-base sm:text-lg">{paragraph.substring(paragraph.indexOf('.') + 1)}</span>
                    </div>
                );
            } else if (paragraph.trim() === '---') {
                // Separador
                return <hr key={index} className="my-8 border-[#31314a]" />;
            } else if (paragraph.trim() === '') {
                return <br key={index} />;
            } else {
                return <p key={index} className="mb-4 text-[#a1a1c2] text-base sm:text-lg leading-relaxed">{paragraph}</p>;
            }
        });
    };

    return (
        <LayoutApp>
            <main className="min-h-screen bg-[#131b2f]">
                {/* Fondo superior */}
                <div className="absolute top-[-180px] left-0 w-full h-[140px] bg-[#1C1C34]" />

                {/* Botón para volver */}
                <div className="pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-10">
                    <button
                        onClick={() => navigate('/bloc')}
                        className="flex items-center mb-6 text-white hover:text-blue-400 transition-colors group"
                    >
                        <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-sm sm:text-base">Volver al Blog</span>
                    </button>
                </div>

                {/* Contenido del blog */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 pb-10 sm:pb-16 lg:pb-20">
                    {/* Categoría */}
                    <div className='border border-[#31314a] w-fit rounded-lg px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-white mb-4'>
                        {blog.category}
                    </div>

                    {/* Título */}
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-4 sm:mb-6 leading-tight'>
                        {blog.title}
                    </h1>

                    {/* Fecha */}
                    <div className='text-[#a1a1c2] text-xs sm:text-sm mb-6 sm:mb-8'>
                        {new Date(blog.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>

                    {/* Imagen principal */}
                    <div className="mb-8 sm:mb-10 rounded-xl sm:rounded-2xl overflow-hidden">
                        <img
                            src={blog.image || imagen1}
                            className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                            alt={blog.title}
                        />
                    </div>

                    {/* Contenido */}
                    <div className="prose prose-invert max-w-none">
                        <div className="text-base sm:text-lg leading-relaxed">
                            {formatContent(blog.content)}
                        </div>
                    </div>

                    {/* Separador */}
                    <hr className="my-8 sm:my-12 border-[#31314a]" />

                    {/* CTA de Alejandría */}
                    <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[#1C1C34] rounded-xl sm:rounded-2xl border border-[#31314a]">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                            ¿Necesitas ayuda con tu investigación?
                        </h3>
                        <p className="text-[#a1a1c2] text-sm sm:text-base mb-4 sm:mb-6">
                            En <strong className="text-white">Alejandría Consultora</strong>, te acompañamos en cada paso de tu investigación, desde la planificación hasta la defensa final.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => handleContact()}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base text-center"
                            >
                                Contáctanos para una asesoría
                            </button>

                        </div>
                    </div>




                </div>
            </main>
        </LayoutApp>
    );
};

export default BlogDetail;