import {NavLink} from "react-router-dom";
import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaFileMedical, FaGear,FaHouseMedicalCircleCheck, FaUserDoctor, FaUserNurse} from "react-icons/fa6";

import {FaSignOutAlt} from "react-icons/fa";
import {RiMenu3Line} from "react-icons/ri";



export const Navigation = () => {

    const [open, setOpen] = useState(true);

    return (
        <section className="flex gap-3 bg-purple-500">
            {/* Sidebar container */}
            <div
                className={`z-[999] h-screen ${open ? 'w-64' : 'w-28'} duration-500 text-gray-100 px-4 md:relative fixed top-0`}>
                {/* Logo Section */}

                <div className="py-3 flex justify-end">
                    <RiMenu3Line size={24} className="cursor-pointer" onClick={() => setOpen(!open)}/>
                </div>

                <div className="flex justify-center items-center font-medium border-b border-gray-300 py-3 px-4">
                    <img
                        src="/src/images/LOGO.png"
                        alt="Logo"
                        width={open ? 180 : 180}
                        className="transition-all duration-300"
                    />
                </div>


                <div className="flex flex-col h-full">
                    <ul className="whitespace-pre px-3 text-[0.9rem] py-5 flex flex-col gap-3 font-bold overflow-x-hidden">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-violet-400 text-blue-950 shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-violet-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                style={{fontFamily: "'Ubuntu', sans-serif", textDecoration: "none",color: "white"}}>
                                <AiOutlineAppstore size={24} className="min-w-max"/>Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/customer" className={({isActive}) =>`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-violet-400 text-blue-950 shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-violet-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{fontFamily: "'Ubuntu', sans-serif", textDecoration: "none",color: "white"}}>
                                <FaHouseMedicalCircleCheck  size={24} className="min-w-max"/>Department
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cakes" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-violet-400 text-blue-950 shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-violet-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{fontFamily: "'Ubuntu', sans-serif", textDecoration: "none",color: "white"}}>
                                <FaUserDoctor size={24} className="min-w-max"/>Doctor
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/orders" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-violet-400 text-blue-950 shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-violet-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{fontFamily: "'Ubuntu', sans-serif", textDecoration: "none",color: "white"}}>
                                <FaUserNurse size={24} className="min-w-max"/>Nurse

                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/report" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-violet-400 text-blue-950 shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-violet-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{fontFamily: "'Ubuntu', sans-serif", textDecoration: "none",color: "white"}}>
                                <FaFileMedical  size={24} className="min-w-max"/>Medical Report
                            </NavLink>
                        </li>

                        <br/>
                        <li>
                            <NavLink to="/setting" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-violet-400 text-blue-950 shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-violet-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{fontFamily: "'Ubuntu', sans-serif", textDecoration: "none",color: "white"}}>
                                <FaGear  size={24} className="min-w-max"/>
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/logout" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-violet-400 text-blue-950 shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-violet-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{fontFamily: "'Ubuntu', sans-serif", textDecoration: "none",color: "white"}}>
                                <FaSignOutAlt size={24} className="min-w-max"/>
                                Log Out
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
