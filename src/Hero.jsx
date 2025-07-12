import React from 'react'

const Hero = () => {
  return (
    <>
    
   
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to via bg-orange-50 to-transparent'>
        
     <div className="flex flex-col p-10 pb-32 max-w-4xl gap-12 m-auto sm:text-center sm:items-center">
        
        
        <div className="top-contents flex gap-2 items-center bg-yellow-100 w-fit px-6 py-1 border border-yellow-300 rounded-sm shadow-xl group hover:-translate-y-1 hover:shadow-2xl transition">
        <div className='w-2 h-2 bg-yellow-400 bourder rounded-full'></div>
        <p className='font-medium'>v0.21.1: <span className='text-gray-400 '>Find-in-page bug fixes</span></p>
         <i class="fa-solid fa-arrow-right font-bold group-hover:translate-x-2 transition"></i>
        </div>

        <div className='hidden sm:flex items-center justify-center gap-6'>

           <div className='flex items-center justify-center gap-2'>
            <i class="fa-solid fa-code text-sm"></i>
            <p className='text-gray-800'>Code Optional</p>
           </div>

            <div className='flex items-center justify-center gap-2'>
            <i class="fa-solid fa-hand-back-fist text-sm"></i>
            <p className='text-gray-800'>Drag & drop builder</p>
           </div>

            <div className='flex items-center justify-center gap-2'>
            <i class="fa-solid fa-computer text-sm"></i>
            <p className='text-gray-800'>Windows, Mac, Linux</p>
           </div>
       
       
       
        </div>

        
        
        <h1 className='text-4xl font-semibold sm:text-6xl sm:font-bold'>Web app to desktop app in minutes</h1>
        <p className='text-xl sm:text-2xl'>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>

        <div className='buttons flex flex-col gap-4 sm:flex-row'>

            <button className='bg-[#464BF2] py-4 px-4 text-white border rounded-xl font-bold'>Download Now</button>
            <button className='bg-[#fff] py-4 px-4 text-black border rounded-xl font-bold'>Read Docs</button>

        </div>
        
        
        </div>   



    </div>

     </>
  )
}

export default Hero
