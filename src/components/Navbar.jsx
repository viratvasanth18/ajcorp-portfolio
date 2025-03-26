import React, { useState, useEffect } from "react";
import myImage from "../assets/Aj Corp Logo.png";
import "../animations.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const handleClick = (e, section) => {
        setActiveLink(section);

        if (window.innerWidth <= 768) {
            setMenuOpen(false); // Close menu on mobile
        } else {
            createBubbles(e);
        }
    };

    const createBubbles = (e) => {
        const link = e.target;
        const bubbleContainer = document.createElement("div");
        bubbleContainer.classList.add("bubble-container");

        for (let i = 0; i < 5; i++) {
            const bubble = document.createElement("div");
            bubble.classList.add("bubble");
            bubble.style.left =` ${Math.random() * 40 - 20}px`;
            bubble.style.top = `${Math.random() * 40 - 20}px`;
            bubble.style.animationDelay = `${Math.random() * 0.2}s`;
            bubbleContainer.appendChild(bubble);
        }

        link.appendChild(bubbleContainer);

        setTimeout(() => {
            link.removeChild(bubbleContainer);
        }, 500);
    };

    return (
        <nav className="font-[poppins] animate-slide-down fixed top-0 left-0 w-full bg-gradient-to-r from-[#05224C] to-gray-300 text-black shadow-md transition-all duration-300 z-50">
            <div className="px-6 py-3 flex items-center w-full justify-between">
                <div className="flex items-center space-x-2 ml-0">
                    <img src={myImage} alt="Logo" className="h-12 w-12 rounded-full" />
                    <span className="text-lg font-bold transition-colors duration-300 hover:text-blue-400 select-none text-white">
                     AJ CORP
                    </span>
                    {/* <span className="text-lg font-bold text-white select-none">A</span>
                    <span className="text-lg font-bold text-white select-none">J</span>
                    <span className="text-lg font-bold text-white select-none">C</span>
                    <span className="text-lg font-bold text-white select-none">O</span>
                    <span className="text-lg font-bold text-white select-none">R</span>
                    <span className="text-lg font-bold text-white select-none">P</span> */}
                </div>

                <button className="md:hidden text-black text-2xl ml-4" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✖" : "☰"}
                </button>

                <ul className="hidden md:flex space-x-6 items-center">
                    <li><a href="#home" className="hover:text-[#05224C] hover:border-b-2 pb-2 transition duration-500" onClick={(e) => handleClick(e, "home")}>Home</a></li>
                    <li><a href="#about" className="hover:text-[#05224C] hover:border-b-2 pb-2 transition duration-400" onClick={(e) => handleClick(e, "about")}>About</a></li>
                    <li><a href="#project" className="hover:text-[#05224C] hover:border-b-2 pb-2 transition duration-400" onClick={(e) => handleClick(e, "project")}>Project</a></li>
                    <li><a href="#services" className="hover:text-[#05224C] hover:border-b-2 pb-2 transition duration-400" onClick={(e) => handleClick(e, "services")}>Services</a></li>
                    <li><a href="#contact" className="hover:text-[#05224C] hover:border-b-2 pb-2 transition duration-400" onClick={(e) => handleClick(e, "contact")}>Contact</a></li>
                </ul>
            </div>

            {menuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#05224C] shadow-md sm:max-w-full">
                    <ul className="flex flex-col items-center space-y-2 py-4 text-white">
                        {["home", "about", "project", "services", "contact"].map((section) => (
                            <li key={section}
                                className={`w-3/4 text-center py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                                    activeLink === section ? "bg-white text-black font-bold" : "hover:bg-gray-200"
                                }`}
                            >
                                <a
                                    href={`#${section}`}
                                    className="block w-full h-full"
                                    onClick={(e) => handleClick(e, section)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
