//components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full  relative overflow-x-hidden overflow-y-auto bg-primary/30 py-36  flex items-center">
      <Circles />
      <div className="container  overflow-y-auto mx-auto">
        <div className="flex items-center flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex overflow-y-auto mt-[200px] xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Projects<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0  "
            >
              Welcome to my realm of front-end marvels! Each project showcases
              the culmination of creativity and coding expertise. Brace yourself
              to witness how ideas come to life as digital magic! 🚀✨
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* sliders */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
