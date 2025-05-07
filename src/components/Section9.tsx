import Image from 'next/image'
import Blob from '../assets/Blob.svg'
import Desktop from '../assets/Desktop.svg'
import { ArrowRight, Check } from 'lucide-react'

const Section9 = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col min-w-7xl h-[700px] justify-center items-center bg-orange-500 space-y-20 p-20'>

        <div className='flex flex-col w-full justify-center items-center gap-10 text-white'>
          <h2 className='text-5xl font-extrabold'>Ready for your next project?</h2>
          <p className='font-light text-2xl'>Sit elit feugiat turpis sed integer integer accumsan turpis.</p>
        </div>

        <form action="Submit" className='text-white flex flex-col w-[500px] min-h-80 gap-10 justify-center items-center'>
          <div className='flex flex-col w-full gap-2'>
            <span>Email</span>
            <input 
              type="email" 
              placeholder='Enter your email' 
              id='email' 
              name='email' 
              required
              className='bg-white p-4 rounded-lg border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm placeholder:text-zinc-400 text-gray-900' 
            />
          </div>

          <div className='flex flex-col w-full gap-2'>
            <span>Message</span>
            <textarea 
              name="message" 
              id="message" 
              placeholder='What are you say?' 
              className="w-full bg-white p-4 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-900 placeholder:text-zinc-400 resize-none shadow-sm"
              maxLength={300}
              required
            />
          </div>

          <button type='submit' className='px-12 w-auto py-5 text-xl font-bold rounded-lg bg-gray-900 hover:bg-gray-800 cursor-pointer'>Request Demo</button>
        </form>

            
      </div>
    </div>
  )
}

export default Section9