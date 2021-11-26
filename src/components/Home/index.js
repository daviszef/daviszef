import React from 'react'
import { DavisPic } from '../../assets'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div className="sm:container sm:mx-auto md:flex flex justify-center">
            <div className="w-3/4 flex flex-col justify-center items-center md:flex md:flex-row-reverse md:justify-between pb-20 pt-32">
                <div className="mb-10 lg:mb-0">
                    <img className="w-56 h-56 object-cover rounded-full" src={DavisPic} alt="imageHome"></img>
                </div>
                <div>
                    <div>
                        <p className="font-inter font-bold text-2xl">HELLO</p>
                    </div>
                    <div>
                        <p className="font-inter font-bold text-5xl py-2">I'M DAVIS</p>
                    </div>
                    <div>
                        {/* <p className="font-inter font-normal text-base">
                            Im a  UI/UX Designer, and Frontend Dev based in Jakarta. I like prototyping, it helps me think <br/>
                            through interaction models and new possibilities. I love making an actual<br/> 
                            impact on what I do.
                        </p> */}
                        <p className="font-inter font-normal text-base">
                            I'm a Front-End Engineer based in Jakarta with foucus on React Framework.<br/>
                            Interested in design, specially UI/UX design and Prototyping<br/> 
                        </p>
                    </div>

                    <div className="flex flex-row pt-7">
                        <Link className="transition duration-500 ease-in-out font-inter font-medium text-lg cursor-pointer hover:text-indigo-600 transform hover:-translate-y-1 hover:scale-105" to="contact" smooth={true} duration={1000}>Contact Me</Link>
                        <p className="animate-bounce ml-1">👈</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home
