import { DiPhotoshop } from "react-icons/di"
import { FaLess, FaSass } from "react-icons/fa"
import { RiReactjsFill,RiJavascriptLine, RiCss3Line, RiHtml5Line,RiBootstrapLine, RiTailwindCssLine } from "react-icons/ri"
import { SiAdobexd, SiGit } from "react-icons/si"
import {animate, motion} from 'framer-motion'

const iconVariation = (duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:'linear',
            repeat:Infinity,
            repeatType:'reverse'
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-300 dark:border-neutral-700 pb-24">
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl"><span className="bg-gradient-to-tr from-pink-500 via-orange-500 to-orange-300 bg-clip-text text-4xl tracking-tight text-transparent">Tech</span>nology</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariation(2.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <RiReactjsFill className="text-7xl text-cyan-400"/>                
            </motion.div>
            <motion.div variants={iconVariation(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <RiJavascriptLine className="text-7xl text-yellow-400"/>                
            </motion.div>
            <motion.div variants={iconVariation(2.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <RiCss3Line className="text-7xl text-blue-400"/>                
            </motion.div>
            <motion.div variants={iconVariation(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <RiHtml5Line className="text-7xl text-orange-500"/>                
            </motion.div>
            <motion.div variants={iconVariation(2.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <RiBootstrapLine className="text-7xl text-purple-800"/>                
            </motion.div>            
            <motion.div variants={iconVariation(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <RiTailwindCssLine className="text-7xl text-sky-400"/>                
            </motion.div>            
            <motion.div variants={iconVariation(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <FaSass className="text-7xl text-pink-400"/>                
            </motion.div>            
            <motion.div variants={iconVariation(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <FaLess className="text-7xl text-blue-400"/>                
            </motion.div>            
            <motion.div variants={iconVariation(2.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <DiPhotoshop className="text-7xl text-blue-500"/>                
            </motion.div>            
            <motion.div variants={iconVariation(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <SiAdobexd className="text-7xl text-pink-700"/>                
            </motion.div>                       
            <motion.div variants={iconVariation(2.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-300 p-4">
                <SiGit className="text-7xl text-orange-600"/>                
            </motion.div>            
        </div>
    </div>
  )
}

export default Technologies