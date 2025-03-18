import { AppBar, Box,Button, Toolbar, Typography , IconButton } from "@mui/material";
import { UserIcon , ShoppingCartIcon , HeartIcon } from "@heroicons/react/24/outline";
export default function NavBar(){
    return(
        <>
        <div className="w-full hidden bg-white md:flex justify-center fixed top-0 right-0 left-0  items-center h-[90px]">
            <div className="flex w-11/12 justify-around  items-center px-18">
            <h5 className="text-2xl">Cyber</h5>
            <div>
                <input placeholder="Search" className="w-[372px] p-5  bg-[#F5F5F5] h-[56px] rounded-lg" type="search" />
            </div>
                <ul className="flex gap-x-[52px]">
                    <li><button className="hover:border-b-2 transition-all border-black">Home</button></li>
                    <li><button className="hover:border-b-2 transition-all border-black">About</button></li>
                    <li><button className="hover:border-b-2 transition-all border-black" >Contact us</button></li>
                    <li><button className="hover:border-b-2 transition-all border-black">Blog</button></li>
                </ul>
                <ul className="flex items-center gap-x-6">
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
        </div>
        </>
    )
}