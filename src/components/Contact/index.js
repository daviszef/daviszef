import React from 'react'
import { Agree } from '../../assets'

const Contact = () => {
    return (
        <div className="w-screen h-auto bg-white flex justify-center items-center" id="contact">
            <div className="md:container md:mx-auto flex justify-center ">
                <div className="w-5/6">
                    <div className=" flex flex-col justify-center items-center">
                        <p className="font-inter font-bold text-3xl pt-10 pb-6">Get In Touch</p>
                        <p className="font-inter font-regular">Interesting in working together?</p>
                        <p className="font-inter font-regular">Feel free to contact me for UI design or any project and collaboration</p>
                    </div>

                    <div className=" flex flex-row justify-between mt-3">
                        <div className="w-5/12">
                            <img className="object-cover h-auto" src={Agree} alt="imgAgree"></img>
                        </div>
                        <div className="flex flex-col justify-center items-center w-7/12 mt-9">
                            <div className="w-11/12">
                                <div className="flex flex-row mb-3">
                                    <input type="text" placeholder="Name" className="w-full h-11 bg-mygrey rounded-lg mr-3 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-textplace font-inter font-medium " />
                            
                                    <input type="text" placeholder="Email" className="w-7/12 h-11  bg-mygrey rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-textplace font-inter font-medium " />
                                </div>
                                <input type="text" placeholder="Subject" className="w-full h-11  bg-mygrey rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-textplace font-inter font-medium mb-3" />

                                <textarea type="text" placeholder="Message" className="w-full h-44  bg-mygrey rounded-lg
                                py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-textplace font-inter font-medium mb-3 resize-none" />
                                <div className="w-full flex justify-center">

                                    <div className="flex justify-center items-center w-24 h-10 bg-btngrey rounded-full cursor-pointer">
                                        <p className="font-semibold font-inter colo text-white">Send</p>
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

export default Contact
