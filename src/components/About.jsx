import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "swiper/css";
import Footer from "./Footer";
import TestimonialsSection from "./TestimonialsSection";

const About = () => {
  const navigate = useNavigate(); // Initialize navigate function

 

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

      
    <motion.div className="w-full flex justify-center mt-12">
  <TestimonialsSection />
</motion.div>

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
          New Employee Application
        </button>
      </motion.div>

  
    </div>
  );
};

export default About;
