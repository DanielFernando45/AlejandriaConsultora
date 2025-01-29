import Marquee from "react-fast-marquee";
import empresa_01 from "../assets/images/empresa_01.webp";
import empresa_02 from "../assets/images/empresa_02.webp";
import empresa_03 from "../assets/images/empresa_03.webp";
import empresa_04 from "../assets/images/empresa_04.webp";
import empresa_05 from "../assets/images/empresa_05.webp";

const CarouselMarquee = () => {
  return (
    <Marquee speed={300} className="space h-[150px]">
      <div className="image_wrapper">
        <img
          className="w-[129px] h-[38px] sm:w-[174px] sm:h-[40px] lg:w-[244px] lg:h-[54px]"
          src={empresa_01}
          alt="empresa_01"
        />
      </div>
      <div className="image_wrapper">
        <img
          className="w-[80px] h-[75px] sm:w-[80px] sm:h-[75px] lg:w-[135px] lg:h-[125px]"
          src={empresa_02}
          alt="empresa_02"
        />
      </div>
      <div className="image_wrapper">
        <img
          className="w-[61px] h-[52px] lg:w-[104px] lg:h-[89px]"
          src={empresa_03}
          alt="empresa_03"
        />
      </div>
      <div className="image_wrapper">
        <img
          className="w-[143px] h-[43px] lg:w-[243px] lg:h-[53px]"
          src={empresa_04}
          alt="empresa_04"
        />
      </div>
      <div className="image_wrapper">
        <img
          className="w-[113px] h-[46px] lg:w-[193px] lg:h-[78px]"
          src={empresa_05}
          alt="empresa_05"
        />
      </div>
    </Marquee>
  );
};

export default CarouselMarquee;
