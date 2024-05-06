import React from "react";
import Navbar from "./NavBar";
import { useState } from "react";
import hot1 from "./images/Hotel1.jpg";
import hot2 from "./images/Hotel2.jpeg";
import hot3 from "./images/Hotel3.jpeg";
import hot4 from "./images/Hotel4.jpeg";
import { useNavigate } from "react-router-dom";

const hotels = [
    {
        name: "Hotel 1",
        location: "Location 1",
        price: "$100",
        image: hot1
    },
    {
        name: "Hotel 2",
        location: "Location 2",
        price: "$200",
        image: hot2
    },
    {
        name: "Hotel 3",
        location: "Location 3",
        price: "$300",
        image: hot3
    },
    {
        name: "Hotel 3",
        location: "Location 3",
        price: "$300",
        image:hot4
    }
];

function HotelPart({hotel})
{
    const Navigate = useNavigate();
    return(
        <div className="grid grid-cols-4 gap-5 bg-green-600 bg-opacity-50 rounded-md mt-5 w-full mx-3 h-40  shadow-xl shadow-green-900 hover:shadow-xl hover:bg-opacity-75 text-white cursor-pointer" onClick={()=>Navigate("/Book")}>
            <div className="col-span-1 rounded-md">
                <img src={hotel.image} alt="HotelImage" className="h-35 w-40 mt-6 ml-3 rounded-xl shadow-lg shadow-green-900"/>
            </div>
            <div className="rounded-md col-span-2">
                <h1 className=" bg-gradient-to-r from-red-600 to-yellow-300 bg-clip-text text-transparent text-4xl font-medium text-center">{hotel.name}</h1>
                <p className="text-center font-mono mt-4 text-2xl">{hotel.location}</p>
                <p className="text-center text-3xl">{hotel.price}</p>
            </div>
        </div>
    );
}

export default function BrowseHotels(){
    return(
        <div className="bg-gray-900">
        <Navbar/>
        <div className=" grid grid-rows-4 gap-3 h-screen w-screen  mt-2 mx-3  size-64  bg-gradient-to-b from-gray-400 to-green-200 rounded-xl ">
                {hotels.map(hotel=>(
                    <HotelPart key={hotel.name} hotel={hotel}/>
                
                ))}
        </div>
        </div>
    )
}