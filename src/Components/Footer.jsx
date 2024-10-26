import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='w-full bg-black text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 py-[10px] pl-6'>


            <div><p className='font-bold mb-3 text-[30px]'>Food
              <span className='text-[#f1c40f]'>Point</span></p>
             <p className='text-[20px] text-[gray]'>@Bite of Delight</p>
            </div>

            <div className='font-bold mb-3 text-[20px] md:text-[25px]'><p>Company</p>
             <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>About</p>
             <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Careers</p>
             <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Teams</p>
            </div>

            <div><p className='font-bold mb-3 text-[20px] md:text-[25px]'>Help & support</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Company</p>
             <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Partner with us </p>
             <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Ride with us</p>
            </div>


            <div><p className='font-bold mb-3 text-[20px] md:text-[25px]'>We deliver to:</p>
             <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Rajajipuram</p>
             <p className=' text-[15px] md:text-[20px] mb-2 text-[gray]'>Alambagh</p>
             <p className=' text-[15px] md:text-[20px] mb-2 text-[gray]'>Hazratganj</p>
             <p className=' text-[15px] md:text-[20px] mb-2 text-[gray]'>Aliganj</p>
             <p className=' text-[15px] md:text-[20px] mb-2 text-[gray]'> Aminabad</p>
            </div>



        </div>
    </div>
    </>

  )
}

export default Footer