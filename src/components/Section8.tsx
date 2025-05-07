import Image from 'next/image'
import CardRound from '../assets/CardRound.svg'
import CardRound1 from '../assets/CardRound1.svg'

const Section8 = () => {
  return (
    <div className='flex'>
      <div className='flex flex-row min-w-7xl h-[700px] justify-center items-center bg-yellow-400'>
        
        <div className='flex relative w-96 h-full'>
          <Image src={CardRound} alt="Round1" fill/>
        </div>

        <div className='flex flex-col justify-center items-center space-y-10'>
          <h2 className='text-4xl font-bold'>Join a world of learning</h2>
          <p className='text-center'>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <br/> Risus elit et fringilla habitant ut facilisi.</p>
          <button className='px-8 py-4 cursor-pointer bg-[#EA580C] w-auto text-white text-xl font-semibold hover:bg-orange-600 rounded-lg'>Sing Up Now</button>
        </div>
            
        <div className='flex relative w-96 h-full'>
          <Image src={CardRound1} alt="Round2" fill />
        </div>
      </div>
    </div>
  )
}

export default Section8