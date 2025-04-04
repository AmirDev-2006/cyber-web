interface Card {
    img : string
    bgcolor : string
    name : string
    nameClass :string
    buttonstyle : string
    contstyle : string
}
export default function CardPopular(prop:Card){
    return(
        <>
        <div className={`sm:w-1/4 h-[640px] w-[375px]  flex flex-col items-center justify-center  ${prop.bgcolor}`}>    
            <img src={prop.img} alt="" />
            <br />
            <div className={`w-[296px] ${prop.contstyle} h-[208px] flex flex-col items-center`}>
            <h2 className={`${prop.nameClass}`} >{prop.name}</h2>
            <p className="text-sm  pb-5 text-[#909090] font-medium">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <div className="w-full">
            <button className={`${prop.buttonstyle} w-[191px] h-[56px] flex justify-center flex-col items-center rounded-md `}>ShopNow</button>
            </div>
            </div>
        </div>
        </>
    )
}