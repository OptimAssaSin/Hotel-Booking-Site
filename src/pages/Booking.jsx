import React from "react";
import Navbar from "./NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function NameParts()
{
    return(
        <div className="mt-[80px] h-auto justify-between space-x-[250px] flex flex-row items-center bg-transparent">
            
            <div className="w-[300px]">
            <label className="font-medium text-xl">First name</label>
                <input type="text" placeholder="" className=" h-[20px] block text-center text-black w-full rounded-md border-0 bg-gradient-to-r from-rose-400 to-fuchsia-300 py-6 hover:shadow-2xl shadow-red-700" required/>
            </div>
            <div className="w-[300px] ">
            <label className="font-medium text-xl">Last name</label>
                <input type="text" placeholder="" className=" h-[20px] block text-center text-black w-full rounded-md border-0 bg-gradient-to-r  from-rose-400 to-fuchsia-300 py-6 hover:shadow-2xl shadow-red-700" required/>
            </div>
        </div>
    );
}

function OtherInfo(){
    return(
        <div className="h-auto justify-between space-x-[20px] flex flex-col items-center mt-[50px] ">
            <form className="w-[860px] ">
                    <label className="font-medium text-xl">Email</label>
                <   input type="email" placeholder="" autoComplete="email" className=" h-[20px] block text-center text-black w-full rounded-md border-0 bg-gradient-to-r from-rose-400 to-fuchsia-300 py-6 hover:shadow-2xl shadow-red-700" required/>
            </form>
            <form className="mt-[40px] w-[860px] ">
                    <label className=" -ml-[10px] font-medium text-xl">Phone Number</label>
                    <input type="email" placeholder="" autoComplete="email" className=" -ml-[10px] h-[20px]  block text-center text-black w-full rounded-md border-0 bg-gradient-to-r from-rose-400 to-fuchsia-300 py-6 hover:shadow-2xl shadow-red-700" required/>
            </form>
        </div>
    );
}


function HotelDetails(){
    const [value, setValue] = useState("Select a hotel");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return(
        <div className="mt-[40px] h-auto justify-between space-x-[250px] flex flex-row items-center bg-transparent">
            <div className="w-[300px]">
                <label className="font-medium text-xl">Hotel</label>
                <select value={value} onChange={handleChange} className="  block text-center text-black w-full rounded-md border-0 bg-gradient-to-r from-rose-400 to-fuchsia-300 py-3 hover:shadow-2xl shadow-red-700" required>
                    <option value="Select a hotel">Select a hotel</option>
                    <option value="Hotel 1">Hotel 1</option>
                    <option value="Hotel 2">Hotel 2</option>
                    <option value="Hotel 3">Hotel 3</option>
                    <option value="Hotel 3">Hotel 4</option>
                </select>
            </div>
        </div>
    );
}

function DateParts()
{
    return(
        <div className="mt-[40px] h-auto justify-between space-x-[250px] flex flex-row items-center bg-transparent">
            
            <div className="w-[300px]">
            <label className="font-medium text-xl">Check in</label>
                <input type="date" placeholder="" className=" h-[20px] block text-center text-black w-full rounded-md border-0 bg-gradient-to-r from-rose-400 to-fuchsia-300 py-6 hover:shadow-2xl shadow-red-700" required/>
            </div>
            <div className="w-[300px] ">
            <label className="font-medium text-xl">Check out</label>
                <input type="date" placeholder="" className=" h-[20px] block text-center text-black w-full rounded-md border-0 bg-gradient-to-r  from-rose-400 to-fuchsia-300 py-6 hover:shadow-2xl shadow-red-700" required/>
            </div>
        </div>
    );
}


export default function Booking(){

    const Navigate = useNavigate();

    return(
        <div className="bg-gray-800">
            <Navbar/>
            <div className="flex flex-col items-center bg-gradient-to-b from-lime-100 to-gray-200 px-6 py-60  mx-1 mt-2 rounded-xl bg-opacity-75">
                    <h1 className="font-medium text-5xl bg-gradient-to-r from-red-600 to-fuchsia-500 bg-clip-text text-transparent text-center -mt-60">Trip Snatcher</h1>
                <NameParts/>
                <OtherInfo/>
                <HotelDetails/>
                <DateParts/>
                <button className=" mt-[40px] bg-gradient-to-r from-rose-400 to-sky-300 text-white rounded-md px-20 py-6 text-xl font-medium shadow-2xl shadow-red-700 hover:bg-gradient-to-r hover:from-red-600 hover:to-fuchsia-500 hover:shadow-fuchsia-800 hover:border border-slate-400" onClick={()=>Navigate('/Final')}>
                    Book
                    </button>
            </div>

        </div>
    );
}