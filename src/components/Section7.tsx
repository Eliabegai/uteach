import Image from 'next/image'
import Blob from '../assets/Blob.svg'
import Desktop from '../assets/Desktop.svg'
import { ArrowRight } from 'lucide-react'
import Picore from '../assets/Picture.svg'
import Picore1 from '../assets/Picture1.svg'
import Picore2 from '../assets/Picture2.svg'
import UserThumb from '../assets/UserThumb.svg'

const Section7 = () => {
  return (
    <div className='flex'>
      <div className='flex flex-row min-w-7xl h-full justify-center items-center p-10'>
        <div className='flex flex-col w-1/2 h-[550px] justify-center items-center'>
          <div className='flex flex-col justify-start items-start'>
            <h1 className="text-7xl font-bold relative">
              All the cool{' '}
              <span className="relative inline-block">
                <span className="relative z-10">features</span>
                <span className="absolute left-0 bottom-1 h-2 w-full bg-orange-400 rounded-full z-0"></span>
              </span>
            </h1>
            <div className='mt-6 flex flex-col'>
              <p>Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.</p>
            </div>

            <div className='flex flex-row items-center mt-10'>
              <button className='flex gap-x-2 p-4 text-blue-600 cursor-pointer text-lg font-semibold hover:bg-zinc-100 rounded-lg'>View all the features <ArrowRight /></button>
            </div>
          </div>
        </div>

        <div className='flex w-1/2 h-[550px] items-center justify-center p-2 relative'>
            
          <Image src={Blob} alt='Student' width={450} height={500} className='absolute z-0 left-4 top-4' />
          <div className='grid grid-cols-2 grid-rows-2 w-full h-full z-10 justify-center items-center gap-4'>
            <div className='flex w-full max-h-64 justify-center ml-10 mt-22'>
              <div className='flex flex-col w-48 h-full rounded-lg gap-2 bg-white shadow p-4 justify-center items-start'>
                <div className='flex w-16 rounded-lg px-2 py-1 bg-blue-100 text-blue-800 text-xs'>Popular</div>
                <h3 className='text-lg font-semibold items-start'>Design for how people think</h3>
                <p className='text-sm text-left'>Aliquam ut euismod condimentum elementum ultricies volutpat sit non. </p>
                <button className='px-6 py-1 border-2 cursor-pointer border-blue-600 rounded-lg text-[#2563EB] hover:bg-zinc-100 font-medium'>Take Lesson</button>
              </div>
            </div>
            
            <div className='flex items-end relative w-full h-full mt-26 mr-16'>
              <Image src={Picore} alt='Teacher' width={200} height={160} className='' />
              <Image src={UserThumb} alt='Teacher' width={80} height={80} className='absolute bottom-6 right-20' />
            </div>
            <div className='flex relative w-72 h-52 ml-10'>
              <Image src={Picore1} alt='Teacher' fill className='' />
            </div>
            <div className='flex relative w-54 h-52'>
              <Image src={Picore2} alt='Teacher' fill />
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Section7