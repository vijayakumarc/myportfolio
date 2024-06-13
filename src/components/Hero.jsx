import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/hero-section.png'
import { motion } from "framer-motion"

const container = (delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{
            duration:0.5,
            delay:delay
        }
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-5 lg:mb-36">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0.5)} initial='hidden' animate='visible'  className="pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl">VijayaKumar</motion.h1>
                    <motion.span variants={container(1)} initial='hidden' animate='visible' className="bg-gradient-to-tr from-pink-500 via-orange-500 to-orange-300 bg-clip-text text-4xl tracking-tight text-transparent">
                        Front End Developer
                    </motion.span>
                    <motion.p variants={container(1.5)} initial='hidden' animate='visible' className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                </div>                
            </div>
            <div className="w-ful lg:w-1/2 lg:p-8">
                <motion.img initial={{x:100,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1,delay:1.2}} width={550} src={profilePic} alt="profile picture" />
            </div>
        </div>
    </div>
  )
}

export default Hero