import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { Logo } from '../../assets'

const Header = () => {
    return (
        <div>
            <div className="sm:container sm:mx-auto md:flex flex justify-center"> 
                <div className="w-11/12 flex justify-center md:justify-between items-center pt-8 md:pt-14 md:pb-10">
                    <div className="hidden md:flex">
                        <img  src={Logo} alt="imgproject" className="w-10 h-10 cursor-pointer" onClick={()=>scroll.scrollToTop()}></img>
                    </div>
                    <div className="flex justify-between w-10/12 md:w-3/12 md:justify-between md:flex">
                        {/* <a href="#home" className="font-inter font-medium text-center cursor-pointer  hover:text-purple-600 visited:text-purple-600" onClick={()=>scroll.scrollToTop()} >Home</a> */}
                        <a href="#about" className="font-inter font-medium text-center cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-indigo-500 hover:to-pink-500" onClick={()=>scroll.scrollTo(440)}>Work</a>
                        <a href="https://drive.google.com/file/d/1ZtgLAfujBz9WOtAI_4xK-1eYxiOR6YI_/view?usp=sharing" className="font-inter font-medium text-center text-transparent bg-clip-text cursor-pointer bg-gradient-to-r from-black to-black hover:from-indigo-500 hover:to-pink-500" >Resume</a>
                        <a href="https://www.behance.net/daviszef" className="font-inter font-medium text-center text-transparent bg-clip-text cursor-pointer bg-gradient-to-r from-black to-black hover:from-indigo-500 hover:to-pink-500" >Behance</a>
                        <a href="#contact" className="font-inter font-medium text-center cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-indigo-500 hover:to-pink-500" onClick={()=>scroll.scrollTo(1800)}>Contact</a>
                    </div>

                    {/* mobile btn */}
                    {/* <div className="md:hidden flex item-center" >
                        <button>
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div> */}
                    
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default Header
