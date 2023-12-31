import React, { useState } from 'react';

//icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

import { SiNextdotjs, SiFramer, SiTailwindcss } from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front-End developer',
        icons: [
          <FaHtml5 key={'gradient'} />,
          <FaCss3 key={'gradien'} />,
          <FaJs key={'gradients'} />,
          <FaReact key={'gradientd'} />,
          <SiNextdotjs key={'gradienta'} />,
          <SiFramer key={'gradient'} />,
          <SiTailwindcss key={'gradident'} />,
        ],
      },
      {
        title: 'Back-end developer',
        icons: [<FaNodeJs key={'gradqient'} />],
      },
    ],
  },

  {
    title: 'experience',
    info: [
      {
        title: 'Web Developer - Refocus Digital Academy (Bootcamp)',
        stage: '2022 - 2023',
      },
      {
        title: 'Web Developer Upwork Freelance',
        stage: '2023 - present',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Certificate of Admission for Refocus Web development',
        stage: '2023',
      },
    ],
  },
];

//counter
import Countup from 'react-countup';

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full relative overflow-hidden  bg-primary/30 py-32  text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]  "
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full overflow-y-auto flex flex-col items-center xl:flex-row gap-x-6 ">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 z-10"
          >
            I code my <span className="text-accent"> dreams into reality</span>,
            unlocking endless possibilities in the digital realm.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500] z-10 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px0"
          >
            As an aspiring young web developer, this portfolio reflects my
            months of dedicated learning and practice. With valuable skills and
            unwavering determination, I am eager to contribute and elevate your
            company, despite being a junior developer
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl z-10 xl:max-w-none mx-auto xl:mx-0 mb8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <Countup start={-1} end={1} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <Countup start={-1} end={1} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects done */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <Countup start={-1} end={15} duration={6} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects finished
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]  "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex
                      ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 cursor-pointer capitalize xl:text-lg relative after:h-[2px]   after:absolute after:-bottom-1 after:left-0'
                      : ' cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:bg-white after:absolute after:-bottom-1 after:left-0'
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start  ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 mb:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="whitespace-nowrap">{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
