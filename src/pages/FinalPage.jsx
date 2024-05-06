import React from "react";
import { useNavigate } from "react-router-dom";

export default function FinalPage(){
    const Navigate = useNavigate();
    return(
        <div className="bg-gray-700 -mt-3">
            <div className="px-6 py-[276px]  mx-1 rounded-xl bg-opacity-75">
                <h1 className="text-8xl text-center  bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent font-medium mt-20">Thank You For Booking</h1>
                <center><button className="mt-20  bg-gradient-to-r from-rose-400 to-sky-300 text-white rounded-md px-20 py-6 text-xl font-medium shadow-2xl shadow-red-700 hover:bg-gradient-to-r hover:from-red-600 hover:to-fuchsia-500 hover:shadow-fuchsia-800 hover:border border-slate-400" onClick={()=>Navigate("/")}>Home</button>
                </center>
            </div>
        </div>
    );
}