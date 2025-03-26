// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Services() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const services = [
//     {
//       title: "IT Consulting",
//       description: "Expert guidance to optimize your IT infrastructure and business strategy.",
//       icon: "https://img.icons8.com/ios-filled/50/000000/consultation.png",
//       animation: "fade-up",
//     },
//     {
//       title: "Software Development",
//       description: "Custom software solutions tailored to meet your business needs.",
//       icon: "https://img.icons8.com/ios-filled/50/000000/source-code.png",
//       animation: "fade-up",
//     },
//     {
//       title: "Cybersecurity",
//       description: "Protect your digital assets with our advanced security solutions.",
//       icon: "https://img.icons8.com/ios-filled/50/000000/privacy.png",
//       animation: "fade-up",
//     },
//     {
//       title: "Networking",
//       description: "Seamless and secure networking solutions to enhance your business connectivity.",
//       icon: "https://img.icons8.com/ios-filled/50/000000/network.png",
//       animation: "fade-up",
//     },
//   ];

//   return (
//     <section id="services" className="font-[Inter] py-12 px-6 bg-gradient-to-r from-gray-300 to-[#05224C]">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2
//           className="text-3xl font-bold text-blue  font-[Montserrat] mb-8"
//           data-aos="fade-up"
//         >
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               data-aos={service.animation}
//               data-aos-delay={index * 200}
//               className="relative flex flex-col items-center justify-center p-6 border-2 bg-white border-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-300 group"
//             >
//               {/* Hover Background */}
//               <div className="absolute bottom-[-100%] w-full h-full bg-[#05224C] text-white transition-all duration-500 group-hover:bottom-0 z-0"></div>

//               {/* Icon */}
//               <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4 relative z-10 group-hover:text-white"/>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-blue-600 font-[Montserrat] relative z-10 group-hover:text-white">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 font-[Inter] mt-2 relative z-10 group-hover:text-white text-center px-4">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "IT Consulting",
      description: "Expert guidance to optimize your IT infrastructure and business strategy.",
      icon: "https://img.icons8.com/ios-filled/50/000000/consultation.png",
      animation: "fade-up",
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to meet your business needs.",
      icon: "https://img.icons8.com/ios-filled/50/000000/source-code.png",
      animation: "fade-up",
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our advanced security solutions.",
      icon: "https://img.icons8.com/ios-filled/50/000000/privacy.png",
      animation: "fade-up",
    },
    {
      title: "Networking",
      description: "Seamless and secure networking solutions to enhance your business connectivity.",
      icon: "https://img.icons8.com/ios-filled/50/000000/network.png",
      animation: "fade-up",
    },
  ];

  return (
    <section id="services" className="font-[Inter] py-12 px-6 bg-gradient-to-r from-gray-300 to-[#05224C]">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl font-bold text-black font-[Montserrat] mb-8"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={service.animation}
              data-aos-delay={index * 200}
              className="relative flex flex-col items-center justify-center p-6 border-2 bg-white border-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 group"
            >
              {/* Hover Background */}
              <div className="absolute bottom-[-100%] w-full h-full bg-[#05224C] transition-all duration-500 group-hover:bottom-0 z-0"></div>

              {/* Icon with Invert Effect on Hover */}
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mb-4 relative z-10 transition-all duration-300 group-hover:invert"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-600 font-[Montserrat] relative z-10 group-hover:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-[Inter] mt-2 relative z-10 group-hover:text-white text-center px-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;