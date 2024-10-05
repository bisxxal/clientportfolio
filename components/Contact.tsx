'use client'
 
import toast from "react-hot-toast";

function Contact() { 
  const onSubmit = async (event:any) => {
    event.preventDefault(); 
    
    const formData = new FormData(event.target);
    formData.append("access_key", "");
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
   
      toast.success("Successfully sent!"); 
      event.target.reset(); 
  
    } catch (error) { 
      toast.error("Could not send "); 
    }
  };
  
  return (
    <div className=' w-full h-screen  max-md:mt-0  mt-40 flex items-center justify-center' id="contact">
        <div className='flex max-md:flex-col w-[90%] secondcol frame2 inshadow h-[95%] rounded-2xl  overflow-hidden'>
            <form  onSubmit={onSubmit} className=' w-1/2 max-md:w-full p-20 max-md:p-5'>
               <div className='max-md:text-4xl text-7xl font-semibold max-lg:text-5xl  '> <h1>Lets Work  </h1> <span className=' logo'>together !!</span></div>

             <div className=' flex flex-col gap-4 mt-20 max-md:mt-10'>
             <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>
             <input type="hidden" name="apikey" value=""/>
                <input   required   className=' bg-transparent h-14 px-4 rounded-xl border-[2.5px] border-[#ffffff32] outline-none ' type="text" name="First Name" placeholder='Name:' />
                <input    required  className=' bg-transparent h-14 px-4 rounded-xl border-[2.5px] border-[#ffffff32] outline-none ' type="email" name="email" placeholder='Email:' />
                <textarea  required className=' bg-transparent h-40 px-4 rounded-xl border-[2.5px] border-[#ffffff32] outline-none ' name="message" placeholder=' message:' />
             </div>

                <button type="submit" className=' mt-10 bg-blue-500 p-3 px-10 rounded-xl'>Sumbit</button>
            </form>

            <div className=' w-1/2 max-md:w-full flex items-center flex-col '>
                <p className=' w-[70%] max-md:w-[92%] max-md:text-center max-md:text-sm text-[18px] text-gray-400 max-md:mt-14 mt-32'>  I&apos;m currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.</p>
          
                 <p className=' text-gray-300 text-4xl  max-md:text-2xl transition-all hover:underline underline-offset-8  mt-6'> +91 82496 75101 </p>  
                 <p className=' text-gray-300 text-4xl  max-md:text-2xl mt-6'>Bhubanswer</p>
            </div>

        </div>
    </div>
  )
}

export default Contact