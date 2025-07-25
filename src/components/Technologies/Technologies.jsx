import {
  SiHtml5,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiPostman,
  SiNestjs,
  SiExpress,
  SiReactrouter,
} from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

// Floating + Rotate + Hover Animation
const iconVariants = (duration) => ({
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -20, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
});

function Technologies() {
  return (
    <div className="pb-24">
      {/* Heading with entrance animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* Icons grid */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          title="HTML"
          className="p-4 cursor-pointer"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiHtml5 className="text-7xl text-red-500" />
        </motion.div>

        <motion.div
          title="CSS"
          className="p-4 cursor-pointer"
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiCss3 className="text-7xl text-blue-700" />
        </motion.div>

        <motion.div
          title="JavaScript"
          className="p-4 cursor-pointer"
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          title="TypeScript"
          className="p-4 cursor-pointer"
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiTypescript className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          title="React"
          className="p-4 cursor-pointer"
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiReact className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          title="Next.js"
          className="p-4 cursor-pointer"
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiNextdotjs className="text-7xl text-white" />
        </motion.div>

        <motion.div
          title="React Router"
          className="p-4 cursor-pointer"
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiReactrouter className="text-7xl text-purple-400" />
        </motion.div>

        <motion.div
          title="Redux"
          className="p-4 cursor-pointer"
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiRedux className="text-7xl text-purple-400" />
        </motion.div>

        <motion.div
          title="TailwindCSS"
          className="p-4 cursor-pointer"
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          title="NodeJs"
          className="p-4 cursor-pointer"
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          title="siExpress"
          className="p-4 cursor-pointer"
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiExpress className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          title="NestJS"
          className="p-4 cursor-pointer"
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiNestjs className="text-7xl text-red-700" />
        </motion.div>

        <motion.div
          title="MongoDB"
          className="p-4 cursor-pointer"
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>

        <motion.div
          title="aws"
          className="p-4 cursor-pointer"
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <FaAws className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          title="postman"
          className="p-4 cursor-pointer"
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <SiPostman className="text-7xl text-red-700" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
