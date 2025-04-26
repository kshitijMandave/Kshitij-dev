import kshitijProfile from "../../images/Kshitij-Img.webp";
import kshitijResume from "../../components/Hero/Kshitij_Mandave.pdf";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      delay: 0.5,
    },
  },
};

function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-col-reverse lg:flex-row-reverse">

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start mt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="pb-2 mb-5 text-4xl tracking-tighter lg:text-8xl"
              variants={textVariants}
            >
              Kshitij Mandave
            </motion.h2>

            {/* Typing animation */}
            <div className="relative bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'React Developer', 2000,
                  'JavaScript Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <span className="absolute -right-2 animate-blink text-stone-400 text-3xl">
                |
              </span>
            </div>

            {/* No motion on paragraph now */}
            <p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-center lg:text-left"
            >
              Hi, I'm Kshitij, a MERN Stack developer with a BCA background. I
              have hands-on experience in building responsive web apps using
              MongoDB, Express.js, React, and Node.js. I enjoy turning ideas
              into simple, smooth, and user-friendly websites.
            </p>

            <motion.a
              href={kshitijResume}
              download
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-sky-700 hover:text-white rounded-2xl p-4 text-sm text-stone-800 font-medium mb-10 transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={kshitijProfile}
              alt="Kshitij Mandave"
              className="border border-stone-900 rounded-3xl"
              height={650}
              width={650}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
