import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import image from "./details.jsx"
import { useNavigate } from "react-router-dom";



function EntryPart(){
    return(
        <div>
            <div className="flex flex-row justify-between space-x-10   bg-transparent h-20 w-3/4 mx-auto mt-10  ">
                <div className="w-full mt-1">
                    <input type="text" placeholder="Enter Destination" className="ml-3 block text-center text-black w-full rounded-md border-0 bg-gradient-to-r from-green-100 to-green-300 py-6"/>
                </div>
                <div className="w-full mt-1 ">
                    <input type="date" placeholder="Check-In Date" className="ml-2 block text-center w-full rounded-md border-0 bg-gradient-to-r from-green-100 to-green-300 py-6 "/>
                </div>
                <div className="w-full mt-1">
                    <input type="date" placeholder="Check-Out Date" className="ml-3 block text-center w-full rounded-md border-0 bg-gradient-to-r from-green-100 to-green-300 py-6"/>
                </div>
            </div>
        </div>
    );
}

function TitlePart(){
    return(
        <div className="h-auto w-3/4 mx-auto justify-between space-x-5 flex flex-row items-center mt-20 text-white bg-transparent ">
            <div className="w-full ">
                <h1 className="text-4xl text-center bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent font-medium">Popular Destinations</h1>
            </div>
            <div className="w-full">
                <h1 className="text-4xl text-center bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent font-medium">Check-In</h1>
            </div>
            <div className="w-full">
                <h1 className="text-4xl text-center bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent font-medium">Check-Out</h1>
            </div>
        </div>
    );
}

function RotateImage(){
    const images=image;
    const [currentImage , setCurrentImage] = useState(null);
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCurrentImage(images[Math.floor(Math.random()*images.length)]);
        },2000)
        return()=>clearInterval(intervalId)
    },[])
    return(
        <div className="fixed top-16 left-0 right-0 w-auto h-auto -z-10 border-1 border-black">
            <img className="object-cover w-full h-full" src={currentImage} />
        </div>
    )
}




export default function HomePage() {

    const Navigate = useNavigate();

    return(
    <>
        <NavBar/>
        <section>

            <div className="bg-transparent , p-auto mt-20">
                <RotateImage/>
                <h1 className="bg-gradient-to-r from-red-600 to-fuchsia-500 bg-clip-text text-transparent text-6xl ml-40 font font-medium">Trip <span classname="text-red">Snatcher</span></h1>
                <p className="text-white text-3xl ml-40 mt-3">Find the best hotels and attractions for your next trip</p>
            </div>
            <TitlePart/>
            <EntryPart/>
            <div className="mt-20 flex justify-center items-center">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md px-20 py-6 text-xl font-medium shadow-2xl shadow-blue-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-fuchsia-500 hover:shadow-fuchsia-800 hover:border border-slate-400" onClick={()=>Navigate("/Browse")}>
                Search
                </button>
                </div>
        </section>
    </>
    );
}