import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';


const FeedbackCard = ({ index, testimonial, name,
  designation, company, image }) => {
  return (
    <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='retro-bg p-10 xs:w-[320px] w-full'>
      <p className='text-black text-[48px]'>"</p> 
      <div className='mt-1'>
        <p className='tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='font-bold text-[16px]'><span className='text-blue'>@</span> {name}</p>
            <p className='text-[14px]'>{designation} at {company}</p>
            <img
            src={image}
            alt={`feedback-by-${name}`}
            className='mt-4 w-12 h-12 rounded-full object-cover border-2 border-primary bg-white'
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div
    className='mt-12 bg-white rounded-2xl'>
      <div className={`${styles.padding} bg-white min-h-[300px] rounded-2xl`}>
        <motion.div
        variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={`${styles.sectionHeadText} blue-txt`}>testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14
        flex flex-wrap gap-7 justify-center`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
            />
          ))}
        </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks);