import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600">✅ Application Successful!</h1>
        <p className="mt-2 text-gray-700">Your application has been submitted successfully.</p>
        <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
