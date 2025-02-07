import React from "react";
import promosanvalentin from "../assets/images/promociones/PromoSanValentin.png"

const ModalPromocion = ({activeModal, setActiveModal}) =>{
    return (

        <div
          className={`bg-black/50 w-full h-full fixed top-0 left-0 ${
            activeModal ? "visible opacity-100" : "invisible opacity-0"
          } flex items-center justify-center transition-all duration-500 z-40`}
          onClick={() => setActiveModal(false)}
        >
            
          <img 
            src={promosanvalentin}
            className="w-[700px]  2xl:w-[800px] 4xl:w-[1000px]"
            alt="img_promo"
           />

        </div>
    );
};

export default ModalPromocion;