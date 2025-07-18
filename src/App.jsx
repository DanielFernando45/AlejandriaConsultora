import { Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import NotFound from "./pages/NotFound";
import spinner from "./assets/icons/spinner.svg";
import ReactPixel from 'react-facebook-pixel';

const Home = React.lazy(() => import("./pages/Home"));
const Nosotros = React.lazy(() => import("./pages/Nosotros"));
const Promociones = React.lazy(()=> import("./pages/Promociones"));
const LandinPage = React.lazy(()=> import("./pages/LandinPage"));
const Blog = React.lazy(() => import("./pages/Blog"));
const MetodologiaInvestigacion = React.lazy(() =>
  import("./pages/MetodologiaInvestigacion")
);
const RevistasDepredadoras = React.lazy(() =>
  import("./pages/RevistasDepredadoras")
);
const BlogTesis = React.lazy(() => import("./pages/BlogTesis"));
const BlogArticulo = React.lazy(() => import("./pages/BlogArticulo"));
const Tesis = React.lazy(() => import("./pages/Tesis"));
const Tsp = React.lazy(() => import("./pages/Tsp"));
const PlanNegocio = React.lazy(() => import("./pages/PlanNegocio"));
const ArticuloCientifico = React.lazy(() =>
  import("./pages/ArticuloCientifico")
);
const Centro = React.lazy(() => import("./pages/Centro"));
const Cursos = React.lazy(() => import("./pages/Cursos"));
const LibroReclamasiones = React.lazy(() => import("./pages/LibroReclamasiones"));

const options = {
  autoConfig: true, 
  debug: false,    
};

ReactPixel.init('993020102671178', options); 
ReactPixel.pageView(); 

export const App = () => {
  useEffect(() => {
    fetch("https://backendalejandria.onrender.com/api/pageView/add", {
      method: "POST"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      console.log("Alejandria Centro de Investigaciones");
    })
    .catch(error => {
      console.error("Error al enviar la IP:", error);
    });
  }, []);

  return (
    <Suspense
      fallback={
        <div className="bg-[#1c1c34] min-h-screen flex items-center justify-center">
          <img
            src={spinner}
            className="w-[100px] h-[200px] animate-spin"
            alt="spinner"
          />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/libro-de-reclamaciones" element={<LibroReclamasiones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/biblia-tesista" element={<LandinPage />} />
        <Route path="/centro-recursos" element={<Centro />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/tesis" element={<Tesis />} />
        <Route path="/tsp" element={<Tsp />} />
        <Route path="/articulo-cientifico" element={<ArticuloCientifico />} />
        <Route path="/plan-negocio" element={<PlanNegocio />} />
        <Route path="/blog/metodologia-investigacion" element={<MetodologiaInvestigacion />} />
        <Route path="/blog/revistas-depredadoras" element={<RevistasDepredadoras />} />
        <Route path="/blog/tesis" element={<BlogTesis />} />
        <Route path="/blog/Articulo" element={<BlogArticulo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
