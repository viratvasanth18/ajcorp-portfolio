import React from "react";
// import Details from "./Details";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about"
      className="font-[Inter] py-10 px-6 bg-gradient-to-r from-gray-300 to-[#05224C]"
      data-aos="fade-down "  // Animation effect
    >
      <div
        className="max-w-5xl mx-auto bg-white text-black p-10 mb-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        data-aos="zoom-in" // Another effect
      >
        <h2
          className="text-4xl font-extrabold text-center font-[Montserrat] text-gray-900 mb-6"
          data-aos="fade-left"
        >
          About AJ Corporations
        </h2>
        <p className="text-lg font-[Inter] text-gray-700 leading-relaxed mb-4" data-aos="fade-right">
          <span className="text-blue-600 font-semibold">AJ Corporations</span> is an off-rolling startup dedicated to delivering innovative IT solutions. 
          Our mission is to foster talent, drive advancements, and bridge the gap between emerging trends and practical applications.
        </p>
        <p className="text-lg font-[Inter] text-gray-700 leading-relaxed" data-aos="fade-right">
          We cultivate an environment where collaboration, innovation, and professional growth thrive. 
         <a href="https://docs.google.com/forms/d/e/1FAIpQLScNX2nIQ23DgQy8o2zmNrIMtB0eqYFIrwwKtuV28T2CDD_W3Q/viewform?usp=header"><span className="text-blue-500 font-semibold cursor-pointer">Join Us</span></a> in making a lasting impact in the industry.
        </p>
      </div>

      {/* < Details/>  */}

    <div className="min-h-screen py-12 px-6" data-aos="fade-left" >
          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white text-black p-8 rounded-lg shadow-md mb-10 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-center  font-[Montserrat] mb-4">
              Our Mission
            </h2>
            <h2 className="text-3xl font-bold text-center text-blue-500 font-[Montserrat] mb-4">
              Empowering Businesses Through Technology
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-lg font-[Inter] text-gray-700">
              <li>
                <strong>Innovative Solutions:</strong> We deliver cutting-edge IT
                solutions that enhance productivity and efficiency.
              </li>
              <li>
                <strong>Exceptional Service:</strong> Our experts provide
                personalized support, addressing client challenges.
              </li>
              <li>
                <strong>Continuous Improvement:</strong> We invest in R&D to bring
                the latest technologies to our clients.
              </li>
            </ul>
          </motion.section>
    
          {/* Vision Section */}
          <section
            className="max-w-4xl mx-auto bg-white text-black p-8 rounded-lg shadow-md mb-10 hover:shadow-2xl transition-all duration-300"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold text-center font-[Montserrat] mb-4">
              Our Vision
            </h2>
            <h2 className="text-3xl font-bold text-center text-blue-500 font-[Montserrat] mb-4">
              Revolutionizing IT Solutions
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-lg font-[Inter] text-gray-700">
              <li>
                <strong>Pioneering Innovation:</strong> We push boundaries to
                develop groundbreaking IT solutions.
              </li>
              <li>
                <strong>Transformative Impact:</strong> Our solutions empower
                businesses to thrive in the digital age.
              </li>
              <li>
                <strong>Sustainable Growth:</strong> We aim for long-term success
                through reliable partnerships.
              </li>
            </ul>
          </section>
    
          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl px-5 mx-auto text-center py-12"
            data-aos="zoom-in"
          >
            <h2 className="text-3xl font-bold font-[Montserrat] mb-8" data-aos="fade-up">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity",
                  img: "https://img.icons8.com/ios-filled/50/000000/handshake.png",
                  text: "We uphold ethical standards, fostering trust and accountability.",
                },
                {
                  title: "Innovation",
                  img: "https://img.icons8.com/ios-filled/50/000000/idea.png",
                  text: "We embrace continuous learning to provide pioneering solutions.",
                },
                {
                  title: "Customer-Centricity",
                  img: "https://img.icons8.com/ios-filled/50/000000/customer-support.png",
                  text: "We exceed client expectations with personalized services.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-6 shadow-md rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="flip-left"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-4"
                    data-aos="fade-down"
                  />
                  <h3
                    className="text-xl font-semibold text-blue-600 font-[Montserrat]"
                    data-aos="fade-right"
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-600 mt-2 font-[Inter]"
                    data-aos="fade-right"
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
    
          {/* Goals Section */}
          <section className="px-6" data-aos="fade-up">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black font-[Montserrat] mb-8 py-5">
                Our Goals
              </h2>
              <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
                {[
                  {
                    title: "Technology Leadership",
                    img: "/settings.png",
                    text: "Establish AJ Corporations as an IT innovation leader.",
                  },
                  {
                    title: "Business Growth",
                    img: "/statistics.png",
                    text: "Expand market presence with 30% year-over-year growth.",
                  },
                  {
                    title: "Customer Excellence",
                    img: "/customer-review.png",
                    text: "Maintain a 95% customer satisfaction rate.",
                  },
                  {
                    title: "Innovation Impact",
                    img: "/lightbulb.png",
                    text: "Improve client operations through innovative IT solutions.",
                  },
                ].map((goal, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} // Smooth zoom effect on hover
                    className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-2xl transition-all duration-300 transform"
                    data-aos="fade-up"
                  >
                    <div data-aos="fade-down">
                      <img
                        src={goal.img}
                        alt={goal.title}
                        className="w-12 h-12 mx-auto mb-4"
                      />
                      <h3 className="text-xl font-semibold text-blue-600 font-[Montserrat]">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 mt-2 font-[Inter]">{goal.text}</p>
                    </div>
                  </motion.div>    
                ))}
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}

export default About;
