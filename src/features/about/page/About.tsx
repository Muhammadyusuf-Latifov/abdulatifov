
import { motion } from "framer-motion";
import rasm from "../../../shared/images/unchangesPhoto/IMAGE 2026-04-26 10:11:41.jpg"
export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-5 sm:p-8"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <img
            src={rasm}
            alt="profile"
            className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gray-500 hover:scale-110 transition duration-300"
          />
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-300 mb-8 text-sm sm:text-base"
        >
          I am a passionate SMM specialist who helps brands grow through
          creative content and smart strategies.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {["Frontend", "UI/UX", "Projects"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
              className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-lg shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Add your {item.toLowerCase()} details here.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-center text-gray-500 text-xs sm:text-sm"
        >
          © 2026 Abdulatifov Muhammadziyo
        </motion.div>
      </motion.div>
    </div>
  );
}
