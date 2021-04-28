import React from 'react'
import { Forum, Gowes, Class, Cinema } from '../../assets'

const Project = () => {
    return (
        <div className="md:container md:mx-auto flex justify-center" id="project">
            <div className="flex flex-col w-5/6 mb-20">

                <div className=" flex flex-col justify-center items-center">
                    <p className="font-inter font-bold text-3xl pt-10 pb-6">Projects</p>
                    <p className="font-inter font-medium">My Mobile UI Design/Redeign</p>
                </div>
                
                <div className="grid gap-10 grid-cols-2 mt-7">
                    <a href="https://dribbble.com/daviszef">
                        <img  src={Forum} alt="imgproject" className="w-full h-96 rounded-xl bg-white object-cover"></img>
                    </a>
                    <a href="https://dribbble.com/daviszef">
                        <img  src={Gowes} alt="imgproject" className="w-full h-96 rounded-xl bg-white object-cover"></img>
                    </a>
                    <a href="https://dribbble.com/daviszef">
                        <img  src={Class} alt="imgproject" className="w-full h-96 rounded-xl bg-white object-cover"></img>  
                    </a>
                    <a href="https://dribbble.com/daviszef">  
                        <img  src={Cinema} alt="imgproject" className="w-full h-96 rounded-xl bg-white object-cover"></img>
                    </a>
                </div>
                    
        
            </div>

        </div>

    )
}

export default Project
