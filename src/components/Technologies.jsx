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
    <div className="border-b border-neutral-300 dark:border-neutral-700 pb-24 max-w-5xl mx-auto">
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl"><span className="bg-gradient-to-tr from-pink-500 via-orange-500 to-orange-300 bg-clip-text text-4xl tracking-tight text-transparent">Tech</span>nology</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-5">
            <motion.div title="React JS" variants={iconVariation(2.5)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <RiReactjsFill className="text-7xl text-cyan-400"/>        
                <h6>React JS</h6>
            </motion.div>
            <motion.div title="Javascript" variants={iconVariation(2)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <RiJavascriptLine className="text-7xl text-yellow-400"/>                
                <h6>Javascript</h6>
            </motion.div>
            <motion.div title="CSS" variants={iconVariation(2.5)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <RiCss3Line className="text-7xl text-blue-400"/>         
                <h6>CSS</h6>       
            </motion.div>
            <motion.div title="HTML" variants={iconVariation(2)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <RiHtml5Line className="text-7xl text-orange-500"/>  
                <h6>HTML</h6>              
            </motion.div>
            <motion.div title="Bootstrap" variants={iconVariation(2.5)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <RiBootstrapLine className="text-7xl text-purple-800"/>                
                <h6>Bootstrap</h6>
            </motion.div>            
            <motion.div title="TailwindCSS" variants={iconVariation(2)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <RiTailwindCssLine className="text-7xl text-sky-400"/>            
                <h6>TailwindCSS</h6>    
            </motion.div>            
            <motion.div title="Sass" variants={iconVariation(2)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <FaSass className="text-7xl text-pink-400"/>       
                <h6>Sass</h6>         
            </motion.div>            
            <motion.div title="Less" variants={iconVariation(2)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <FaLess className="text-7xl text-blue-400"/>     
                <h6>Less</h6>           
            </motion.div>            
            <motion.div title="Photoshop" variants={iconVariation(2.5)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <DiPhotoshop className="text-7xl text-blue-500"/>       
                <h6>Photoshop</h6>         
            </motion.div>            
            <motion.div title="Adobe XD" variants={iconVariation(2)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <SiAdobexd className="text-7xl text-pink-700"/>      
                <h6>Adobe XD</h6>          
            </motion.div>                       
            <motion.div title="Git" variants={iconVariation(2.5)} initial='initial' animate='animate' className="text-center rounded-2xl border-4 border-neutral-300 p-4">
                <SiGit className="text-7xl text-orange-600"/>     
                <h6>Git</h6>           
            </motion.div>            
        </div>
    </div>
  )
}

export default Technologies