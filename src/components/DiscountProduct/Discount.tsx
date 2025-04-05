import HomeCard from "../HomeProduct/HomeCardProducts";

export default function Discount(){
    return(
        <>
        <div className="w-full flex-col items-center sm:items-start gap-y-8 h-[896px] flex sm:h-[656px] py-14 px-4 sm:px-40 sm:py-20">
            <h2 className="text-[24px] font-medium">Discounts up to -50%</h2>
            <div className="flex gap-x-4 gap-y-4 justify-center sm:justify-start flex-wrap w-full">
                <HomeCard/>
                <HomeCard/>
                <HomeCard/>
                <HomeCard/>
            </div>
        </div>
        </>
    )
}