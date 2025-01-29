import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link, useLocation } from "react-router-dom";
import back from "../assets/icons/back.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const LayoutBlogOptions = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative bg-[#1c1c34]">
      <Link className="absolute z-20 top-10 left-10 text-white" to={"/blog"}>
        <img className="block  w-[30px] h-[30px]" src={back} alt="back-icon" />
      </Link>
      {children}
      <Footer />
    </div>
  );
};

export default LayoutBlogOptions;
