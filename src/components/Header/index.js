import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { Logo } from '../../assets'

const Header = () => {
    return (
        <div className="sm:container sm:mx-auto md:flex flex justify-center"> 
            <div className="w-11/12 flex justify-between items-center bg-mygrey h-32">
                <div>
                    <img  src={Logo} alt="imgproject" className="w-10 h-10 cursor-pointer" onClick={()=>scroll.scrollToTop()}></img>
                </div>
                <div className="flex justify-between w-2/3 md:w-3/12 md:flex md:justify-between">
                    {/* <a href="#home" className="font-inter font-medium text-center cursor-pointer  hover:text-purple-600 visited:text-purple-600" onClick={()=>scroll.scrollToTop()} >Home</a> */}
                    <a href="#about" className="font-inter font-medium text-center cursor-pointer hover:text-purple-600" onClick={()=>scroll.scrollTo(440)}>Work</a>
                    <a href="https://drive.google.com/file/d/1ZtgLAfujBz9WOtAI_4xK-1eYxiOR6YI_/view?usp=sharing" className="font-inter font-medium text-center cursor-pointer hover:text-purple-600" >Resume</a>
                    <a href="https://www.behance.net/daviszef" className="font-inter font-medium text-center cursor-pointer hover:text-purple-600" >Behance</a>
                    <a href="#contact" className="font-inter font-medium text-center cursor-pointer hover:text-purple-600" onClick={()=>scroll.scrollTo(1800)}>Contact</a>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Header
