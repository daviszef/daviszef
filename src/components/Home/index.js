import React from 'react'
import { DavisPic } from '../../assets'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div className="sm:container sm:mx-auto md:flex flex justify-center pt-40 pb-32">
            <div className="w-11/12 flex flex-col justify-center items-center md:flex md:flex-row-reverse md:justify-between pb-20 pt-10">
                <div className="mb-10 lg:mb-0">
                    {/* <img className="w-56 h-56 object-cover rounded-full" src={DavisPic} alt="imageHome"></img> */}
                </div>
                <div>
                    {/* <div>
                        <p className="font-inter font-bold text-2xl text-white">HELLO</p>
                    </div> */}
                    <div>
                        <p className="font-inter font-bold text-8xl py-2 text-white">hi, i'm davis</p>
                    </div>
                    <div>
                        {/* <p className="font-inter font-normal text-base">
                            Im a  UI/UX Designer, and Frontend Dev based in Jakarta. I like prototyping, it helps me think <br/>
                            through interaction models and new possibilities. I love making an actual<br/> 
                            impact on what I do.
                        </p> */}
                        <p className="font-inter font-normal text-xl text-white">
                            interaction, product, ui/ux designer <a className="text-yellow-500">@CIMB Niaga</a><br/>
                        </p>
                    </div>

                    <div className="flex flex-row pt-7">
                        
                        <a href="https://drive.google.com/file/d/1dPJL4zqIr1dbolv9dQHq5Wf_tyGtUbYj/view?usp=sharing" className="flex justify-center items-center w-72 h-10 border-2 border-indigo-400 rounded-lg mr-4 cursor-pointer hover:bg-indigo-400 font-semibold font-inter color text-white text-sm"> Resume → </a>

                        {/* <Link className="transition duration-500 ease-in-out font-inter font-medium text-lg cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-white to-white hover:from-indigo-500 hover:to-pink-500 transform hover:-translate-y-1 hover:scale-105" to="contact" smooth={true} duration={1000}>Contact Me</Link>
                        <p className="animate-bounce ml-1">👈</p> */}
                        <Link className="flex justify-center items-center w-48 h-10 border-2 border-red-500 hover:bg-red-500 rounded-lg text-white cursor-pointer font-semibold font-inter color text-sm" to="contact" smooth={true} duration={1000}>Contact Me 👈</Link>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home
