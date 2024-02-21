import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { githubpixel, linkpixel } from "../assets";

const emailjsServiceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const emailjsTemplateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const emailjsPublicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsServiceId,
        emailjsTemplateId,
    {
      from_name: form.name,
      to_name: "Ramiro Garza",
      from_email: form.email,
      to_email: "garza.ramirov@gmail.com",
      message: form.message,
    },
    emailjsPublicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("thank you. i will get back to you as soon as possible!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("something went wrong. please try again!");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} blue-txt`}>contact me</h3>

        <div
        className="mt-7 flex gap-5 items-center">
          <button
          className="retro-yellow italic py-2 px-5 rounded-xl outline-none w-fit text-black shadow-md shadow-primary"
          onClick={() => window.open("https://drive.google.com/file/d/17238hO2waX5ysYSCPqICShZtqV-6F8PZ/view?usp=sharing")}
          >
            Download my resume
          </button>
          <img
            src={githubpixel}
            alt="github"
            className="w-8 h-8 cursor-pointer"
            onClick={() => window.open("https://github.com/garrza")}
            />
          <img
            src={linkpixel}
            alt="linkedin"
            className="w-8 h-8 cursor-pointer"
            onClick={() => window.open("https://www.linkedin.com/in/ramiro-garza-villarreal/")}
            />
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className='retro-bg py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className='retro-bg py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='what would you like to say?'
              className='retro-bg py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='retro-bg py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");