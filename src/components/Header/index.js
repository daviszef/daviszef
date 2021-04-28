import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'

const Header = () => {
    return (
        <div className="w-screen flex justify-center pt-10 fixed bg-mygrey pb-5">
            <div className="flex justify-between w-2/3 md:w-2/6 md:flex md:justify-between">
                <a className="font-inter font-medium" onClick={()=>scroll.scrollToTop()} >Home</a>
                <a className="font-inter font-medium" onClick={()=>scroll.scrollTo(360)}>About</a>
                <Link className="font-inter font-medium" onClick={()=>scroll.scrollTo(820)}>Project</Link>
                <Link className="font-inter font-medium" to="contact" smooth={true} duration={1000}>Contact</Link>
            </div>
        </div>
    )
}

export default Header
