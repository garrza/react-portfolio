import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      w-full retro-bg p-1px>
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="retro-bg py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col rounded-2xl">
          <img src={icon} alt={title} className="h-16"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>overview</h2>
      </motion.div>
      <motion.p
      variants={fadeIn("","", 0.1, 1)}
      className="empty-4 text-secondary text-[17px] max-w-3xl leading[30px]">
        my name is ramiro garza, i'm a fullstack developer from mexico.
        with a focus on cybersecurity, my goal is to craft efficient solutions
        that not only protect individuals but also bridge the gap
        between technology and humans. i thrive on the challenge of 
        creating impactful, user-centric solutions that enhance digital 
        security while ensuring a positive experience for people.
      </motion.p>
      <div className="empty-10 flex flex-wrap gap-5 p-10 justify-around	">
        {services.map((service, index) => {
          return (
            <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}/>
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");