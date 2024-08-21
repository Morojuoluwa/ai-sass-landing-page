import ArrowRight from '@/assets/arrow-right.svg'
import StarImg from '@/assets/star.png'
import SpringImg from '@/assets/spring.png'
import Image from 'next/image'

const CallToAction = () => {
  return (
  <section className=' bg-gradient-to-b from-white tp-[#D2DCFF] py-24 overflow-x-clip'>
    <div className='container'>
        <div className='section-heading relative'>
            <h2 className='section-title'>Sign up for free today</h2>
            <p className='section-description mt-5'>
                Celebrate the joy of accomplishment with an app designed to track your progress and motivate your effort.
            </p>
            <Image src={StarImg} width={360} alt='' className='absolute -left-[350px] -top-[137px]'/>
            <Image src={SpringImg} width={360} alt='' className='absolute -left-[350px] -top-[137px]'/>

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