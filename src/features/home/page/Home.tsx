// import { memo } from 'react';
// import video from "../../../shared/video/IMG_3918.mp4"
// const Home = () => {
//   return (
//     <div>
//       <video
//         muted
//         loop
//         autoPlay
//         playsInline
//         className="rotate-90"
//         src={video}
//       />

//     </div>
//   );
// };

// export default memo(Home);
import { motion } from "framer-motion";
import { memo } from "react";

const PortfolioPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1600052309383-0a7fcbbd7f96"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
           Abdulatifov Muhammadziyo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-2xl mt-4 text-gray-300"
          >
           SMM Specialist | Web Developer | Graphic Designer
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container mx-auto px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          I’m a passionate software developer who loves creating clean and
          functional web experiences. Inspired by top performers, I strive to
          achieve excellence in every project I build.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 px-8">
          {["Project One", "Project Two", "Project Three"].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={`https://picsum.photos/600/400?random=${i + 1}`}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400">
                  A brief description of the project. Built with React,
                  TypeScript and Tailwind CSS.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Achievements</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            "🏆 10+ Completed Projects",
            "💼 3+ Years Experience",
            "🚀 100% Client Satisfaction",
          ].map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 w-64 shadow-md"
            >
              <p className="text-lg text-gray-200">{ach}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
          {[...Array(8)].map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/400/400?random=${i + 10}`}
              alt={`Gallery ${i}`}
              className="rounded-xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-10">
          Interested in collaborating or hiring? Let’s talk.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-gray-500 text-sm border-t border-gray-800">
        © 2025 Cristiano Dev Portfolio. All rights reserved.
      </footer>
    </div>
  );
};
export default memo(PortfolioPage);
