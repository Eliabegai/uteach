import Image from 'next/image'
import Blob from '../assets/Blob.svg'
import Desktop from '../assets/Desktop.svg'
import { ArrowRight, Check } from 'lucide-react'

const Section8 = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col w-1/2 h-[550px] justify-start items-start'>
            <h1 className="text-7xl font-bold relative">
              An{' '}
              <span className="relative inline-block">
                <span className="relative z-10">all-in-one</span>
                <span className="absolute left-0 bottom-1 h-2 w-full bg-orange-400 rounded-full z-0"></span>
              </span>{' '}
              app that makes it easier
            </h1>
            <div className='mt-6 flex flex-col'>
              <ul>
                <li className='flex text-sm items-center gap-x-2'><Check size={16} /> Est et in pharetra magna adipiscing ornare aliquam.</li>
                <li className='flex text-sm items-center gap-x-2'><Check size={16} /> Tellus arcu sed consequat ac velit ut eu blandit.</li>
                <li className='flex text-sm items-center gap-x-2'><Check size={16} /> Ullamcorper ornare in et egestas dolor orci.</li>
              </ul>
            </div>

            <div className='flex flex-row items-center mt-10'>
              <button className='flex gap-x-2 p-4 text-blue-600 text-lg font-semibold hover:bg-zinc-100 rounded-lg'>Find more about the app <ArrowRight /></button>
            </div>
          </div>

          <div className='flex flex-col w-1/2 h-[550px] items-center justify-center p-2'>
            
            <div className='flex justify-center h-full w-full items-center relative'>
              <Image src={Blob} alt='Student' width={400} height={450} className='absolute z-0 -left-4 top-4 ' />
              <Image src={Desktop} alt='Teacher' width={600} height={400} className='absolute top-0 left-0 z-1' />
            </div>

            <div className='flex w-full max-h-64 justify-evenly z-2'>
              
              <div className='flex flex-col w-48 h-full rounded-lg gap-2 bg-white shadow p-4 justify-center items-start'>
                <div className='flex w-16 rounded-lg px-2 py-1 bg-purple-800/20 text-[#6B21A8] text-xs'>Featured</div>
                <h3 className='text-lg font-semibold items-start'>The map of mathematics</h3>
                <p className='text-sm text-left'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                <button className='px-6 py-1 border-2 border-blue-600 rounded-lg text-[#2563EB] hover:bg-zinc-100 font-medium'>Take Lesson</button>
              </div>

              <div className='flex flex-col w-48 h-full rounded-lg gap-2 bg-white shadow p-4 justify-center items-start'>
                <div className='flex w-16 rounded-lg px-2 py-1 bg-blue-800/20 text-[#DBEAFE] text-xs'>Popular</div>
                <h3 className='text-lg font-semibold items-start'>Design for how people think</h3>
                <p className='text-sm text-left'>Aliquam ut euismod condimentum elementum ultricies volutpat sit non. </p>
                <button className='px-6 py-1 border-2 border-blue-600 rounded-lg text-[#2563EB] hover:bg-zinc-100 font-medium'>Take Lesson</button>
              </div>

              <div className='flex flex-col w-48 h-full rounded-lg gap-2 bg-white shadow p-4 justify-center items-start'>
                <div className='flex w-16 rounded-lg px-2 py-1 bg-green-800/20 text-[#166534] text-xs'>New</div>
                <h3 className='text-lg font-semibold items-start'>International & commercial law</h3>
                <p className='text-sm text-left'>Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. </p>
                <button className='px-6 py-1 border-2 border-blue-600 rounded-lg text-[#2563EB] hover:bg-zinc-100 font-medium'>Take Lesson</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Section8