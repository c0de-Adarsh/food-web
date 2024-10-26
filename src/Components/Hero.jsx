import React, { useEffect, useState } from 'react'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'


const Hero = () => {

    const imageData = [


      {
        url: "https://res.cloudinary.com/dweddwpll/image/upload/v1723294465/r0sjuibltyw61pkt3mrb.jpg"
      },

      {
        url: 'https://res.cloudinary.com/dweddwpll/image/upload/v1723294505/nabjnltcnakdggqepjiv.jpg'
      },

      {
        url: "https://res.cloudinary.com/dweddwpll/image/upload/v1723294463/wol9jtuk7wrxf6oeds6k.jpg"
      }
      

    ]


    const [slider, setSlider] = useState(0);


    const handlePlus = () =>{
      setSlider(slider===imageData.length-1? 0:slider+1)
    }

    const handleMinus = () =>{
      setSlider(slider===0?imageData.length-1:slider-1)
    }

      useEffect(()=>{
     const slider = setInterval(() => {
        handlePlus();
      }, 2000)

      return()=>clearInterval(slider)
    },[slider])
  return (
    <>
    <div className='mt-[100px]'>
      <div className='w-[90%] mx-auto h-[80vh] my-5 relative '>
      {
        imageData.map((item, i)=>(
          <div key={i} className={`${slider===i? 'block': "hidden"}`}>
            <img src={item.url} alt="" 
             className='w-full h-[80vh] rounded-2xl object-cover'/>
            </div>
        ))
      }
        
      
      <div className='w-full mx-auto h-[80vh] opacity-50 rounded-2xl bg-black absolute top-0 left-0'></div>
      <div className='absolute w-full  top-[50%]  text-center text-white font-semibold text-[20px] md:text-[30px] flex justify-center'>
      <p> Searching for your Next Bite of Delight</p>
      </div>
      <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
        <FaAngleLeft  size={35} className='cursor-pointer' onClick={handleMinus} />
        <FaAngleRight size={35} className='cursor-pointer' onClick={handlePlus}/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Hero