interface Homecards {
    img : string
    title: string
    titleBold: string
    text: string
    bgcolor:string
    classNameTitle: string
    classNameText:string
    classNameTitleBold:string
    imgClass:string
}
export default function HomeCards(props:Homecards){
    return(
        <>
        <div className={` h-[375px] ${props.bgcolor} flex flex-col px-4 justify-center items-center`}>
            <div className="flex flex-col items-center gap-y-2">
                <img className={`transition-all ${props.imgClass}`} src={props.img} alt="" />
                <div className="flex">
                <h1 className={`${props.classNameTitle}`}>{props.title}</h1>&nbsp;&nbsp;
                <h1 className={`${props.classNameTitleBold}`}>{props.titleBold}</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                <p className={`${props.classNameText}`}>{props.text}</p>
                </div>
            </div>
        </div>
        </>
    )
}