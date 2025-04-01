interface Card {
    img : string
    name : string
}
export default function MiniCard(prop:Card){
    return(
        <>
        <div className="w-[160px] h-[128px] justify-center items-center flex flex-col gap-y-2 min-w-[135px] rounded-2xl py-4 px-[52px] bg-[#EDEDED]">
            <img src={prop.img} alt="" />
            <p className="text-black">{prop.name}</p>
        </div>
        </>
    )
}