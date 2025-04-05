import "swiper/swiper-bundle.css";
import CardPopular from "./CardPopular";
import PopularPorduct from '../../assets/img/Popular Product.png'
import MackBook from '../../assets/img/MackBookPro.png'
import IpadPro from '../../assets/img/Ipad Pro.png'
import SamsungGalaxy from '../../assets/img/Samsung Galaxy.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination , Navigation } from "swiper/modules";
export default function PopularProduct(){
    return(
        <>
        <div className="w-full hidden  items-center md:flex h-[640px] px-8 py-44">
            <CardPopular contstyle="mb-24" nameClass="text-black font-light text-[33px]" img={PopularPorduct} bgcolor="bg-[#FFFFFF]" name="Popular Product" buttonstyle="text-black border border-black"/>
            <CardPopular contstyle="" nameClass="text-black font-light text-[33px]" img={IpadPro} bgcolor="bg-[#F9F9F9]" name="Ipad Pro" buttonstyle="text-black border border-black"/>
            <CardPopular contstyle="" nameClass="text-black font-light text-[33px]" img={SamsungGalaxy} bgcolor="bg-[#EAEAEA]" name="Samsung Galaxy" buttonstyle="text-black border border-black"/>
            <CardPopular contstyle="mb-5" nameClass="text-white font-light text-[33px]" img={MackBook} bgcolor="bg-[#2C2C2C] " name="MackBook" buttonstyle="text-white border-white border"/>
        </div>
        <div className="h-[732px] md:hidden w-[475px]">
      <Swiper
        modules={[Autoplay, Pagination , Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        <SwiperSlide>
          <CardPopular
            contstyle="mb-24"
            nameClass="text-black font-light text-[33px]"
            img={PopularPorduct}
            bgcolor="bg-[#FFFFFF]"
            name="Popular Product"
            buttonstyle="text-black border border-black"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardPopular
            contstyle=""
            nameClass="text-black font-light text-[33px]"
            img={IpadPro}
            bgcolor="bg-[#F9F9F9]"
            name="Ipad Pro"
            buttonstyle="text-black border border-black"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardPopular
            contstyle=""
            nameClass="text-black font-light text-[33px]"
            img={SamsungGalaxy}
            bgcolor="bg-[#EAEAEA]"
            name="Samsung Galaxy"
            buttonstyle="text-black border border-black"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardPopular
            contstyle="mb-5"
            nameClass="text-white font-light text-[33px]"
            img={MackBook}
            bgcolor="bg-[#2C2C2C]"
            name="MackBook"
            buttonstyle="text-white border-white border"
          />
        </SwiperSlide>
      </Swiper>
    </div>
        </>
    )
}