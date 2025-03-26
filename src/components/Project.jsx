import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "AI Annotation",
    description:
      "The process of labeling or tagging data (like text, images, videos, or audio) to enable AI models to learn and process information effectively, much like teaching a human to recognize patterns.",
    image: "./ai.jpg",
    link: "#",
  },
  {
    title: "Lidar Annotation",
    description:
      "LiDAR annotation involves labeling 3D point cloud data to identify objects like cars, pedestrians, and buildings. It helps AI models understand spatial environments for applications like autonomous driving and robotics.",
    image: "./liader.jpg",
    link: "#",
  },
  {
    title: "AI4 Bharat",
    description:
      "AI for Bharat is an initiative focused on developing AI solutions tailored to India's diverse languages and needs. It aims to enhance accessibility, inclusivity, and innovation in sectors like healthcare, agriculture, and education.",
    image: "./ai4bclogo.png",
    link: "#",
  },
];

function Project() {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS animations
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-300 to-[#05224C]">
      <section id="project" className="py-12 px-6 " data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center font-[Montserrat]  mb-20 ">Our Projects</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-duration="2000"
            className="relative flex flex-col items-center justify-center p-6  bg-white border-2 border-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-300 group"
          >
            {/* Hover Background */}
            <div className="absolute bottom-[-100%] w-full h-full bg-[#05224C] transition-all duration-500 group-hover:bottom-0 z-0"></div>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-24 h-24 object-cover rounded-full border-2 border-blue-600 relative z-10"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mt-4 relative z-10 group-hover:text-white text-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 relative z-10 group-hover:text-white text-center px-4">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
}

export default Project;
