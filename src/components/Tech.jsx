import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>how i have worked so far</p>
      <h2 className={styles.sectionHeadText}>technical skills</h2>
    </motion.div>

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div key={index} className="w-28 h-28">
          <BallCanvas icon={tech.icon}/>
          <p className="text-center text-white">{tech.name}
          </p>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")