import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import {RxCross2} from "react-icons/rx";
import { Link } from 'react-router-dom';


const Header  = ({count}) => {   
    const [navBar, setNavBar] = useState(false);
     
   

    const handlechange = () =>{
        setNavBar(!navBar)
        console.log(navBar)
    }

  return (
    <div className='fixed z-50 top-0 left-0 w-full bg-white'>
    <div className=' flex justify-between py-[20px] px-[25px] text-[18px] font-semibold drop-shadow border-b relative'>
        <div>
            <Link to='/'>
            <p>Food <span className='text-[#f1c40f]'>Point</span></p>
            </Link>
        </div>
        <div >
       
            <ul className='sm:flex gap-4 hidden cursor-pointer   '>
                <Link to='/'>
                <li className='hover:text-[#f1c40f]'>Home</li>
                </Link>
                <Link to='/about'>
                <li className='hover:text-[#f1c40f]'>About Us</li>
                </Link>
                <Link to='/ourfood'>
                <li className='hover:text-[#f1c40f]'>Our Food</li>
                </Link>
                <Link to='/signin'>
                <li className='hover:text-[#f1c40f]'>Sign IN</li>
                </Link>
            </ul>
           
        </div>


        {
         
         navBar? (
         <div className='bg-[#f5f6fa] w-[300px] h-[100vh] absolute top-0 right-0 text-center flex items-center justify-center z-10 '>
         <RxCross2 size={25} className=' absolute top-3 right-3 cursor-pointer'
         onClick={() => setNavBar(!navBar)}
         />
         <ul className='sm:flex gap-12  cursor-pointer  flex-col   '>
             <Link to='/'>
             <li className='hover:text-[#f1c40f]'  onClick={() => setNavBar(!navBar)}>Home</li>
             </Link>
             <Link to='/about'>
             <li className='hover:text-[#f1c40f]'  onClick={() => setNavBar(!navBar)}>About Us</li>
             </Link>
             <Link to='/ourfood'>
             <li className='hover:text-[#f1c40f]'  onClick={() => setNavBar(!navBar)}>Our Food</li>
             </Link>
             <Link to='/signin'>
             <li className='hover:text-[#f1c40f]'  onClick={() => setNavBar(!navBar)}>Sign IN</li>
             </Link> 
         </ul>
         
         </div> 
  ):( ""

        )}
        <div className='flex gap-5'>
            <p><FaHamburger 
             size={30}
              className='cursor-pointer block sm:hidden'
              onClick={handlechange}
              />
              </p>
            <p>
               {count}
                <FaCartShopping  size={30}/></p>   
        </div>
    </div>
    </div>
  )
}

export default Header



