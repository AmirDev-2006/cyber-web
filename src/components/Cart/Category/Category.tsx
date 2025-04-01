import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {ChevronLeftIcon , ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import MiniCard from './miniCard';
export default function Category(){
    const [tab , setTab] = useState("")
    const [value , setValue] = useState('')
    const handleChange = () =>{
        if(value === "one" ){
            setTab('one')
        }
        else if(value === "two"){
            setTab("two")
        }
        else{
            setTab('three')
        }
    }
    return(
        <>
        <div className="w-full flex h-[624px] md:justify-between  flex-col gap-y-12 py-10 items-center sm:h-[352px] bg-[#FAFAFA] ">
            <div className="bg blue w-5/6 flex justify-between px-8 items-center h-12 ">
            <h1 className='text-2xl'>Browse by Category</h1>
            <div className='flex'>
                <ChevronLeftIcon className='w-6 h-6'/>
                <ChevronRightIcon className='w-6 h-6'/>
            </div>
            </div>
            <div className='w-5/6 flex  flex-wrap gap-y-5 gap-x-8 justify-center h-[128px] mb-8'>
            <MiniCard name='' img=''/>
            <MiniCard name='' img=''/>
            <MiniCard name='' img=''/>
            <MiniCard name='' img=''/>
            <MiniCard name='' img=''/>
            <MiniCard name='' img=''/>
            </div>
        </div>
        </>
    )
}