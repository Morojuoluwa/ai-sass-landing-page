import ProductImage from '@/assets/product-image.png'
import Image from 'next/image'
import pyramidImg from '@/assets/pyramid.png'
import tubeImg from '@/assets/tube.png'

const ProductShowcase = () => {
  return (
    <section className=' bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] overflow-x-clip py-24'>
      <div className='container'>
        <div className=' max-w-[540px] mx-auto'>
          <div className=' flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>

          <h2 className='section-title'>A more effective way to track progress</h2>
          <p className='section-description'>Effortlessly turn your ideas into a fully functional, responsive, Saas website in just minutes with this template.</p>

        </div>
        <div className='relative'>
          <Image src={ProductImage} alt='' className='mt-10'/>
          <Image src={pyramidImg} height={262} width={262} alt='' className='hidden md:block absolute -right-36 -top-32'/>
          <Image src={tubeImg} alt='' height={248} className='hidden md:block absolute bottom-24 -left-30'/>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase