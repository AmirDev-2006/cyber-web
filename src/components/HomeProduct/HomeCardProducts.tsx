import LikeButton from "../likeButton/LikeButton"
interface Card{
    img: string
    name : string
    price : string

}
export default function HomeCard(props:Card){
    return(
        <>
        <div className=" bg-[#F6F6F6] flex flex-col items-center justify-center md:w-[268px] gap-y-2 md:h-[432px] w-[163px] h-[352px] rounded-lg md:px-3 py-2 px-4 md:py-6">
            <div className="w-full flex items-center  justify-end h-8">
                <LikeButton/>
            </div>
            <div className="w-full flex justify-center">
                <img className="md:w-40 md:h-40 w-[104px] h-[104px]" src={props.img} alt="" />
            </div>
            <div className="flex flex-col justify-between items-center w-[140px] h-[88px] md:w-[236px] md:h-[160px]">
                <p className="font-medium text-base pt-3 text-center">{props.name} name</p>
                <p className="font-semibold text-center text-2xl">{props.price} price</p>
                <button className="md:w-[188px] md:h-[48px] flex justify-center items-center w-[140px] h-[48px] rounded-lg px-16 py-3 bg-black text-white hover:bg-white hover:text-black transition-all">BuyNow</button>
            </div>
        </div>
        </>
    )
}