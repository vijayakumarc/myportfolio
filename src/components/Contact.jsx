import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-300 dark:border-neutral-700 pb-20'>
        <motion.h2 initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className='text-center text-4xl my-10'>Get In Touch</motion.h2>
        <motion.div initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:1,}} className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href='#' className='my-4 border-b'>{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default Contact