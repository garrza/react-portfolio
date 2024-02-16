import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
function HOC(){
    return(
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.paddingX} relative max-w-7xl mx-auto z-0 pt-20`} 
        >
            <span className='hash-span' id={idName}>
                &nbsp;
                <Component/>
            </span>
        </motion.section>
    )
}


export default SectionWrapper;