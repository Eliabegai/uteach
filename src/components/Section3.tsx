import Image from 'next/image'
import Col from '../assets/Col.svg'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const Section3 = () => {
  return (
    <div className='flex'>
      <div className='flex flex-row min-w-7xl h-full justify-center items-center p-10'>
        <div className='bg-[#FACC15] flex w-full h-[550px] justify-center items-center px-10 relative'>
          <div className='flex'>
            <ChevronLeft color='white' size={50} className='left-8 top-52 absolute cursor-pointer' />
          </div>
          <div className='flex flex-col w-1/2 h-full justify-center p-10'>
            <div className='text-xl flex flex-col'>
              <p>Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.</p>
              <p className='mt-8'>Marie Poirot</p>
              <p className='font-bold'>Bigapp</p>
            </div>
            <div className='flex gap-2 mt-20'>
              <div className='w-8 h-2 bg-black rounded-xl' />
              <div className='w-2 h-2 bg-white rounded-full' />
              <div className='w-2 h-2 bg-white rounded-full' />
              <div className='w-2 h-2 bg-white rounded-full' />
              <div className='w-2 h-2 bg-white rounded-full' />
            </div>
          </div>
          <div className='flex flex-row w-1/2 h-full justify-center items-center relative'>
            <Image src={Col} width={600} height={600} alt='Col' className='flex flex-1 z-20 absolute  right-10' />
          </div>
          <div className='flex'>
            <ChevronRight color='black' size={50} className='right-10 top-54 absolute cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3