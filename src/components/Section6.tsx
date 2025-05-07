'use client'

import Image from 'next/image'
import Profile1 from '../assets/profile1.svg'
import Profile2 from '../assets/profile2.svg'
import Profile3 from '../assets/profile3.svg'
import Profile4 from '../assets/profile4.svg'
import Profile5 from '../assets/profile5.svg'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'

const Section6 = () => {

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a velocidade aqui
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className='flex'>
      <div className='flex flex-col min-w-7xl h-[600px] justify-start items-start p-10 space-y-20'>
        <div className='flex w-full justify-between'>
          <h1 className='text-5xl font-bold'>What everyone says</h1>    
          <div className='flex gap-4'>
            <button className='w-12 h-12 text-orange-500 cursor-pointer rounded-full border border-orange-500 hover:bg-orange-400 hover:text-white flex justify-center items-center'>
              <ArrowLeft />
            </button>
            <button className='w-12 h-12 text-orange-500 cursor-pointer rounded-full border border-orange-500 hover:bg-orange-400 hover:text-white flex justify-center items-center'>
              <ArrowRight />
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className='flex max-w-6xl h-80 justify-start items-center overflow-x-auto p-2 space-x-4 cursor-grab active:cursor-grabbing overflow-hidden scroll-auto'
        >
          <div className='flex-shrink-0 grid row-span-2 w-96 h-72 p-4 border border-gray-100 shadow-lg rounded-lg gap-10 text-gray-900 bg-white'>
            <p className='text-lg'>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
            <div className='flex gap-4 relative justify-start items-center'>
              <Image src={Profile1} alt='profile' width={64} height={64}/>
              <div className='flex flex-col'>
                <span className='text-lg font-semibold'>Hellen Jummy</span>
                <span className='text-sm text-gray-600'>Financial Counselor</span>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 grid row-span-2 w-96 h-72 p-4 border border-gray-100 shadow-lg rounded-lg gap-10 text-gray-900 bg-white'>
            <p className='text-lg'>Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.</p>
            <div className='flex gap-4 relative justify-start items-center'>
              <Image src={Profile2} alt='profile2' width={64} height={64}/>
              <div className='flex flex-col'>
                <span className='text-lg font-semibold'>Ralph Edwards</span>
                <span className='text-sm text-gray-600'>Math teacher</span>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 grid row-span-2 w-96 h-72 p-4 border border-gray-100 shadow-lg rounded-lg gap-10 text-gray-900 bg-white'>
            <p className='text-lg'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
            <div className='flex gap-4 relative justify-start items-center'>
              <Image src={Profile3} alt='profile3' width={64} height={64}/>
              <div className='flex flex-col'>
                <span className='text-lg font-semibold'>Hellena John</span>
                <span className='text-sm text-gray-600'>Psychology Student</span>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 grid row-span-2 w-96 h-72 p-4 border border-gray-100 shadow-lg rounded-lg gap-10 text-gray-900 bg-white'>
            <p className='text-lg'>Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.</p>
            <div className='flex gap-4 relative justify-start items-center'>
              <Image src={Profile4} alt='profile4' width={64} height={64}/>
              <div className='flex flex-col'>
                <span className='text-lg font-semibold'>David Oshodi</span>
                <span className='text-sm text-gray-600'>Manager</span>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 grid row-span-2 w-96 h-72 p-4 border border-gray-100 shadow-lg rounded-lg gap-10 text-gray-900 bg-white'>
            <p className='text-lg'>Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.</p>
            <div className='flex gap-4 relative justify-start items-center'>
              <Image src={Profile5} alt='profile5' width={64} height={64}/>
              <div className='flex flex-col'>
                <span className='text-lg font-semibold'>Charolette Hanlin</span>
                <span className='text-sm text-gray-600'>CEO</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section6