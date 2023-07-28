//component
import Circles from '../../components/Circles';

//emailJs
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

//icons
import { BsArrowRight } from 'react-icons/bs';

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../variants';

const Contact = () => {
  const [text, setText] = useState('');
  const [gmail, setGmail] = useState('');
  const [subject, setSubject] = useState('');
  const [massage, setMassage] = useState('');

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setText('');
    setGmail('');
    setSubject('');
    setMassage('');

    emailjs
      .sendForm(
        'service_14by2v4',
        'template_zj82vmk',
        form.current,
        'HAXxEwOWshEki8RqX'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('sent');
          alert('massage has been sent');
        },
        (error) => {
          console.log(error.text);
          console.log('not sent');
          alert('failed to sent the massage');
        }
      );
  };

  return (
    <div className="min-[]:-h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center min-h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto "
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="name"
                className="input"
                name="from_name"
              />
              <input
                onChange={(e) => setGmail(e.target.value)}
                value={gmail}
                type="email"
                placeholder="email"
                className="input"
                name="email"
              />
            </div>
            <input
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              type="text"
              placeholder="subject"
              className="input"
              name="subject"
            />
            <textarea
              onChange={(e) => setMassage(e.target.value)}
              value={massage}
              placeholder="message"
              className="textarea"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50  max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group "
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
