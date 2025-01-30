import React from "react";
import promocion from "../assets/images/promociones/promo.png";

const ModalPromocion = ({activeModal, setActiveModal}) =>{
    return (

        <div
          className={`bg-black/50 w-full h-full fixed top-0 left-0 ${
            activeModal ? "visible opacity-100" : "invisible opacity-0"
          } flex items-center justify-center transition-all duration-500 z-40`}
          onClick={() => setActiveModal(false)}
        >
            
          <img 
            src={promocion}
            className="w-[700px]  2xl:w-[800px] 4xl:w-[1000px]"
            alt="img_promo"
           />

        </div>
    );
};

export default ModalPromocion;