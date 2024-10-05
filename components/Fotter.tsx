import { FaInstagram } from "react-icons/fa";
import React from 'react'

function Fotter() {
  return (
    <div className=' flex flex-col frame  w-full h-[50vh] max-md:h-[40vh] border-t-[2px rounded-t-[40px] mt-40 border-[#ffffff4c] justify-between pb-4 '>
         
        <div className=' mt-10 text-center max-md:text-5xl text-8xl font-bold '>  <h1 className=" logo"> Rahul Raj </h1>
        <p className=" text-2xl font-semibold text-gray-500">Digital Marketing Freelancer</p>  </div>

        <div className='  flex items-center justify-center  gap-20'>

            <div className=" text-4xl hover:text-[#ff0749] transition-all ">

                <a target="_blank" href="https://www.instagram.com/rahul_raj_21_/?igsh=dGx5YzY1cWRxcjNp">
                  <FaInstagram />
                </a>
            </div>
            <div className=" text-4xl hover:text-[#ff0749] transition-all ">
                <a target="_blank" href="https://www.instagram.com/withayusman?igsh=NTNkajU4aHlhOHht">
                   <FaInstagram />
                </a>
            </div>
        

        </div>

        <p className=' text-center text-gray-400 text-base'>© 2024 ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Fotter