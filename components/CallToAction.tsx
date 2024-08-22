'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

import ArrowRight from '@/assets/arrow-right.svg'
import StarImg from '@/assets/star.png'
import SpringImg from '@/assets/spring.png'
import Image from 'next/image'
import { useRef } from 'react'

const CallToAction = () => {
  const callRef = useRef(null)
  const {scrollYProgress} = useScroll({
      target:callRef,
      offset:["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150,-150])
  return (
  <section ref={callRef} className=' bg-gradient-to-b from-white tp-[#D2DCFF] py-24 overflow-x-clip'>
    <div className='container'>
        <div className='section-heading relative'>
            <h2 className='section-title'>Sign up for free today</h2>
            <p className='section-description mt-5'>
                Celebrate the joy of accomplishment with an app designed to track your progress and motivate your effort.
            </p>
            <motion.img style={{translateY}} src={StarImg.src} width={360} alt='' className='absolute -left-[350px] -top-[137px]'/>
            <motion.img style={{translateY}} src={SpringImg.src} width={360} alt='' className='absolute -right-[331px] -top-[19px]'/>

        </div>
        <div className=' flex gap-2 mt-10 justify-center'>
            <button className='btn btn-primary'>Get for free</button>
            <button className='btn btn-text'>
            <span>Learn more</span>
            <ArrowRight className='h-5 w-5'/>
            </button>
        </div>
    </div>
  </section>
  )
}

export default CallToAction