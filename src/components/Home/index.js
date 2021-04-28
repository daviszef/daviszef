import React from 'react'
import { DavisPic } from '../../assets'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div className="sm:container sm:mx-auto md:flex flex justify-center">
            <div className="w-5/6 flex flex-col justify-center items-center md:flex md:flex-row-reverse md:justify-between pb-20 pt-32">
                <div>
                    <img className="w-56 h-56 object-cover rounded-full" src={DavisPic} alt="imageHome"></img>
                </div>
                <div>
                    <div>
                        <p className="font-inter font-bold text-xl">HELLO</p>
                    </div>
                    <div>
                        <p className="font-inter font-bold text-4xl py-2">I'M DAVIS</p>
                    </div>
                    <div>
                        <p className="font-inter font-normal text-base">
                            Im a  UI/UX Designer, and Front End Dev. I like prototyping, it helps me think <br/>
                            through interaction models and new possibilities. I love making an actual<br/> 
                            impact on what I do.
                        </p>
                    </div>

                    <div className="flex flex-row pt-7">
                        <Link className="font-inter font-medium text-lg" to="contact" smooth={true} duration={1000}>Contact Here</Link>
                        <p className="animate-bounce">👈</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home
