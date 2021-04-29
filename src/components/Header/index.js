import React from 'react'
import {animateScroll as scroll} from 'react-scroll'

const Header = () => {
    return (
        <div className="w-screen flex justify-center items-center fixed bg-mygrey h-16">
            <div className="flex justify-between w-2/3 md:w-3/12 md:flex md:justify-between">
                <a href="#home" className="font-inter font-medium text-center cursor-pointer  hover:text-purple-600 visited:text-purple-600" onClick={()=>scroll.scrollToTop()} >Home</a>
                <a href="#about" className="font-inter font-medium text-center cursor-pointer hover:text-purple-600  " onClick={()=>scroll.scrollTo(370)}>About</a>
                <a href="#project" className="font-inter font-medium text-center cursor-pointer hover:text-purple-600" onClick={()=>scroll.scrollTo(880)}>Project</a>
                <a href="#contact" className="font-inter font-medium text-center cursor-pointer hover:text-purple-600" onClick={()=>scroll.scrollTo(1800)}>Contact</a>
            </div>
            
        </div>
    )
}

export default Header
