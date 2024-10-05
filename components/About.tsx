import React from 'react'

function About() {
  return (
    <div className=' max-md:h-[75vh] h-[80vh] mt-32 max-md:mt-20 '>
      <h1 className=' max-md:text-2x3 text-7xl font-bold text-center max-md:pt-10 logo'>About Me</h1>
      
      <div className=' max-lg:text-3xl max-md:text-xl ax-md:-mt-14 -mt-20 text-center text-5xl w-[85%] h-full flex flex-col items-center justify-center mx-auto fon-semibold' >
       I’m  an digital marketing freelancer dedicated to helping brands thrive in the online landscape. I specialize in crafting tailored marketing strategies that drive engagement, increase visibility, and boost conversions.

<p className=' max-md:text-base text-3xl text-gray-300 max-md:pt-8 pt-16 italic max-lg:text-xl'>

My expertise spans various areas, social media marketing, content creation, and email marketing. I believe in a data-driven approach, using analytics to inform decisions and optimize campaigns for maximum impact. 
</p>

      </div>
    </div>
  )
}

export default About