import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Aos from "aos";
import "aos/dist/aos.css";

const LayoutApp = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showPromoOptions, setShowPromoOptions] = useState(false);

  const handleContact = () => {
    event.preventDefault(event);
    let mensaje = `Hola vengo de tu página web y deseo información de los servicios que brindan.`;
    const numero = "51989575820";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseSidebar = (event) => {
    setOpenSidebar(false);
  };

  window.addEventListener("resize", () => {
    setOpenSidebar(false)
    setShowOptions(false)
    setShowPromoOptions(false)
  })


  return (
    <div className="bg-[##1C1C34]">
      <Sidebar
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        openSidebar={openSidebar}
        handleCloseSidebar={handleCloseSidebar}
        handleContact={handleContact}
        showPromoOptions={showPromoOptions}
        setShowPromoOptions={setShowPromoOptions}
      />
      <NavBar
        handleOpenSidebar={handleOpenSidebar}
        handleContact={handleContact}
      />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutApp;
