import React from 'react'
import cardimage1 from '../Images/cardimage1.jpg'
import cardimg2 from '../Images/cardimg2.jpg'
import cardimg3 from '../Images/cardimg3.jpg'


const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3  gap-6 '>
        {/* card 1 */}
        <div className='rounded-xl relative'>
            {/* overlay  */}
            <div className=' absolute w-full  h-full   bg-black/50 rounded-xl   text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className=' font-semibold px-2'>Through 8/26</p>
                <button className='border-white bg-white rounded-xl px-4 py-2 text-xl text-black mx-2  absolute bottom-4'>Order Now</button>
                 
            </div>
            <img className='max-h-[160px]   md:max-h-[200px] w-full object-cover rounded-xl' src={cardimage1} alt="" /> 

        </div>
         {/* card 2*/}
         <div className='rounded-xl relative'>
            {/* overlay  */}
            <div className=' absolute w-full  h-full object-cover bg-black/50 rounded-xl px-4  text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className=' font-semibold px-2 my-3'>Through 8/26</p>
                <button className='border-white bg-white rounded-xl px-4 py-2 text-xl text-black mx-2 absolute bottom-4'>Order Now</button>
                 
            </div>
            <img className='max-h-[160px]   md:max-h-[200px] w-full object-cover rounded-xl' src={cardimg2} alt="" />

        </div>
         {/* card 3*/}
         <div className='rounded-xl relative'>
            {/* overlay  */}
            <div className=' absolute w-full  h-full object-cover bg-black/50 rounded-xl px-4  text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className=' font-semibold px-2 my-3'>Through 8/26</p>
                <button className='border-white bg-white rounded-xl px-4 py-2 text-xl text-black mx-2 absolute bottom-4'>Order Now</button>
                 
            </div>
            <img className='max-h-[160px]   md:max-h-[200px] w-full object-cover rounded-xl' src={cardimg3} alt="" />

        </div>
      
    </div>
  )
}

export default HeadlineCards
