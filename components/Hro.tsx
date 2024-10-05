import Image from 'next/image'
import React from 'react'

function Hro() {
  return (
    <div className=' w-full h-  overflow-hidden'>
        <div className=' pt-10  w-full h-[38%] max-md:h-[30%] text-center max-md:text-6xl max-lg:text-7xl text-8xl  font-extrabold'>
            <h1 className='mb-3 logo'>Digital Marketing</h1>

            <div  className='text-lg gap-6 max-md:gap-1 max-md:text-sm font-normal flex text-center justify-center'>  
            <p> About me |</p>
            <p> Marketing constiancy |</p> 
            <p> portfolio |</p>
            <p> Contact </p>
             </div>
        </div>

        <div className=' secondcol  overflow-hidden'>
        <svg
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: '#0f0715', width: '158%', height: 120 }}
  >
    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
  </svg>
    

        <div className=' w-full max-md:flex-col flex h-[70vh] px-20 max-md:px-5'>
 

            {/* <div className=' w-1/2 max-md:w-full h-full flex flex-col justify-center '>
            <h1 className=' text-6xl text-gray-300 font-bold'>Hello&apos; I&lsquo;m Rahul. </h1>
            <p className=' max-md:text-sm mt-10 text-xl'>I&lsquo;m a Marketing & Digital Marketing  </p>
            <p className=' max-md:text-sm  text-xl'>   Freelancer With a great passion about real</p>
            <p className=' max-md:text-sm  text-xl'>   and honest conversations </p> */}

            <div className='w-1/2 max-md:w-full h-full flex flex-col justify-center'>
                <h1 className='text-6xl text-gray-300 font-bold'>Hello! I&apos;m Rahul.</h1>
                <p className='max-md:text-sm mt-10 text-xl'>I&apos;m a Marketing & Digital Marketing Freelancer with a great passion for real</p>
                <p className='max-md:text-sm text-xl'>and honest conversations.</p>
            {/* </div> */}
            
           <button className=' border-2 border-[#ffffff42] h-10 w-44 mt-5 rounded-xl'>How can i help you</button>
            </div>

            <div className=' max-md:w-full w-1/2 p-3 h-full '>
               <Image className=' w-full object-contain h-full  ' src={'/mak.svg'} alt='' height={900} width={900} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hro