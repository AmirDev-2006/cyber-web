import NavBar from "../NavBar/NavBar"
import MobileNav from "../../components/NavBar/MobileNav"
import Iphone from '../../assets/img/Iphone Image.png'
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
        </>
    )
}