

import React from "react";
import myImage from "../assets/logo.jpg";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../animations.css";

// import { useEffect } from "react";

function Home() {
  return (
    <section id="home">
      <div className="pt-16 overflow-hidden relative bg-gradient-to-r from-gray-300 to-[#05224C]">
        <div className="absolute inset-0 bg-gradient-to-br from-white-50 to-white-100 animate-bg-wave"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-around font-[Poppins] min-h-screen bg-transparent p-6 text-center md:text-left">
          <div className="md:w-1/2 flex justify-center items-center animate-slide-down">
            <img
              src={myImage}
              alt="AJ CORP Logo"
              className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-full shadow-lg transition duration-800 transform hover:scale-110"
            />
          </div>

          <div className="md:w-1/2 md:mb-0 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              AJ CORPORATION
            </h3>
            <p className="text-2xl md:text-3xl mb-6 text-black-700 text-white font-bold">
              Transforming radiant thoughts into astonishing innovations
            </p>

            <div className="socical-icons sm:ml-5">
              <span className="icon-circle"></span>

              <a href="https://www.linkedin.com/in/aj-corps-753132358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" id="li" className="icon">
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/_aj.corp_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="icon"
                id="in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/share/18bAQv3poh/" id="fb" className="icon">
                <FaFacebook />
              </a>
              <a
                href="https://x.com/AjCorp2903?t=WP1bcYUs6ttmTZo-MdS_ow&s=08"
                className="icon"
                id="tw"
              >
                <FaXTwitter  size={25}/>
              </a>
            </div>

           
          </div>
        </div>
      </div>
      {/* <hr className="border-[#05224C]" /> */}
    </section>
  );
}

export default Home;
