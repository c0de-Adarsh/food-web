import React from 'react'

const Food = () => {
  return (
    <>
    <div className='w-full py-16 px-4 '>
        <h3 className='text-[#fbc531] font-bold text-2xl text-center'>Fast Delivery App</h3>
        <div className=' grid grid-cols-2 w-[70%] mx-auto my-10'>
            <img src="https://res.cloudinary.com/dweddwpll/image/upload/v1723294431/r6vy4o9craebts5wrk7t.webp" alt="" className='w-[550px]' />
        
        <div className='flex flex-col justify-center'>
            <p className='text-[red] font-bold text-[20px] md:text-[30px]'>Get The App</p>
            <h2 className='sm:text-2xl md:text-3xl lg:text-5xl py-2 font-bold'>Timeless convenience on demand</h2>
            
            <button className='bg-black sm:w-[100px] md:w-[150px] text-white rounded-md my-6 py-[15px] md:text-[20px] sm:text-[10px] font-semibold'>Get Started</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Food