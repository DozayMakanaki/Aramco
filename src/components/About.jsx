import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "swiper/css";
import Footer from "./Footer";

const About = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const teamMembers = [
    { name: "John Doe", title: "CEO & Founder", image: "https://via.placeholder.com/150" },
    { name: "Jane Smith", title: "Head of Operations", image: "https://via.placeholder.com/150" },
    { name: "Mike Johnson", title: "Lead Mortgage Advisor", image: "https://via.placeholder.com/150" }
  ];

  const slidingImages = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200"
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center text-center px-6 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 blur-[100px] -z-10"></div>

      {/* About Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-5xl space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900">About <span className="text-indigo-500">Us</span></h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          ARAMCO specializes in an array of mortgage and real estate products for San Diego homeowners...
        </p>
      </motion.div>

      {/* Our Work Section */}
      {/* <div className="mt-16 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Our Work</h2>
        <Swiper spaceBetween={20} slidesPerView={1.5} breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }} className="w-full">
          {slidingImages.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.img whileHover={{ scale: 1.05 }} src={image} alt={`Slide ${index}`} className="rounded-lg shadow-lg w-full max-w-xs" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      {/* Meet the Team Section */}
      <div className="mt-16 max-w-5xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Meet the <span className="text-pink-500">Team</span></h2>

        {/* <div className="hidden md:flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg text-center w-60">
              <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-3 border-4 border-gray-200" />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.title}</p>
            </motion.div>
          ))}
        </div> */}

        {/* SWIPER ON MOBILE */}
        <Swiper spaceBetween={10} slidesPerView={1} centeredSlides={true} grabCursor={true} loop={true} className="w-full md:hidden mt-4">
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg text-center w-60 mx-auto">
                <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-3 border-4 border-gray-200" />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.title}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Services Grid Section */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-16 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Purchase Loans</h2>
          <p className="text-gray-700 leading-relaxed">Owning your own home provides several benefits...</p>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Refinance</h2>
          <p className="text-gray-700 leading-relaxed">If you listen to Mehran Aram’s daily mortgage reports on the radio...</p>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Reverse Mortgages</h2>
          <p className="text-gray-700 leading-relaxed">The financial world has grown accustomed to the reverse mortgage...</p>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-gray-900">The Aramco Philosophy</h2>
          <p className="text-gray-700 leading-relaxed">The Aramco Group was founded in San Diego County in 1998...</p>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Putting Customers First</h2>
          <p className="text-gray-700 leading-relaxed">We pride ourselves on providing superior customer service...</p>
        </section>
      </motion.div>

      {/* Apply Button (Navigate to /apply) */}
      <motion.div whileHover={{ scale: 1.05 }} className="mt-12">
        <button
          onClick={() => navigate("/apply")} // Navigate to Form Page
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all"
        >
          Apply
        </button>
      </motion.div>

  
    </div>
  );
};

export default About;
