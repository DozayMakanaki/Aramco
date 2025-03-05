import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { ArrowLeft } from "lucide-react"; // ✅ Import Arrow Icon
import Form from "./Form"; // Import Form Component

const FormPage = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation function

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 relative bg-gray-50">
      
      {/* Arrow Button to Home */}
      <button 
        onClick={() => navigate("/")} 
        className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center text-gray-700 hover:text-blue-600 transition duration-300"
      >
        <ArrowLeft size={28} className="mr-2" />
        <span className="text-lg font-medium hidden sm:inline">Home</span>
      </button>

      {/* Form Container */}
      <div className="w-full max-w-lg p-6 sm:p-8 bg-white shadow-xl rounded-2xl border border-gray-200">
        <Form />
      </div>

    </div>
  );
};

export default FormPage;
