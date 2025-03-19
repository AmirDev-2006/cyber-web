import { Bars3Icon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { Divider, Drawer } from "@mui/material"
import { UserIcon , ShoppingCartIcon , HeartIcon } from "@heroicons/react/24/outline";
import './Mobile.css'
export default function MobileNav(){
    const [open , setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    // done
    return(
        <>
        <div className="flex px-5 lg:hidden justify-between items-center w-full h-[150px] bg-red-200">
            <h1 className="text-[50px]">Cyber</h1>
            <button onClick={handleOpen}>
            <Bars3Icon className="w-16 h-16"/>
            </button>
            <Drawer open={open} onClose={()=>setOpen(false)}>
                <div className="w-[400px] px-3 gap-y-2 py-6 flex flex-col h-full bg-white">
                    <div className="w-full flex justify-center">
                    <h1 className="text-[65px]">Cyber</h1>
                    </div>
                    <Divider/>
                    <ul className="flex flex-col gap-y-2">
                    <li className="hover:bg-red-400 transition-colors rounded-sm p-2"><button className=" duration-75 text-[40px] border-black">Home</button></li>
                    <li className="hover:bg-red-400 transition-colors rounded-sm p-2"><button className=" duration-75 text-[40px] border-black">About</button></li>
                    <li className="hover:bg-red-400 transition-colors rounded-sm p-2"><button className=" duration-75 text-[40px] border-black" >Contact us</button></li>
                    <li className="hover:bg-red-400 transition-colors rounded-sm p-2"><button className=" duration-75 text-[40px] border-black">Blog</button></li>
                </ul>
                <Divider/>
                <ul className="flex justify-center items-center gap-x-6">
                    <li>
                        <button>
                            <HeartIcon className="w-5 h-5"/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <ShoppingCartIcon className="w-5 h-5"/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <UserIcon className="w-5 h-5"/>
                        </button>
                    </li>
                </ul>
                </div>
            </Drawer>
        </div>
        </>
    )
}