import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SuccefullyPopUp = ({ onClose, status, bookStatus }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-lg p-8 text-center w-[90%] max-w-sm"
      >
        <CheckCircle2 className="text-green-500 mx-auto mb-4" size={60} />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {status} 
        </h2>
        <p className="text-gray-600 mb-6">
          {bookStatus}
        </p>
        <button
          onClick={onClose}
          className="bg-[#04DBC0] hover:bg-[#03c0a9] text-white font-medium py-2 px-4 rounded-lg"
        >
          OK
        </button>
      </motion.div>
    </div>
  );
};

export default SuccefullyPopUp;
