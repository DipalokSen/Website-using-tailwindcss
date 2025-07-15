import React from 'react'
import ScrollHorizontal from './Components/ScrollHorizontal'
import { useState } from 'react';

const Hero = () => {
  
  //  const [blackStatus, setblackStatus] = useState('hidden');

  //  const [upStatus, setupStatus] = useState('up');
   
   
 const [openCardIndex, setopenCardIndex] = useState(null);
 

  const handleclick=(index)=>{

    //   if(blackStatus==='hidden'){
    //     setblackStatus('block')
    //   }

    //   else{
    //     setblackStatus('hidden')
    //   }

    //  if(upStatus==='up'){
    //   setupStatus('down')
    //  }
    //  else{
    //   setupStatus('up')
    //  }



     setopenCardIndex(openCardIndex===index?'null':index)



  }


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

<div className='mt-3 flex flex-col items-center'>
<p className='text-black font-semibold'>APPS POWERED BY TODESKTOP</p>

<ScrollHorizontal speed={0.2} isltr={true}>


<div className='flex gap-6 mt-12 w-screen -translate-x-48 transition-transform ease-linear' id='line-3'>

<div className='flex flex-col justify-center items-center border bg-white rounded-xl min-w-20 min-h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 3.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>


<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 4.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>



<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 5.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 6.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 7.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 8.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 9.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 10.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 11.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>



<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 12.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>



<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 13.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 14.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>










</div>
</ScrollHorizontal>


<ScrollHorizontal speed={0.2} isltr={false}>
<div className='md:hidden flex gap-6 mt-12 w-screen -translate-x-36 transition-transform ease-linear' id='line-3'>

<div className='flex flex-col justify-center items-center border bg-white rounded-xl min-w-20 min-h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 3.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>


<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 4.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>



<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 5.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 6.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 7.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 8.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 9.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 10.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 11.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>



<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 12.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>



<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 13.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 14.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>



</div>










</div>
</ScrollHorizontal>



<ScrollHorizontal speed={0.2} isLTR={true}>



<div className=' flex gap-6 mt-12 w-screen -translate-x-48 transition-transform ease-linear' id='line-3'>

<div className='flex flex-col justify-center items-center border bg-white rounded-xl min-w-20 min-h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 3.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>


<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 4.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>



<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 5.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 6.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 7.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 8.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 9.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 10.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 11.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>



<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 12.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>



<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 13.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>




<div className='flex flex-col justify-center items-center border bg-white rounded-xl w-20 h-20 border-white md:w-30 md:h-34'>

 <img src="Assets/asset 14.png" alt="logo" className='w-12 h-12 md:w-16 md:h-16'/>

 <p className='text-black font-semibold text-sm'>Notion</p>


</div>










</div>

</ScrollHorizontal>
</div>



{/* steps */}

<div className="steps py-6 px-8 max-w-8xl  mt-12 mx-auto flex-col gap-6">

<h1 className='text-5xl'>How it works</h1>


<div className='flex flex-col lg:flex-row border border-gray-300 mt-12 rounded-xl py-8 px-6 gap-4'>
  
  <div className='incontents flex flex-col gap-9 md:w-1/2'>




  
  
  <span className='bg-yellow-500 text-gray-800 font-semibold w-fit border rounded-xl text-lg py-2 px-6'>Step 1</span>
  <h1 className='text-3xl font-semibold'>Bootstrap straight from your web app</h1>
  <p className='text-gray-800'>Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>

<ul className='grid grid-cols-2 gap-3'>

  <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>


 <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>



   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>



   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>


   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>


   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>

  
</ul>
</div>


<div>
<img src="/Assets/asset 27.svg" alt="" />

</div>




</div>



<div className='flex flex-col lg:flex-row border border-gray-300 mt-12 rounded-xl py-8 px-6 gap-4'>
  
  <div className='incontents flex flex-col gap-9 md:w-1/2'>




  
  
  <span className='bg-yellow-500 text-gray-800 font-semibold w-fit border rounded-xl text-lg py-2 px-6'>Step 2</span>
  <h1 className='text-3xl font-semibold'>Bootstrap straight from your web app</h1>
  <p className='text-gray-800'>Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>

<ul className='grid grid-cols-2 gap-3'>

  <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>


 <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>



   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>



   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>


   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>


   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>

  
</ul>
</div>


<div>
<img src="/Assets/asset 27.svg" alt="" />

</div>




</div>



<div className='flex flex-col lg:flex-row border border-gray-300 mt-12 rounded-xl py-8 px-6 gap-4'>
  
  <div className='incontents flex flex-col gap-9 md:w-1/2'>




  
  
  <span className='bg-yellow-500 text-gray-800 font-semibold w-fit border rounded-xl text-lg py-2 px-6'>Step 3</span>
  <h1 className='text-3xl font-semibold'>Bootstrap straight from your web app</h1>
  <p className='text-gray-800'>Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>

<ul className='grid grid-cols-2 gap-3'>

  <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>


 <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>



   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>



   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>


   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>


   <li className='flex gap-2 '>
  <i class="fa-solid fa-check"></i>
  <p className='text-xl border-b border-gray-600 border-opacity-25 '>Multiple windows</p>
  </li>

  
</ul>
</div>


<div>
<img src="/Assets/asset 27.svg" alt="" />

</div>




</div>
















</div>


{/* banter Grid Section */}
<div className="banter-grid py-6 px-8 max-w-8xl  mt-12 flex flex-col gap-5 mx-auto"  >
  <h1 className='text-5xl'>ToDesktop handles the details</h1>

  <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3"  >


    <div className='rounded-2xl p-[1px] bg-slate-200 mt-2 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
  
      <div className='flex flex-col gap-6 items-center  w-full h-full bg-white rounded-2xl hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100'>
        <h1 className='text-2xl font-semibold'>Native Notifications</h1>
        <img src="Assets/asset 37.png" alt="" />
      </div>


      







    </div>

<div className='rounded-2xl p-[1px] bg-slate-200 mt-2 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
  
      <div className='flex flex-col gap-6 items-center w-full h-full py-2 px-8 bg-white rounded-2xl hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100'>
        <h1 className='text-2xl font-semibold'>Native Notifications</h1>

        <p className='text-xl'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
        <img src="Assets/asset 38.png" alt="" />
      </div>


      







    </div>



    <div className='rounded-2xl p-[1px] bg-slate-200 mt-2 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
  
      <div className='flex flex-col gap-6 items-center py-2 px-8 w-full h-full bg-white rounded-2xl hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100'>
        <h1 className='text-2xl font-semibold'>Native Notifications</h1>

        
        <img src="Assets/asset 39.png" alt="" />
      </div>


      







    </div>



    <div className='rounded-2xl p-[1px] bg-slate-200 mt-2 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
  
      <div className='flex flex-col gap-6 items-center py-2 px-8 w-full h-full bg-white rounded-2xl hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100'>
        <h1 className='text-2xl font-semibold'>Native Notifications</h1>
        <p className='text-xl'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
        <img src="Assets/asset 40.png" alt="" />
      </div>


      







    </div>



    <div className='rounded-2xl p-[1px] bg-slate-200 mt-2 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
  
      <div className='flex flex-col gap-6 items-center py-2 px-8 w-full h-full bg-white rounded-2xl hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100'>
        <h1 className='text-2xl font-semibold'>Native Notifications</h1>
        <img src="Assets/asset 37.png" alt="" />
      </div>


      







    </div>



    <div className='rounded-2xl p-[1px] bg-slate-200 mt-2 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
  
      <div className='flex flex-col gap-6 items-center py-2 px-8 w-full h-full bg-white rounded-2xl hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100'>
        <h1 className='text-2xl font-semibold'>Native Notifications</h1>

        <p className='text-xl'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
        <img src="Assets/asset 38.png" alt="" />
      </div>


      







    </div>

  
  
  
  
  
  </div>
 
  



</div>








{/* companyScroll */}




<div className='py-6 px-8 max-w-8xl  mt-12 mx-auto '>

  <div className="border rounded-lg  flex justify-center p-6 whitespace-nowrap overflow-hidden">
   <ScrollHorizontal speed={0.5} isLTR={false}>
   <div className="flex gap-8 p-4">

                    <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Download Analytics</h3>
                    <span>•</span>
                    <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Custom Menus</h3>
                    <span>•</span>
                    <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Multi-window support</h3>
                    <span>•</span>
                    <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Trays</h3>
                    <span>•</span>
                    <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Deep Linking</h3>
                    <span>•</span>
                    <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Download Analytics</h3>
                    <span>•</span>
                    <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Launch at startup</h3>
                    <span>•</span>
                    <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Offline Support</h3>
                    <span>•</span>
                    <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Good Signing</h3>
                    <span>•</span>


    



   </div>
</ScrollHorizontal>

  </div>










</div>    
{/* end */}




{/* testimonial */}


<div className="testimonial py-6 px-8 max-w-8xl  mt-12 mx-auto ">

<h3 className='text-4xl font-semibold'>Customer stories</h3>

<div className='border rounded-lg p-6  md:mt-6'>


<div className='flex-col gap-4 md:flex md:flex-row '>

 <div className="left flex flex-col gap-9 mt-12 p-4">
 
  <div className="logo h-4">
    <img src="Assets/asset 44.svg" alt="logo" />
  </div>

  <p className='text-xl font-semi-bold'>ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</p>

  <div className="flex-component flex gap-2 flex-wrap">

    <div className='border rounded-lg bg-yellow-100 border-yellow-200 px-4 py-1 flex gap-2 items-center text-yellow-800'>
      <i class="fa-solid fa-check"></i>
      <p className='font-medium text-lg'>Chromeless UI</p>
  
    </div>

     <div className='border rounded-lg bg-yellow-100 border-yellow-200 px-4 py-1 flex gap-2 items-center text-yellow-800'>
      <i class="fa-solid fa-check"></i>
      <p className='font-medium text-lg'>Native spellcheck</p>
  
    </div>


     <div className='border rounded-lg bg-yellow-100 border-yellow-200 px-4 py-1 flex gap-2 items-center text-yellow-800'>
      <i class="fa-solid fa-check"></i>
      <p className='font-medium text-lg'>Chromeless UI</p>
  
    </div>


     <div className='border rounded-lg bg-yellow-100 border-yellow-200 px-4 py-1 flex gap-2 items-center text-yellow-800'>
      <i class="fa-solid fa-check"></i>
      <p className='font-medium text-lg'>Chromeless UI</p>
  
    </div>


     <div className='border rounded-lg bg-yellow-100 border-yellow-200 px-4 py-1 flex gap-2 items-center text-yellow-800'>
      <i class="fa-solid fa-check"></i>
      <p className='font-medium text-lg'>Chromeless UI</p>
  
    </div>
  </div>
  <p className='text-xl font-light leading-snug'>“ToDesktop provided us with a polished desktop app in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver new and improved features to our customers within days.”</p>

  <div className='flex gap-2'>
    <div className='img'>
      <img src="Assets/asset 45.jpeg" alt="client" className='rounded-full'/>
    </div>

    <div className='flex-col'>
      <p className='font-bold'>Zeb Evans</p>
      <p>Founder & CEO, ClickUp</p>
    </div>
  </div>




 </div>

<div className="right">


<div className='md:w-[670px]'>
 <img src="Assets/asset 46.png" alt="" className='pl-12'/>
</div>





</div>







</div>


</div>




<div className='flex flex-col md:flex-row mt-4 gap-3'>

  
<div className="border rounded-2xl p-6 bg-white hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100">
  
 
 <div className="flex flex-col gap-6">

<div className='flex gap-2 items-center '>
<div className='bg-blue-200 rounded-full p-3'> 

<i class="fa-solid fa-code"></i>
</div>
<p className='font-bold text-2xl'>Native APIs</p>
</div>

<p className='text-xl'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>




 <div className='flex items-center gap-4'>
 <div className='img2 '>
    <img src="Assets/asset 48.jpeg" alt="" className='rounded-full'/>
  </div>

  <div className='flex flex-col'>
    <p className='text-lg font-semibold'>Rick Pastoor</p>
    <p className=''>Rise</p>
  </div>


 </div>

 







 </div>



</div>




<div className="border rounded-2xl p-6 bg-white hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100">
  
 
 <div className="flex flex-col gap-6">

<div className='flex gap-2 items-center '>
<div className='bg-blue-200 rounded-full p-3'> 

<i class="fa-solid fa-code"></i>
</div>
<p className='font-bold text-2xl'>Native APIs</p>
</div>

<p className='text-xl'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>




 <div className='flex items-center gap-4'>
 <div className='img2 '>
    <img src="Assets/asset 48.jpeg" alt="" className='rounded-full'/>
  </div>

  <div className='flex flex-col'>
    <p className='text-lg font-semibold'>Rick Pastoor</p>
    <p className=''>Rise</p>
  </div>


 </div>

 







 </div>



</div>





<div className="border rounded-2xl p-6 bg-white hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100">
  
 
 <div className="flex flex-col gap-6">

<div className='flex gap-2 items-center '>
<div className='bg-blue-200 rounded-full p-3'> 

<i class="fa-solid fa-code"></i>
</div>
<p className='font-bold text-2xl'>Native APIs</p>
</div>

<p className='text-xl'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>




 <div className='flex items-center gap-4'>
 <div className='img2 '>
    <img src="Assets/asset 48.jpeg" alt="" className='rounded-full'/>
  </div>

  <div className='flex flex-col'>
    <p className='text-lg font-semibold'>Rick Pastoor</p>
    <p className=''>Rise</p>
  </div>


 </div>

 







 </div>



</div>

</div>

</div>
   
   






<div className="testimonial py-6 px-8 max-w-8xl  mt-2 mx-auto ">

{/* <h3 className='text-4xl font-semibold'>Customer stories</h3> */}

<div className='border rounded-2xl p-6  md:mt-6 bg-black'>


<div className='flex-col gap-4 md:flex md:flex-row '>

 <div className="left flex flex-col gap-9 mt-12 p-4">
 
 

  <p className='text-xl font-semi-bold text-slate-300'>READY TO START BUILDING?</p>

  <h1 className='text-6xl text-white font-bold'>Create your desktop app for free*</h1>
  <p className='text-xl font-light leading-snug text-slate-300'>“ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>

  <button className=' py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700'>
    <div className='flex items-center justify-center gap-2'>

      <i class="fa-solid fa-download"></i>

      <p className='text-xl'>Download Todesktop Builder</p>
    </div>
  </button>

  <p className='text-sm text-slate-500 italic'>*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>




 </div>

<div className="right">


<div className='md:w-[670px]'>
 <img src="Assets/asset 46.png" alt="" className='pl-12'/>
</div>





</div>







</div>


</div>






</div>


  
 <div className="testimonial py-6 px-8 max-w-8xl  mt-12 mx-auto ">

<h3 className='text-6xl font-semibold leading-snug'>Choose a plan that fits <br/> your needs</h3>



<div className='flex flex-col md:flex-row mt-4 gap-3'>

  
<div className="border rounded-2xl p-8 bg-white hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100 flex-1 ">
  
 
 <div className="flex flex-col gap-6">

 <p className='text-4xl font-semibold'>Free</p>

<p className='text-2xl'>For personal use or testing your app before deploying to customers.</p>



<div className='flex flex-col gap-4'>
 <p className='text-xl'>Key Features</p>

<div className="flex items-center gap-3">
  <i class="fa-solid fa-check"></i>
  <p className='text-xl'>Free for personal use</p>
</div>




<div className="flex items-center gap-3">
  <i class="fa-solid fa-check"></i>
  <p className='text-xl'>Free for personal use</p>
</div>


<div className="flex items-center gap-3">
  <i class="fa-solid fa-xmark"></i>
  <p className='text-xl'>Free for personal use</p>
</div>


<div className="flex items-center gap-3">
  <i class="fa-solid fa-xmark"></i>
  <p  className='text-xl'>Free for personal use</p>
</div>


</div>



<button className='rounded-xl p-4 hover:border bg-slate-50 '>
  <p>Read Docs</p>
</button>


 







 </div>



</div>




<div className="border rounded-2xl p-8 bg-white hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100 flex-1">
  
 
 <div className="flex flex-col gap-6">

 <p className='text-4xl font-semibold'>Essential</p>



<p className='text-2xl'>For simple desktop apps.</p>

 <p><span className='font-bold text-2xl'>$99</span>/month</p>

<div className='flex flex-col gap-4'>
 <p className='text-xl'>Key Features</p>

<div className="flex items-center gap-3">
  <i class="fa-solid fa-check"></i>
  <p className='text-xl'>Free for personal use</p>
</div>




<div className="flex items-center gap-3">
  <i class="fa-solid fa-check"></i>
  <p className='text-xl'>Free for personal use</p>
</div>


<div className="flex items-center gap-3">
  <i class="fa-solid fa-xmark"></i>
  <p className='text-xl'>Free for personal use</p>
</div>


<div className="flex items-center gap-3">
  <i class="fa-solid fa-xmark"></i>
  <p  className='text-xl'>Free for personal use</p>
</div>


</div>



<button className='rounded-xl p-4 hover:border bg-slate-50 '>
  <p>Read Docs</p>
</button>


 







 </div>



</div>



<div className="border rounded-2xl p-8 bg-white hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100 relative flex-1">
  
 
 <div className="flex flex-col gap-6">

 <p className='text-4xl font-semibold'>Professional</p>

<p className='text-2xl'>For sophisticated desktop apps.</p>

<p><span className='font-bold text-2xl'>$199</span>/month</p>



<div className='flex flex-col gap-4'>
 <p className='text-xl'>Key Features</p>

<div className="flex items-center gap-3">
  <i class="fa-solid fa-check"></i>
  <p className='text-xl'>Free for personal use</p>
</div>




<div className="flex items-center gap-3">
  <i class="fa-solid fa-check"></i>
  <p className='text-xl'>Free for personal use</p>
</div>


<div className="flex items-center gap-3">
  <i class="fa-solid fa-xmark"></i>
  <p className='text-xl'>Free for personal use</p>
</div>


<div className="flex items-center gap-3">
  <i class="fa-solid fa-xmark"></i>
  <p  className='text-xl'>Free for personal use</p>
</div>


</div>



<button className='rounded-xl p-4 hover:border bg-blue-700 text-white '>
  <p>Read Docs</p>
</button>


 







 </div>









<div className='bg-indigo-100 w-27 h-9 text-center text-blue-800 rounded-2xl flex items-center justify-center absolute top-[-13px] right-[20px]'>Most Popular</div>

</div>

</div>

</div>



{/* FAQS */}

<div className='FAQS py-6 px-8 max-w-8xl  mt-12 mx-auto'>
 
  <h1 className='text-4xl font-semibold '>FAQS</h1>
  
<div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 items-start'>
 <div className="border border-gray-200 bg-gray-50 rounded-xl p-6" onClick={()=>{handleclick(0)}}>

    

     <div className="flex justify-between items-center">
      <p className='text-lg font-semibold'>Is ToDesktop For Me?</p>
      <i class={`fa-solid fa-chevron-${openCardIndex===0?'down':'up'}`}></i>

     </div>

     <div className={`${openCardIndex===0?'block':'hidden'} mt-4 text-xl text-slate-700`}>
      <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
     </div>



 
  </div>




 

  <div className="border border-gray-200 bg-gray-50 rounded-xl p-6" onClick={()=>{handleclick(1)}}>

    

     <div className="flex justify-between items-center">
      <p className='text-lg font-semibold'>Is ToDesktop For Me?</p>
      <i class={`fa-solid fa-chevron-${openCardIndex===1?'down':'up'}`}></i>

     </div>

     <div className={`${openCardIndex===1?'block':'hidden'} mt-4 text-xl text-slate-700`}>
      <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
     </div>



 
  </div>



 <div className="border border-gray-200 bg-gray-50 rounded-xl p-6" onClick={()=>{handleclick(2)}}>

    

     <div className="flex justify-between items-center">
      <p className='text-lg font-semibold'>Is ToDesktop For Me?</p>
      <i class={`fa-solid fa-chevron-${openCardIndex===2?'down':'up'}`}></i>

     </div>

     <div className={`${openCardIndex===2?'block':'hidden'} mt-4 text-xl text-slate-700`}>
      <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
     </div>



 
  </div>

 


  <div className="border border-gray-200 bg-gray-50 rounded-xl p-6" onClick={()=>{handleclick(3)}}>

    

     <div className="flex justify-between items-center">
      <p className='text-lg font-semibold'>Is ToDesktop For Me?</p>
      <i class={`fa-solid fa-chevron-${openCardIndex===3?'down':'up'}`}></i>

     </div>

     <div className={`${openCardIndex===3?'block':'hidden'} mt-4 text-xl text-slate-700`}>
      <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
     </div>



 
  </div>
 

 <div className="border border-gray-200 bg-gray-50 rounded-xl p-6" onClick={()=>{handleclick(4)}}>

    

     <div className="flex justify-between items-center">
      <p className='text-lg font-semibold'>Is ToDesktop For Me?</p>
      <i class={`fa-solid fa-chevron-${openCardIndex===4?'down':'up'}`}></i>

     </div>

     <div className={`${openCardIndex===4?'block':'hidden'} mt-4 text-xl text-slate-700`}>
      <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
     </div>



 
  </div>


 <div className="border border-gray-200 bg-gray-50 rounded-xl p-6" onClick={()=>{handleclick(5)}}>

    

     <div className="flex justify-between items-center">
      <p className='text-lg font-semibold'>Is ToDesktop For Me?</p>
      <i class={`fa-solid fa-chevron-${openCardIndex===5?'down':'up'}`}></i>

     </div>

     <div className={`${openCardIndex===5?'block':'hidden'} mt-4 text-xl text-slate-700`}>
      <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
     </div>



 
  </div>



</div>

 




</div>


{/* Footer */}


<div className='py-6 px-8 max-w-8xl  mt-12 mx-auto flex flex-col'>

<div className='rounded-2xl bg-gray-100 py-12'>

  <div className='flex flex-col  md:flex-row-reverse items-center gap-12'>
    
     


     
     <p className='text-lg font-semibold'>Documentation</p>

     <div className='flex gap-6'>
      <i class="fa-brands fa-x-twitter text-xl font-bold  " ></i>
       <i class="fa-brands fa-github text-xl font-bold  " ></i>
     </div>


     <a href="#" className='flex flex-1 items-center'>
        <img src="/Assets/logo.png" alt="" />
        <p className='text-xl font-medium'>ToDesktop</p>
      </a>



  </div>

</div>


<div className="subfooter flex flex-col items-center mt-12 gap-5">

  <div className="img flex gap-2 items-center">
    <img src="Assets/asset 54.svg" alt="sub" className='w-4 h-4'/>
    <p>A Y Combinator company.</p>
  </div>

<p className='text-sm text-slate-400'>© 2024 ToDesktop, Inc. All rights reserved.</p>




</div>

</div>


    </div>

     </>
  )
}

export default Hero
