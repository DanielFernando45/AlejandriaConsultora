import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutApp from "../layout/LayoutApp";
import fondo from "../assets/images/bloc/fondo.jpg"
import { getAllBlogs, getAllCategories, searchBlogs, getBlogsByCategory } from '../components/bloc/blogsData';

const Bloc = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [searchTerm, setSearchTerm] = useState("");
    const [blogs, setBlogs] = useState(getAllBlogs());
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    
    const categories = ["ALL", ...getAllCategories()];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === "ALL") {
            setBlogs(getAllBlogs());
        } else {
            setBlogs(getBlogsByCategory(category));
        }
        setSearchTerm("");
        setShowMobileFilters(false); // Cerrar filtros en móvil al seleccionar
    };

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        
        if (term.trim() === "") {
            if (selectedCategory === "ALL") {
                setBlogs(getAllBlogs());
            } else {
                setBlogs(getBlogsByCategory(selectedCategory));
            }
        } else {
            const results = searchBlogs(term);
            setBlogs(results);
        }
    };

    const handleBlogClick = (id) => {
        navigate(`/bloc/${id}`);
    };

    const clearFilters = () => {
        setSelectedCategory("ALL");
        setSearchTerm("");
        setBlogs(getAllBlogs());
        setShowMobileFilters(false);
    };

    return (
        <LayoutApp>
            <main>
                <div className="relative min-h-screen bg-[#131b2f]">
                    {/* Fondo superior */}
                    <div className="absolute top-[-180px] left-0 w-full h-[140px] bg-[#1C1C34]" />
                    
                    {/* Hero Section */}
                    <div className='text-white px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold'>Alejandria Blog</h1>
                        <p className='text-[#a1a1c2] text-base sm:text-lg md:text-[20px] mt-2 sm:mt-3 max-w-3xl'>
                            Bienvenido al blog de Alejandria. Aquí encontrarás las últimas noticias, actualizaciones y artículos sobre nuestros servicios y la industria
                        </p>
                    </div>

                    {/* Hero Card */}
                    <div className="relative w-full max-w-[1620px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-xl sm:rounded-2xl lg:rounded-3xl mx-auto mt-6 sm:mt-8 lg:mt-10 overflow-hidden text-white px-4 sm:px-6 lg:px-10">
                        <img
                            src={fondo}
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Blog hero"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        
                        <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">
                            <div className='border border-[#31314a] w-fit px-3 py-1 sm:px-4 sm:py-1 rounded-lg text-xs sm:text-sm'>
                                GRADOS Y TITULOS
                            </div>
                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">
                                Cómo hacer tu tesis sin estrés: 5 pasos que usan los profesionales
                            </h1>
                            <p className="text-sm sm:text-base lg:text-[15px] max-w-2xl">
                                Descubre los 5 pasos profesionales para realizar tu tesis sin estrés y con éxito garantizado.
                            </p>
                        </div>
                    </div>

                    {/* Botón para filtros móvil */}
                    <div className='lg:hidden w-full px-4 sm:px-6 mt-6'>
                        <button
                            onClick={() => setShowMobileFilters(!showMobileFilters)}
                            className='flex items-center justify-between w-full bg-[#24244a] text-white p-4 rounded-lg'
                        >
                            <span className='font-semibold'>
                                {showMobileFilters ? 'Ocultar filtros' : 'Mostrar filtros'} 
                                {selectedCategory !== 'ALL' && ` (${selectedCategory})`}
                            </span>
                            <svg 
                                className={`w-5 h-5 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Filtros y Buscador */}
                    <div className={`w-full px-4 sm:px-6 lg:px-10 mt-6 lg:mt-10 ${showMobileFilters ? 'block' : 'hidden lg:flex'} lg:flex lg:justify-between lg:items-start lg:gap-4`}>
                        {/* Categorías - Versión móvil */}
                        <div className='lg:hidden mb-6'>
                            <h3 className='text-white font-semibold mb-4 text-lg'>Categorías</h3>
                            <div className='flex flex-wrap gap-3'>
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 rounded-lg transition-colors text-sm ${selectedCategory === category ? 'bg-white text-[#1C1C34] font-bold' : 'bg-[#424256] text-white hover:bg-[#4a4a6a]'}`}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Categorías - Versión escritorio */}
                        <div className='hidden lg:flex flex-wrap gap-3 xl:gap-5 text-base xl:text-[16px] text-[#a1a1c2]'>
                            {categories.map((category, index) => (
                                <button 
                                    key={index}
                                    className={`px-3 py-2 rounded-lg transition-all ${selectedCategory === category 
                                        ? 'text-white font-bold bg-white/10 border border-white/20' 
                                        : 'hover:text-white hover:bg-white/5'}`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Buscador */}
                        <div className='w-full lg:w-[300px] rounded-lg sm:rounded-[15px] border border-[#424256] p-3 sm:p-4 bg-[#1C1C34]/50'>
                            <div className='flex items-center gap-2'>
                                <svg className="w-5 h-5 text-[#a1a1c2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder='Buscar blog...'
                                    className='bg-transparent w-full text-white focus:outline-none placeholder:text-[#a1a1c2]'
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                {searchTerm && (
                                    <button 
                                        onClick={() => setSearchTerm("")}
                                        className="text-[#a1a1c2] hover:text-white"
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contador de resultados */}
                    <div className='w-full px-4 sm:px-6 lg:px-10 mt-4'>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                            <p className='text-white text-sm sm:text-base'>
                                {selectedCategory !== 'ALL' && (
                                    <span className='mr-2'>
                                        Categoría: <span className='font-bold'>{selectedCategory}</span>
                                    </span>
                                )}
                                {searchTerm && (
                                    <span>
                                        Búsqueda: <span className='font-bold'>"{searchTerm}"</span>
                                    </span>
                                )}
                            </p>
                            <p className='text-[#a1a1c2] text-sm sm:text-base mt-1 sm:mt-0'>
                                {blogs.length} artículo{blogs.length !== 1 ? 's' : ''} encontrado{blogs.length !== 1 ? 's' : ''}
                            </p>
                        </div>
                    </div>

                    {/* Mostrar mensaje si no hay resultados */}
                    {blogs.length === 0 ? (
                        <div className='text-white text-center py-16 sm:py-20 px-4'>
                            <div className='max-w-md mx-auto'>
                                <svg className="w-16 h-16 mx-auto text-[#a1a1c2] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className='text-lg sm:text-xl mb-2'>No se encontraron blogs</p>
                                <p className='text-[#a1a1c2] mb-6'>Intenta con otra categoría o término de búsqueda</p>
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-2 bg-white text-[#1C1C34] rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-6 lg:p-10">
                            {blogs.map((blog) => (
                                <div 
                                    key={blog.id} 
                                    className='w-full h-auto min-h-[400px] sm:min-h-[450px] bg-[#1C1C34] rounded-xl sm:rounded-2xl border border-[#31314a] p-4 sm:p-5 text-white cursor-pointer hover:border-[#4a4a6a] hover:transform hover:scale-[1.02] transition-all duration-300 flex flex-col'
                                    onClick={() => handleBlogClick(blog.id)}
                                >
                                    <img 
                                        src={blog.image} 
                                        className='w-full h-[180px] sm:h-[200px] rounded-lg object-cover' 
                                        alt={blog.title} 
                                    />
                                    <div className='border border-[#31314a] w-fit mt-4 sm:mt-5 rounded-lg px-2 py-1 text-xs'>
                                        {blog.category}
                                    </div>
                                    <h1 className='text-sm sm:text-[15px] font-semibold mt-3 line-clamp-2 flex-grow'>{blog.title}</h1>
                                    <p className='text-xs sm:text-[12px] mt-2 text-[#a1a1c2] line-clamp-3'>{blog.excerpt}</p>
                                    <div className='text-[10px] sm:text-xs text-[#a1a1c2] mt-4 pt-3 border-t border-[#31314a]/50'>
                                        {new Date(blog.date).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Botón ver más (opcional) */}
                    {blogs.length > 0 && blogs.length >= 6 && (
                        <div className='text-center pb-10 px-4'>
                            <button className='px-6 py-2 border border-[#424256] text-white rounded-lg hover:bg-white/10 transition-colors'>
                                Ver más artículos
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </LayoutApp>
    )
}

export default Bloc;