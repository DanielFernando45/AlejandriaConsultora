import React, { useState, useEffect } from 'react'
import LayoutApp from "../layout/LayoutApp";

const Videos = () => {
  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para el video seleccionado en el modal
  const [selectedVideo, setSelectedVideo] = useState(null);
  // Estado para controlar qué video tiene el hover
  const [hoveredVideo, setHoveredVideo] = useState(null);
  // Estado para manejar visibilidad de filtros en móvil
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  // Estado para manejar la carga de imágenes
  const [loadedImages, setLoadedImages] = useState({});

  // Arreglo de categorías disponibles
  const categories = ['Todos', 'Tecnologia', 'Ciencia', 'Educación', 'Investigación'];

  // Arreglo de datos de videos
  const videosData = [
    {
      id: 1,
      title: '¿Quieres destacar en tu tesis? Usa este método fácil',
      description: 'El metodo mas practico para que puedas destacar en tu tesis universitaria',
      categories: ['Tecnologia', 'Educación'],
      youtubeUrl: 'https://www.youtube.com/embed/uWtyWvK7DfY'
    },
    {
      id: 2,
      title: 'La verdad sobre las tesis descriptivas en ingeniería',
      description: 'Las tesis descriptivas son una de las formas más comunes de investigación en el campo de la ingeniería.',
      categories: ['Tecnologia', 'Investigación'],
      youtubeUrl: 'https://www.youtube.com/embed/_2445tl-ufA'
    },
    {
      id: 3,
      title: '¿Variable o indicador? Aprende a diferenciarlos',
      description: 'Las variables e indicadores son conceptos fundamentales en la investigación científica y el análisis de datos.',
      categories: ['Ciencia', 'Investigación'],
      youtubeUrl: 'https://www.youtube.com/embed/1AIbUY5OkH4'
    },
    {
      id: 4,
      title: 'Este es el error que arruina tu tesis',
      description: 'Es común que los estudiantes cometan errores al redactar sus tesis, pero algunos errores pueden ser particularmente perjudiciales.',
      categories: ['Tecnologia', 'Investigación'],
      youtubeUrl: 'https://www.youtube.com/embed/oTXWUqPI--w'
    },
    {
      id: 5,
      title: '¿Por qué nuestros asesores marcan la diferencia?',
      description: 'Nuestros asesores no solo tienen experiencia académica, sino que también comprenden las demandas del entorno universitario moderno.',
      categories: ['Ciencia', 'Educación'],
      youtubeUrl: 'https://www.youtube.com/embed/C9sbMxO4pKk'
    },
  ];

  // Video destacado (primer video del arreglo)
  const featuredVideo = videosData[0];

  // Función para extraer ID del video de YouTube
  const getYoutubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  // Función para obtener la URL de la miniatura de YouTube
  const getYoutubeThumbnail = (url, quality = 'maxresdefault') => {
    const videoId = getYoutubeId(url);
    if (!videoId) return '';
    
    // Calidades disponibles:
    // 'maxresdefault' - Máxima resolución (1280x720)
    // 'sddefault' - Alta calidad (640x480)
    // 'hqdefault' - Calidad media (480x360)
    // 'mqdefault' - Calidad baja (320x180)
    // 'default' - Calidad por defecto (120x90)
    
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  };

  // Función para cargar una imagen y manejar errores
  const loadImage = (url, videoId, quality = 'maxresdefault') => {
    const img = new Image();
    img.src = url;
    
    img.onload = () => {
      // Si la imagen se carga correctamente, actualizar el estado
      setLoadedImages(prev => ({ ...prev, [videoId]: url }));
    };
    
    img.onerror = () => {
      // Si falla la calidad máxima, intentar con calidad estándar
      if (quality === 'maxresdefault') {
        loadImage(getYoutubeThumbnail(url, 'sddefault'), videoId, 'sddefault');
      } else if (quality === 'sddefault') {
        loadImage(getYoutubeThumbnail(url, 'hqdefault'), videoId, 'hqdefault');
      } else if (quality === 'hqdefault') {
        loadImage(getYoutubeThumbnail(url, 'mqdefault'), videoId, 'mqdefault');
      } else {
        // Último recurso: calidad por defecto
        setLoadedImages(prev => ({ ...prev, [videoId]: getYoutubeThumbnail(url, 'default') }));
      }
    };
  };

  // Cargar miniaturas cuando se monta el componente
  useEffect(() => {
    videosData.forEach(video => {
      const videoId = getYoutubeId(video.youtubeUrl);
      if (videoId && !loadedImages[video.id]) {
        loadImage(getYoutubeThumbnail(video.youtubeUrl), video.id);
      }
    });
  }, []);

  // Filtrar videos según categoría seleccionada y término de búsqueda
  const filteredVideos = videosData.filter(video => {
    const matchesCategory = selectedCategory === 'Todos' || video.categories.includes(selectedCategory);
    const matchesSearch = searchTerm === '' || 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Manejar apertura del modal
  const handleOpenModal = (video) => {
    setSelectedVideo(video);
  };

  // Manejar cierre del modal
  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <LayoutApp>
      <div className="relative min-h-screen bg-[#131b2f]">

        {/* Fondo superior */}
        <div className="absolute top-[-65px] left-0 w-full h-[120px] bg-[#1C1C34] z-0" />

        {/* Contenido */}
        <main className="flex flex-col items-center py-6 md:py-12 mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mb-8 md:mb-12 text-white">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground text-balance">
                  Repositorio de Videos Académicos
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground text-balance">
                  Colección de videos documentados para investigación y análisis universitario
                </p>
              </div>
            </div>
          </div>

          {/* Video destacado */}
          <div className='flex flex-col lg:flex-row items-center bg-[#24244a80] rounded-[15px] border border-[#424256] w-full max-w-[1500px] h-auto lg:h-[500px] p-4 md:p-6 gap-4 md:gap-6 mb-8 md:mb-0'>
            <div 
              className='relative w-full lg:w-[50%] h-[300px] sm:h-[350px] lg:h-[460px] rounded-lg overflow-hidden cursor-pointer'
              onClick={() => handleOpenModal(featuredVideo)}
              onMouseEnter={() => setHoveredVideo('featured')}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {loadedImages[featuredVideo.id] ? (
                <img 
                  src={loadedImages[featuredVideo.id]} 
                  alt={featuredVideo.title} 
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getYoutubeThumbnail(featuredVideo.youtubeUrl, 'default');
                  }}
                />
              ) : (
                <div className='w-full h-full bg-gray-800 flex items-center justify-center'>
                  <div className='animate-pulse flex flex-col items-center'>
                    <div className='w-12 h-12 bg-gray-700 rounded-full mb-4'></div>
                    <div className='text-gray-500'>Cargando miniatura...</div>
                  </div>
                </div>
              )}
              {hoveredVideo === 'featured' && (
                <div className='absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300'>
                  <div className='w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center'>
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className='flex flex-col w-full lg:w-[50%]'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {featuredVideo.categories.map((category, index) => (
                  <div key={index} className='flex justify-center bg-[#424256] px-3 py-1 md:px-4 md:py-2 text-white rounded-2xl text-sm md:text-base'>
                    {category}
                  </div>
                ))}
              </div>
              <h1 className='text-white text-xl sm:text-2xl md:text-[28px] font-bold mb-3 md:mb-4'>{featuredVideo.title}</h1>
              <p className='text-white text-base sm:text-lg'>{featuredVideo.description}</p>
            </div>
          </div>

          {/* Botón para mostrar filtros en móvil */}
          <div className='lg:hidden w-full max-w-[1500px] mt-6'>
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className='flex items-center justify-between w-full bg-[#24244a] text-white p-4 rounded-lg'
            >
              <span className='font-semibold'>Filtros y Búsqueda</span>
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

          {/* Filtros y buscador */}
          <div className={`w-full max-w-[1500px] mt-6 md:mt-20 ${showMobileFilters ? 'block' : 'hidden'} lg:flex lg:flex-row lg:items-center lg:justify-between`}>
            {/* Categorías - Versión móvil */}
            <div className='lg:hidden mb-6'>
              <h3 className='text-white font-semibold mb-4'>Categorías</h3>
              <div className='flex flex-wrap gap-3'>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === category ? 'bg-white text-[#1C1C34]' : 'bg-[#424256] text-white'}`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowMobileFilters(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Categorías - Versión escritorio */}
            <div className='hidden lg:flex justify-start gap-8 xl:gap-10 font-semibold text-lg xl:text-[22px]'>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`hover:text-white transition-colors ${selectedCategory === category ? 'text-white border-b-2 border-white' : 'text-[#a1a1c2]'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Buscador */}
            <div className='w-full lg:w-[300px] rounded-[15px] border border-[#424256] p-3 md:p-4'>
              <input
                type="text"
                placeholder='Buscar videos...'
                className='bg-transparent w-full text-white focus:outline-none placeholder:text-[#a1a1c2]'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Categoría seleccionada */}
          <div className='w-full max-w-[1500px] mt-6 md:mt-8'>
            <p className='text-white text-base md:text-lg'>
              Categoría seleccionada: <span className='font-bold text-lg md:text-xl'>{selectedCategory}</span>
            </p>
            <p className='text-[#a1a1c2] text-sm md:text-base mt-1 md:mt-2'>
              Mostrando {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Lista de videos */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-10 w-full max-w-[1500px]'>
            {filteredVideos.map((video) => (
              <div 
                key={video.id} 
                className='border border-[#424256] rounded-2xl overflow-hidden hover:border-white transition-colors duration-300'
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div 
                  className='relative h-[200px] sm:h-[220px] md:h-[250px] cursor-pointer'
                  onClick={() => handleOpenModal(video)}
                >
                  {loadedImages[video.id] ? (
                    <img 
                      className='w-full h-full object-cover' 
                      src={loadedImages[video.id]} 
                      alt={video.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getYoutubeThumbnail(video.youtubeUrl, 'default');
                      }}
                    />
                  ) : (
                    <div className='w-full h-full bg-gray-800 flex items-center justify-center'>
                      <div className='animate-pulse flex flex-col items-center'>
                        <div className='w-10 h-10 bg-gray-700 rounded-full mb-3'></div>
                        <div className='text-gray-500 text-sm'>Cargando...</div>
                      </div>
                    </div>
                  )}
                  {hoveredVideo === video.id && (
                    <div className='absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300'>
                      <div className='w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center'>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className='p-4 md:p-6'>
                  <div className='flex flex-wrap gap-2 mb-3 md:mb-4'>
                    {video.categories.map((category, index) => (
                      <div key={index} className='flex justify-center bg-[#424256] px-2 py-1 md:px-3 md:py-2 text-white rounded-2xl text-xs md:text-sm'>
                        {category}
                      </div>
                    ))}
                  </div>
                  <p className='text-white text-lg sm:text-xl md:text-[24px] font-bold mb-2 md:mb-4 line-clamp-2'>{video.title}</p>
                  <p className='text-[#a1a1c2] text-sm md:text-[18px] line-clamp-3'>{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal para reproducir video */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4" onClick={handleCloseModal}>
              <div className="bg-[#1C1C34] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="p-3 sm:p-4 flex justify-between items-center border-b border-[#424256]">
                  <h3 className="text-white text-base sm:text-xl font-bold line-clamp-1 pr-2">{selectedVideo.title}</h3>
                  <button 
                    onClick={handleCloseModal}
                    className="text-white hover:text-gray-300 text-2xl flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
                <div className="p-2 sm:p-4">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo.youtubeUrl)}?autoplay=1`}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {selectedVideo.categories.map((category, index) => (
                        <div key={index} className='flex justify-center bg-[#424256] px-2 py-1 sm:px-3 sm:py-2 text-white rounded-2xl text-xs sm:text-sm'>
                          {category}
                        </div>
                      ))}
                    </div>
                    <p className="text-white text-sm sm:text-base">{selectedVideo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mensaje si no hay resultados */}
          {filteredVideos.length === 0 && (
            <div className="w-full max-w-[1500px] mt-10 text-center">
              <div className="bg-[#24244a80] rounded-2xl border border-[#424256] p-8">
                <svg className="w-16 h-16 mx-auto text-[#a1a1c2] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-white text-xl font-bold mb-2">No se encontraron videos</h3>
                <p className="text-[#a1a1c2]">Intenta con otra categoría o término de búsqueda</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Todos');
                    setSearchTerm('');
                    setShowMobileFilters(false);
                  }}
                  className="mt-4 px-6 py-2 bg-white text-[#1C1C34] rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </LayoutApp>
  )
}

export default Videos