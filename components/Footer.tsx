

import logo from '@/assets/logosaas.png'
import Image from 'next/image'
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLik from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'

const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 px-10 text-center'>
        <div className='container'>
            <div className=' inline-flex relative before:w-full before:content-[""] before:h-full before:bg-[linear-grdient(to_right,#F87BFF,#FB92CF,#C2F0B1,#2FDAFE ]before:absolute'>
                <Image src={logo} height={40} alt='' className='relatice before:top-2 before:bottom-0 before:blur'/>
            </div>
            <nav className=' flex flex-col md:flex-row md:justify-center gap-6 nt-6'>
                <a href="">About</a>
                <a href="">Feature</a>
                <a href="">Customers</a>
                <a href="">Pricing</a>
                <a href="">Help</a>
                <a href="">Careers</a>
            </nav>
            <div className=' flex justify-center  gap-6 mt-6'>
                <SocialX/>
                <SocialInsta/>
                <SocialLik/>
                <SocialPin/>
                <SocialYoutube/>

            </div>
            <p className='mt-6'>&copy; Alpha_codes. All rights reserved.</p>

        </div>
    </footer>
  )
}

export default Footer