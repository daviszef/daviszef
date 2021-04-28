import React from 'react'
import { Mern, Maybank } from '../../assets'

const About = () => {
    return (
        <div className="w-screen h-auto bg-white" id="about">
            <div className="md:container md:mx-auto flex justify-center ">
                <div className="mb-14">
                    <div className=" flex justify-center">
                        <p className="font-inter font-bold text-3xl py-10">About Me</p>
                    </div>
                    <div className="flex justify-center ">
                        <p className="w-5/6 font-inter font-light text-lg text-justify ">    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="w-5/6">
                            <div className="flex justify-between">
                                
                                <div className="flex flex-col items-center ">
                                    <p className="font-inter font-semibold text-lg">Stack I Use :</p>
                                    <img src={Mern} alt="mernImange" className="mt-2"></img>
                                </div>
                                <div className="flex flex-col items-center ">
                                    <p className="font-inter font-semibold text-lg">Currently Working At :</p>
                                    <div className="flex flex-row mt-2">
                                        <img src={Maybank} alt="maybankimage"></img>
                                        <div className="flex flex-col justify-center ml-3">
                                            <p className="font-inter font-medium text-base">PT.Maybank Finance Indonesia</p>
                                            <p className="font-inter text-sm font-normal">Feb 2021 - Present</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default About
