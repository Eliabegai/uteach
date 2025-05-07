import Image from 'next/image'
import Heart from '../assets/Heart.svg'
import Diamond from '../assets/Diamond.svg'
import Graduation from '../assets/Graduation.svg'

const Section5 = () => {
  return (
    <div className='flex'>
      <div className='flex min-w-7xl h-82 bg-gray-900 text-yellow-400 p-10 justify-evenly items-center gap-4'>
        
        <div className='relative flex flex-col gap-4 p-4 justify-center items-center w-1/3'>
          <Image src={Heart} sizes='40' alt='Heart' />
          <h2 className='text-6xl font-bold'>195</h2>
          <p>user countries</p>
        </div>

        <div className='relative flex flex-col gap-4 p-4 justify-center items-center w-1/3'>
        <Image src={Diamond} sizes='40' alt='Diamond' />
          <h2 className='text-6xl font-bold'>1M</h2>
          <p>valued teachers</p>
        </div>

        <div className='relative flex flex-col gap-4 p-4 justify-center items-center w-1/3'>
          <Image src={Graduation} sizes='40' alt='Graduation' />
          <h2 className='text-6xl font-bold'>17M</h2>
          <p>happy students</p>
        </div>

      </div>
    </div>
  )
}

export default Section5