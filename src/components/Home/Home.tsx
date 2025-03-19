import NavBar from "../NavBar/NavBar"
import MobileNav from "../../components/NavBar/MobileNav"
import Iphone from '../../assets/img/Iphone Image.png'
import HomeCards from "./HomeCards"
import AirPod from '../../assets/img/AirPods.png'
import AppleVision from '../../assets/img/Apple vision.png'
import PS5 from '../../assets/img/PS5.png'
import Mac from '../../assets/img/MackBook Pro.png'
export default function Home(){
    return(
        <>
        <NavBar/>
        <MobileNav/>
        <div className="h-[769px] lg:hidden iphone-background w-full flex flex-col justify-between pt-10  bg-red-500">
            <div className="flex justify-between flex-col items-center">
                <p className="text-white/40 text-[25px] font-semibold">Pro.Beyond.</p>
                <div className="flex flex-col items-center">
                <h1 className="text-white font-weight  text-[72px]">IPhone 14 
                    </h1>
                    <span className="text-white font-semibold text-[72px]">Pro</span>
                </div>
                <div className="flex flex-col items-center gap-y-6">
                <p className="text-[#909090] text-[19px]">Created to change everything for the <br /> better. For everyone</p>
                <button className="w-[191px] h-[56px] border-2 rounded-md py-4 px-14 text-white">Shop Now</button>
                </div>
            </div>
            <div className="flex justify-center">
                <img src={Iphone} alt="" />
            </div>
        </div>
        <HomeCards bgcolor="bg-white" img={AirPod} imgClass="w-[192px] h-[200px] hover:w-[240px] hover:h-[240px]" title="Apple AirPods" classNameTitle="font-thin text-[34px]" titleBold="Max" classNameTitleBold="font-semibold text-[34px]" text="Computational audio. Listen, it's powerful" classNameText="text-[16px] text-[#909090]"/>
        <HomeCards bgcolor="bg-[#353535]" img={AppleVision} imgClass="w-[325px] h-[192px] hover:h-[220px] hover:w-[350px]" title="Apple Vision " classNameTitle="font-thin text-white text-[34px]" titleBold="Pro" classNameTitleBold="font-semibold text-white text-[34px]" text="An immersive way to experience entertainment" classNameText="text-[16px]  text-[#909090]"/>
        <HomeCards bgcolor="bg-white" img={PS5} title="Playstation " imgClass="w-[200px] h-[200px] hover:w-[240px] hover:h-[240px]" classNameTitle="font-thin text-[34px]" titleBold="5" classNameTitleBold="font-semibold text-[34px]" text="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience." classNameText="text-[16px] w-[320px] text-center text-[#909090]"/>
        <HomeCards bgcolor="bg-[#EDEDED]" img={Mac} imgClass="w-[330px] h-[200px]" title="Macbook" classNameTitle="font-semibold text-[34px]" titleBold="Air" classNameTitleBold="font-thin text-[34px]" text="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display." classNameText="text-[16px] w-[320px] text-center text-[#909090]"/>
        </>
    )
}