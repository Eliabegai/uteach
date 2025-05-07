import Student from '../assets/Student.svg'
import Teacher from '../assets/Teacher.svg'
import Collection1 from '../assets/Collection_1.svg' 
import Collection2 from '../assets/Collection_2.svg' 
import Collection3 from '../assets/Collection_3.svg' 
import Collection11 from '../assets/Collection_11.svg' 
import Collection20 from '../assets/Collection_20.svg' 
import Icons from '../assets/Icons.svg'
import Chat from '../assets/Chat.svg'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'

const Section1 = () => {
  return (
    <div className='flex'>
      <div className='flex flex-row min-w-7xl h-full justify-center items-center'>
        <div className='flex flex-col w-1/2 h-[550px] justify-center items-center'>
          <div className='flex flex-col justify-start items-start'>
            <h1 className="text-7xl font-bold relative">
              <span className="relative inline-block">
                <span className="relative z-10">Teach</span>
                <span className="absolute left-0 bottom-1 h-2 w-full bg-orange-400 rounded-full z-0"></span>
              </span>{' '}
              students worldwide
            </h1>
            <p className='mt-6'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>

            <div className='flex flex-row items-center mt-10'>
              <button className='p-4 bg-orange-500 cursor-pointer text-white text-xl font-semibold hover:bg-orange-400 rounded-lg'>Sing Up Now</button>
              <button className='flex gap-x-2 p-4 cursor-pointer text-blue-600 text-lg font-semibold hover:bg-zinc-100 rounded-lg'><PlayCircle /> View Demo</button>
            </div>
            <div className='flex flex-row w-full h-full items-center justify-center gap-2 mt-6'>
              <span className='w-32 text-sm justify-start text-left '>Trusted by<br/>leanding companies</span>
              <div className='flex flex-1 gap-6 justify-end'>
                <Image src={Collection1} alt='Collection1' sizes='32' />
                <Image src={Collection2} alt='Collectio2' sizes='32' />
                <Image src={Collection3} alt='Collection3' sizes='32' />
                <Image src={Collection11} alt='Collection11' sizes='32' />
                <Image src={Collection20} alt='Collection20' sizes='32' />
              </div>
            </div>
          </div>

        </div>

        <div className='flex flex-col w-1/2 h-[550px] items-center justify-center gap-6 p-2'>
          <div className='flex flex-col justify-center h-full w-full items-center relative'>
            <Image src={Student} alt='Student' width={250} height={250} className='absolute z-0 right-20 top-10 ' />
            <Image src={Chat} alt='Teacher' width={180} height={180} className='absolute top-16 left-34 z-1' />
            <Image src={Teacher} alt='Teacher' width={250} height={250} className='absolute left-10 bottom-10 z-0 ' />
            <Image src={Icons} alt='Teacher' width={150} height={150} className='absolute bottom-10 right-40 z-0 opacity-40 ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1