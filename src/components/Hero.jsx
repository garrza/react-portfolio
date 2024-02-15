import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-7xl mx-auto flex 
      flex-row items-start gap-5`}>
        <div className='flex flex-col 
        justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full
          bg-[#FFFF00]'/>
          <div className='w-1 sm:h-80 h-40 accent'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            hello, i'm <span className='text-accent'>ramiro garza</span>
          </h1>
          <p className={`${styles.heroSubText}
          mt-2 text-white 100`}>
            fullstack software engineer
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[54px] border-2 border-white
          retro-bg flex-column justify-center  p-3.5'>
            <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='w-1 h-5 bg-yellow'/>
            <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='w-1 h-2 arrow-down'/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero