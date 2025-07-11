import React from 'react'

const Navbar = () => {

  const handleOnClick = () => {
    // your logic here
    console.log("Menu clicked");
  }

  return (
    <nav className='p-3 flex justify-between items-center bg-white gap-2'>
      <a href="#" className='flex items-center'>
        <img src="/Assets/logo.png" alt="" />
        <p className='text-xl font-medium'>ToDesktop</p>
      </a>
     
     <div className='hidden md:flex gap-12' id='nav-menu'>
        <a href="#" className='font-medium text-lg'>Pricing</a>
        <a href="#" className='font-medium text-lg'>Docs</a>
        <a href="#" className='font-medium text-lg'>ChangeLog</a>
        <a href="#" className='font-medium text-lg'>Blogs</a>
        <a href="#" className='font-medium text-lg'>Login</a>
        

     </div>
     
     <button className='hidden md:flex gap-2 items-center justify-center py-2 px-6 border rounded-lg hover:border-gray-400'>
      
       <img src="Assets/button img.svg" alt="imagua" />
       <p className='text-xl'>Electron Developer</p>
       <i class="fa-solid fa-arrow-right font-bold"></i>

     </button>
     
      <button onClick={handleOnClick} className='text-gray-400 text-2xl p-3 md:hidden'>
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  )
}

export default Navbar
