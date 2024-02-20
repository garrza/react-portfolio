import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = (index, name, description, 
  tags, image, source_code_link) => {
    return (
      <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          }}
        className="retro-bg p-5 sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover"/>
          </div>
        </Tilt>
      </motion.div>
    )
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>my work</p>
        <h2 className={styles.sectionHeadText}>projects</h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
      variants={fadeIn("","", 0.1, 1)}
      className="mt-3 text-secondary text-[17px]
      max-w-3xl leading-[30px]">
        here are some of the projects i've worked on. 
        feel free to check them out on github.
      </motion.p>
      </div>

      <div
      className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
          {...project}
          index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "Works");