import React from "react";
import logo from "./images/HotelLogo.jpeg";
import user from "./images/userLOGO.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigation =[
        {name:"Home",href:"/" , current:true },
        {name:"Browse Hotels",href:"/Browse" , current:false },

    ];


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const[currentPage , setCurrentPage] = useState("Home");

    return(
        <div className="mx-auto bg-gray-700 bg-opacity-80 rounded-md  outline outline-offset-0 outline-gray-800 py-2.5 px-10 top-2">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="ml-1 h-8 w-auto"
                    src={logo}
                    alt="Here lies lOGO"
                  />
                </div>
            <div className=" ml-20 flex space-x-10">
                {navigation.map((item)=>(
                    <a key={item.name}
                    href={item.href}
                    onClick={()=>setCurrentPage(item.name)}
                    
                    className={classNames(
                        currentPage === item.current? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg shadow-gray-900":"text-white hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-white hover:shadow-lg hover:shadow-gray-800 ",
                        "rounded-md px-3 py-2 text-xl font-medium drop-shadow-2xl"
                    )}
                    >
                    {item.name}
                    </a>
                ))}
            </div>
        </div>
            <div className="flex items-center relative ml-3">
            <button className="-mt-9 flex absolute right-5  items-center bd-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src={user}
                alt="SomeImage"
                />
                </button>
            </div>
        </div>
    );
}