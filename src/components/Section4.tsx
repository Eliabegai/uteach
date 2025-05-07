import Image from 'next/image'
import Students2 from '../assets/Students2.svg'
import Plane from '../assets/plane-departure.svg'
import { ArrowRight, Check } from 'lucide-react'

const Section4 = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col w-1/2 h-[550px] justify-start items-start relative'>
         <Image src={Students2} fill alt='Students2'/>
      </div>

      <div className='flex flex-col w-1/2 h-[550px] items-start justify-center p-2'>
        <h1 className="text-5xl font-bold relative">
          Meet{' '}
          <span className="relative inline-block">
            <span className="relative z-0">international</span>
            <Image src={Plane} className="absolute right-5 -top-7 h-10 w-10 z-2" alt='Plane'/>
          </span>{' '}
          students & teachers
        </h1>
        <div className='mt-6 flex flex-col'>
          <p>Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.</p>
        </div>

        <div className='flex flex-row items-center mt-10'>
          <button className='flex gap-x-2 p-4 text-blue-600 text-lg font-semibold hover:bg-zinc-100 rounded-lg'>Explore teachers and students <ArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Section4