import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Commercial = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      animate="show"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-6"
    >
      <div className="max-w-5xl bg-white p-10 shadow-lg rounded-lg">
        <motion.h1 
          variants={textVariant(0.3)}
          className="text-4xl font-bold text-gray-900 text-center"
        >
          Commercial Mortgage Solutions
        </motion.h1>
        
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600 mt-4 text-lg text-center"
        >
          Unlock financial opportunities with our tailored commercial mortgage options.
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          className="mt-8 space-y-4"
        >
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Tailored Loan Options</h2>
            <p className="text-gray-600 mt-2">We offer customized commercial mortgage solutions to fit your business needs.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Low Interest Rates</h2>
            <p className="text-gray-600 mt-2">Enjoy competitive rates and flexible repayment terms.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Fast Approval Process</h2>
            <p className="text-gray-600 mt-2">Get approved quickly and start investing in your commercial property.</p>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="mt-8 flex justify-center"
        >
          <a 
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Go Back Home
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Commercial;
