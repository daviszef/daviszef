import React from 'react'
// import { Mern, Maybank } from '../../assets'

const About = () => {
    return (
        <div className="w-screen h-auto bg-white" id="about">
            <div className="md:container md:mx-auto flex justify-center ">
                <div className="mb-14">
                    <div className=" flex justify-center">
                        <p className="font-inter font-bold text-3xl py-10">About Me</p>
                    </div>
                    <div className="flex justify-center ">
                        <p className="w-4/6 font-inter font-light text-lg text-justify ">Hi, I'm Davis. You can also call me a UI/UX Designer, and front-end engineer. I like prototyping, it helps me think through interaction models and new possibilities. I'm also an entrepreneur and photographer. I don't like to define myself by the work I've done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter. I like to develop expertise in a number of areas over the course of my life and career and open for new oppotunities
                        </p>
                    </div>
                    {/* <div className="flex justify-center mt-10">
                        <div className="w-3/4">
                            <div className="flex flex-col lg:flex-row lg:justify-around ">
                                
                                <div className="flex flex-col items-center ">
                                    <p className="font-inter font-semibold text-lg">Stack I Use :</p>
                                    <img src={Mern} alt="mernImange" className="mt-2"></img>
                                </div>
                                <div className="flex flex-col items-center pt-10 lg:pt-0">
                                    <p className="font-inter font-semibold text-lg">Working Experience :</p>
                                    <div className="flex flex-row mt-2">
                                        <img src={Maybank}className="w-20 h-20"alt="maybankimage"></img>
                                        <div className="flex flex-col justify-center ml-3">
                                            <p className="font-inter font-medium text-base">PT.Maybank Finance Indonesia</p>
                                            <p className="font-inter text-sm font-normal">Feb 2021 - Feb 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="flex flex-col items-center pt-10 lg:pt-7">
                        <p className="font-inter font-bold text-xl">Working Experience :</p>
                        <div className="flex flex-row mt-2">
                            {/* <img src={Maybank}className="w-20 h-20"alt="maybankimage"></img> */}
                            <div className="flex flex-col justify-center">
                                <p className="font-inter font-medium text-base">• Maybank Finance Indonesia - Frontend Engineer</p>
                                <p className="font-inter text-sm font-normal ml-4">Feb 2021 - Feb 2022</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
                
            </div>
        </div>
    )
}

export default About
