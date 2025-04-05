export default function Footer(){
    return(
        <>
        <div className="w-full hidden md:flex flex-col justify-center items-start h-[504px] px-40 py-[204px] bg-black text-white">
            <div className="w-[1120px] h-[256px] flex justify-between items-center">
                <div className="flex w-[384px] h-[256px]  justify-start flex-col">
                    <h1 className="text-xl">cyber</h1>
                    <p className="text-sm font-medium">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div>
                <div className="flex">
                <div className="flex w-[295px] h-[256px] gap-y-2 flex-col">
                    <h4 className="font-semibold text-base">Services</h4>
                    <a className="text-sm font-normal" href="#">Bonus program</a>
                    <a className="text-sm font-normal" href="#">Gift cards</a>
                    <a className="text-sm font-normal" href="#">Credit and payment</a>
                    <a className="text-sm font-normal" href="#">Service contracts</a>
                    <a className="text-sm font-normal" href="#">Non-cash account</a>
                    <a className="text-sm font-normal" href="#">Payment</a>
                </div>
                <div className="flex w-[295px] h-[256px] gap-y-2 flex-col">
                    <h4 className="font-semibold text-base">Assistance to the buyer</h4>
                    <a className="text-sm font-normal" href="#">Find an order</a>
                    <a className="text-sm font-normal" href="#">Terms of delivery</a>
                    <a className="text-sm font-normal" href="#">Exchange and return of goods</a>
                    <a className="text-sm font-normal" href="#">Guarantee</a>
                    <a className="text-sm font-normal" href="#">Frequently asked questions</a>
                    <a className="text-sm font-normal" href="#">Terms of use of the site</a>
                </div>
                </div>
            </div>
            <div className="flex gap-x-9">
                <ul>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
        </div>
        </>
    )
}