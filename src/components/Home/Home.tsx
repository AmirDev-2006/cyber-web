import NavBar from "../NavBar/NavBar";
import MobileNav from "../../components/NavBar/MobileNav";
import Iphone from "../../assets/img/Iphone Image.png";
import HomeCards from "./HomeCards";
import AirPod from "../../assets/img/AirPods.png";
import AppleVision from "../../assets/img/Apple vision.png";
import PS5 from "../../assets/img/PS5.png";
import Mac from "../../assets/img/MackBook Pro.png";
import IphoneDesktop from "../../assets/img/IphoneDesktop.png";
import halfMac from "../../assets/img/half Mac.png";
import FullPS5 from "../../assets/img/FullPS5.png";
import halfAppleV from "../../assets/img/halfAppleVision.png";
import halfAirPod from "../../assets/img/halfAirPod.png";
export default function Home() {
  return (
    <>
      <NavBar />
      <MobileNav />
      {/* Mobile context */}
      <div className="h-[769px] lg:hidden iphone-background max-w-full flex flex-col justify-between pt-10  bg-red-500">
        <div className="flex justify-between flex-col items-center">
          <p className="text-white/40 text-[25px] font-semibold">Pro.Beyond.</p>
          <div className="flex flex-col items-center">
            <h1 className="text-white font-weight  text-[72px]">IPhone 14</h1>
            <span className="text-white font-semibold text-[72px]">Pro</span>
          </div>
          <div className="flex flex-col items-center gap-y-6">
            <p className="text-[#909090] text-[19px]">
              Created to change everything for the <br /> better. For everyone
            </p>
            <button className="w-[191px] h-[56px] border-2 rounded-md py-4 px-14 text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={Iphone} alt="" />
        </div>
      </div>
      <div className="lg:hidden">
        <HomeCards
          bgcolor="bg-white"
          img={AirPod}
          imgClass="w-[192px] h-[200px] hover:w-[240px] hover:h-[240px]"
          title="Apple AirPods"
          classNameTitle="font-thin text-[34px]"
          titleBold="Max"
          classNameTitleBold="font-semibold text-[34px]"
          text="Computational audio. Listen, it's powerful"
          classNameText="text-[16px] text-[#909090]"
        />
        <HomeCards
          bgcolor="bg-[#353535]"
          img={AppleVision}
          imgClass="w-[325px] h-[192px] hover:h-[220px] hover:w-[350px]"
          title="Apple Vision "
          classNameTitle="font-thin text-white text-[34px]"
          titleBold="Pro"
          classNameTitleBold="font-semibold text-white text-[34px]"
          text="An immersive way to experience entertainment"
          classNameText="text-[16px]  text-[#909090]"
        />
        <HomeCards
          bgcolor="bg-white"
          img={PS5}
          title="Playstation "
          imgClass="w-[200px] h-[200px] hover:w-[240px] hover:h-[240px]"
          classNameTitle="font-thin text-[34px]"
          titleBold="5"
          classNameTitleBold="font-semibold text-[34px]"
          text="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
          classNameText="text-[16px] w-[320px] text-center text-[#909090]"
        />
        <HomeCards
          bgcolor="bg-[#EDEDED]"
          img={Mac}
          imgClass="w-[330px] hover:w-[350px] hover:h-[220px] h-[200px]"
          title="Macbook"
          classNameTitle="font-semibold text-[34px]"
          titleBold="Air"
          classNameTitleBold="font-thin text-[34px]"
          text="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
          classNameText="text-[16px] w-[320px] text-center text-[#909090]"
        />
      </div>
      {/* Desktop Context */}
      <div className="lg:flex w-full hidden h-[632px]  justify-center items-center iphone-background">
        <div className="flex flex-col w-[714px] min-w-[400px] items-start">
          <p className="text-white/40 text-[25px] font-semibold">Pro.Beyond.</p>
          <div className="flex flex-col items-center">
            <h1 className="text-white font-thin  text-[96px]">
              IPhone 14{" "}
              <span className="text-white font-semibold text-[96px]">Pro</span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-y-6">
            <p className="text-[#909090] text-[19px]">
              Created to change everything for the better. For everyone
            </p>
            <div className="w-full">
              <button className="w-[191px] h-[56px] border-2 rounded-md py-4 px-14 text-white">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className=" w-[400px] h-[632px] hover:w-[410px] hover:h-[642px] transition-all"
            src={IphoneDesktop}
            alt=""
          />
        </div>
      </div>

      {/* Mac Desktop */}
      <div className="lg:flex w-full hidden h-[600px]">
        <div className="w-1/2 h-full flex flex-col">
          <div className="h-1/2 flex justify-start bg-white">
            <img src={FullPS5} alt="" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[50px] font-semibold">Playstation 5</h1>
              <p className="text-[#909090] text-[14px] font-semibold">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="h-1/2 flex">
            <div className="w-1/2 flex justify-start gap-x-6 items-center bg-[#EDEDED]">
              <img src={halfAirPod} alt="" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[50px] text-black font-thin ">
                  Apple AirPods <br />
                  <span className="font-semibold">Max</span>
                </h1>
                <p className="text-[#909090] text-[14px] font-semibold">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className="w-1/2 flex gap-x-2 items-center justify-start bg-[#353535]">
              <img className="w-[136px] h-[190px]" src={halfAppleV} alt="" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[50px] text-white font-thin ">
                  Apple
                  <br /> Vision&nbsp;<span className="font-semibold">Pro</span>
                </h1>
                <p className="text-[#909090] text-[14px] font-semibold">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-end gap-x-3 bg-[#EDEDED]">
          <div className="flex flex-col w-[360px] justify-center h-[272px] gap-y-4">
            <h1 className="text-[64px] font-thin">
              Macbook
              <br />
              <span className="text-[64px] font-semibold">Air</span>
            </h1>
            <p className="text-[14px] text-[#909090]">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="w-[191px] h-[56px] border-2 rounded-md py-4 px-14 border-black text-black">
              Shop Now
            </button>
          </div>
          <img src={halfMac} alt="" />
        </div>
      </div>
    </>
  );
}
