import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";
import "../animations.css";
export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS animations
  }, []);

  return (
    <section id="contact">
      <div
        className="flex flex-col font-[Poppins] md:flex-row md:gap-10 items-center bg-gradient-to-r from-gray-300 to-[#05224C]"

      >
        {/* Left Section - Image and Title */}
        <div
          className="flex flex-col gap-5 md:w-1/2 justify-center items-center mt-7 md:mt-0"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img
            src="./logo.jpg"
            alt="Aj Corporation"
            className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-full shadow-lg transition duration-500 transform hover:scale-110"
          />
          <h3 className="text-3xl md:text-4xl font-bold text-center text-black">
            AJ CORPORATION
          </h3>
        </div>

        {/* Right Section - Contact Info */}
        <div
          className="md:w-1/2 mt-10 md:mt-24 text-center"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="mb-5">
            <h1 className="text-3xl md:text-4xl font-bold">Thank You!</h1>
            <h1 className="text-3xl md:text-4xl text-white font-bold">
              Contact Us
            </h1>
          </div>
          <div className="space-y-8">
            {/* Phone */}
            <div
              className="flex flex-col items-center"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <a href="tel:+917904821011">
                <MdOutlinePhoneInTalk
                  size={40}
                  className="phone-ring border-black-2 rounded-full p-1.5 bg-[#05224C] text-white mb-2 cursor-pointer transition-all"
                />
              </a>
              <h2 className="text-xl text-white font-medium">Phone</h2>
              <h2 className="text-xl text-white font-medium mb-2">
                +91 7904821011
              </h2>
              <h2 className="text-xl text-white font-medium">
                +91 9025947556
              </h2>
            </div>

            {/* Email   <AiOutlineMail */}
            <div
              className="flex flex-col items-center"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <a
                href="mailto:aj.hr.solutions2905@gmail.com?subject=Inquiry from Website&body=Hello,%0A%0AI would like to get in touch with you regarding..."
                target="_blank"
                rel="noopener noreferrer"
                className="location-pulse border-black-2 rounded-full p-1.5 bg-[#05224C] text-white mb-2"
                onClick={(e) => {
                  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
                  if (!isMobile) {
                    // Prevent default `mailto:` behavior on desktop
                    e.preventDefault();
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=aj.hr.solutions2905@gmail.com&su=Inquiry from Website&body=Hello,%0A%0AI would like to get in touch with you regarding...",
                      "_blank"
                    );
                  }
                }}
              >
                <AiOutlineMail size={25} />
              </a>
              <h2 className="text-xl text-white font-medium">Mail</h2>
              <h2 className="text-xl text-white font-medium">
                aj.hr.solutions2905@gmail.com
              </h2>
            </div>

            {/* Address */}
            <div
              className="flex flex-col items-center mb-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <a
                href="https://maps.app.goo.gl/Q7cN2J9mpzM718wt8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLocationSharp
                  size={40}
                  className="location-pulse border-black-2 rounded-full p-1.5 bg-[#05224C] text-white mb-2"
                />
              </a>
              <h2 className="text-xl text-white font-medium">Address</h2>
              <h2 className="text-xl text-white font-medium">
                Kumbakonam, India
              </h2>
            </div>
          </div>
        </div>
        <a
          href="#home"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 
         bg-[#05224C] border-2 border-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
         flex items-center justify-center rounded-full shadow-lg 
         transition-all duration-300 z-[9999] animate-bubble"
          style={{
            bottom: "calc(env(safe-area-inset-bottom, 20px) + 10px)",
            right: "20px",
          }}
        >
          <FaAngleDoubleUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          <style>
            {`
          @keyframes bubble {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
          .animate-bubble {
            animation: bubble 1.5s infinite ease-in-out;
          }
        `}
          </style>
        </a>
      </div>
    </section>
  );
}
