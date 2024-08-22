'use client'
import { motion } from 'framer-motion'
import acmeLogo from '@/assets/logo-acme.png'
import quantLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'

const LogoTicker = () => {
  return (
    <div className=' py-8 md:py-12 bg-white'>

        <div className='container'>
            <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <motion.div animate={{translateX:"-50%"}} transition={{duration:20, ease:'linear', repeat:Infinity, repeatType:'loop'}} className=' flex gap-14 flex-none'>
                    <Image className='logo-ticker-image' src={acmeLogo} alt=''/>
                    <Image className='logo-ticker-image' src={quantLogo} alt=''/>
                    <Image className='logo-ticker-image' src={echoLogo} alt=''/>
                    <Image className='logo-ticker-image' src={celestialLogo} alt=''/>
                    <Image className='logo-ticker-image' src={pulseLogo} alt=''/>
                    <Image className='logo-ticker-image' src={apexLogo} alt=''/>
                    <Image className='logo-ticker-image' src={acmeLogo} alt=''/>
                    <Image className='logo-ticker-image' src={quantLogo} alt=''/>
                    <Image className='logo-ticker-image' src={echoLogo} alt=''/>
                    <Image className='logo-ticker-image' src={celestialLogo} alt=''/>
                    <Image className='logo-ticker-image' src={pulseLogo} alt=''/>
                    <Image className='logo-ticker-image' src={apexLogo} alt=''/>
                </motion.div>

            </div>
        </div>
    </div>
  )
}

export default LogoTicker