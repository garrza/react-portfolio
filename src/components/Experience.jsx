import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
  contentStyle={{background: '#1d1836', color: "#fff"}}
  contentArrowStyle={{borderRight: "7px solid #1d1836"}}
  date={experience.date}
  iconStyle={{background: '#FFFFFF', boxShadow: '0 0 0 4px #1d1836'}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon} alt={experience.title} className="w-[60%] h-[60%] object-contain"/>
    </div>
  }>
    <div>
      <h3 className="text-white text-[24px]">
        {experience.title}
      </h3>
      <p className="text-[16px]
      text-yellow"
      style={{margin:0}}>
      {experience.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={index} className="text-[16px] text-white">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>what i have done so far</p>
        <h2 className={styles.sectionHeadText}>work experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience");