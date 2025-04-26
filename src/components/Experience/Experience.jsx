import { EXPERIENCES } from "../../constants";
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => {
          return (
            <motion.div 
              key={index} 
              className="flex flex-wrap mb-12 max-w-5xl w-full"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="lg:w-1/4 mb-4 lg:mb-0"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-lg font-medium text-stone-500">{experience.year}</p>
              </motion.div>

              <motion.div 
                className="w-full max-w-xl lg:w-3/4"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="mb-2 font-semibold text-xl">
                  {experience.role} -{" "}
                  <span className="text-sm text-stone-500">{experience.company}</span>
                </h3>
                <p className="mr-2 mt-4 rounded bg-stone-900 px-3 py-2 text-sm font-medium text-stone-300">
                  {experience.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
