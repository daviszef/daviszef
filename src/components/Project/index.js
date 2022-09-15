import React from 'react'
import { Gowes, Class, Cinema, Manca } from '../../assets'


const Project = () => {
    return (
        <div className="md:container md:mx-auto flex justify-center" id="project">
            <div className="flex flex-col w-11/12 mb-32">

                {/* <div className=" flex flex-col justify-center items-center">
                    <p className="font-inter font-bold text-3xl pt-10 pb-6">Projects</p>
                    <p className="font-inter font-medium">My Mobile UI Design/Redeign</p>
                </div> */}
                
                <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 mt-7">
                    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <a href="https://www.behance.net/gallery/135791785/My-First-Case-Study" > 
                            <img  src={Manca} alt="imgproject" className="w-full h-full rounded-xl bg-white object-cover"></img>
                        </a>
                    </div>
                    <a href="https://www.behance.net/daviszef" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <img  src={Gowes} alt="imgproject" className="w-full h-full rounded-xl bg-white object-cover"></img>
                    </a>
                    <a href="https://www.behance.net/daviszef" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <img  src={Cinema} alt="imgproject" className="w-full h-full rounded-xl bg-white object-cover"></img>  
                    </a>
                    <a href="https://www.behance.net/daviszef" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">  
                        <img  src={Class} alt="imgproject" className="w-full h-full rounded-xl bg-white object-cover"></img>
                    </a>
                </div>
                    
        
            </div>

        </div>

    )
}

export default Project
