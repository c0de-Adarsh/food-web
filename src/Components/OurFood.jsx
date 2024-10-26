import React from 'react'
import {mealData} from './menu/meal.js'

const OurFood = () => {
  return (
    <>
    <div className='w-[90%] mx-auto mt-[100px]'>
      <div>
        <h2 className='text-center text-[#fbc531] font-bold text-3xl py-5 '>Our Food</h2>
      
      </div>
      <div className='grid md:grid-cols-2 sm:grid-flow-cols-1 lg:grid-cols-4 py-6 gap-2'>
       
        {
          mealData.map((meal)=>(
            <div className='flex justify-center flex-col items-center' >
              <div>
              <img src={meal.image} alt=""  className='w-[200px] rounded-lg h-[200px] object-cover' />
              </div>
              <div className='flex justify-center py-2 px-4 flex-col items-center'>
              <p className=' text-[15px] uppercase font-semibold'>{meal.name}</p>
              <p className=' text-[15px] uppercase font-semibold'>{meal.price}</p>
              <button className='bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] hover:text-[#fbc531]'>
          Add to Cart
        </button>
        </div>
            </div>
          ))
        }
       
      </div>
    </div>
    </>
  )
}

export default OurFood