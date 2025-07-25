import React,{useEffect, useState} from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const[showMobileMenu, setShowMobileMenu]=useState(false);
  useEffect(()=>{
   if(showMobileMenu){
    document.body.style.overflow='hidden'
   }else{
     document.body.style.overflow='auto'
   }
   return ()=>{
     document.body.style.overflow='auto'
   }
  },[showMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo"/>
        
   
          <ul className=" hidden md:flex gap:7 text-white flex gap-7">
           <a href="#Header" className="hover:text-gray-400 transition">Home</a>
           <a href="#About" className="hover:text-gray-400 transition">About</a>
           <a href="#Projects" className="hover:text-gray-400 transition">Projects</a>
           <a href="#Testimonials" className="hover:text-gray-400 transition">Testimonials</a>
          </ul>
          <button className="hidden  md:block bg-white text-black px-8 py-2 rounded-full ">
            Signup
          </button>
          <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt=''/>
   </div> 
      {/* ---------mobile-menu */}
      <div className={`md:hidden ${showMobileMenu? 'fixed w-full' :'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}> 
        <div className='flex  justify-end p-6 cursor-pointer'>
          <img src={assets.cross_icon} onClick={()=>setShowMobileMenu(false)} className='w-6' alt=""/>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=>setShowMobileMenu(false)}  href='#header' className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=>setShowMobileMenu(false)}  href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
          <a  onClick={()=>setShowMobileMenu(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={()=>setShowMobileMenu(false)} href='#Testimonails' className='px-4 py-2 rounded-full inline-block'>Testimonails</a>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
