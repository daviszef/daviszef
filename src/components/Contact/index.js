import React, { useRef, useState } from 'react'
import { Agree } from '../../assets'
import emailjs from 'emailjs-com';
import Modal from '../Modal'

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const form = useRef();
    const name = useRef();
    const email = useRef();
    const subject = useRef();
    const message = useRef();
 
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pf1bwkq', 'template_0bye508', form.current, 'user_KhNM04ZOpehYYCnqPMIAi')
            .then((result) => {
                openModal();
                setTimeout(() => {setShowModal(false);},3500)
            }, (error) => {
                console.log(error.text);
            });                 
    };                              

    const openModal = () => {
        setShowModal(prev => !prev);       
    }   

    const clearInput = () => {
        name.current.value = "";
        email.current.value = "";
        subject.current.value = "";
        message.current.value = "";
    }

    return (
        <div className="w-screen h-auto bg-white flex justify-center items-center" id="contact">
            <div className="md:container md:mx-auto flex justify-center ">
                <div className="w-3/4 ">
                    <div className=" flex flex-col justify-center items-center">
                        <p className="font-inter font-bold text-3xl pt-10 pb-6">Get In Touch</p>
                        <p className="font-inter font-regular">Interesting in working together?</p>
                        <p className="font-inter font-regular">Feel free to contact me for UI design or any project and collaboration</p>
                    </div>

                    <div className=" flex flex-row justify-between mt-3">
                        <div className="w-5/12">
                            <img className="object-cover h-auto" src={Agree} alt="imgAgree"></img>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center w-7/12 mt-9">
                            <div className="w-11/12">
                                <div className="flex flex-row mb-3">
                                    <input type="text" placeholder="Name" name="name" ref={name} className="w-1/2 h-11 bg-mygrey rounded-lg mr-3 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-textplace font-inter font-medium " />

                                    <input type="email" placeholder="Email" name="email" ref={email} className="w-1/2 h-11  bg-mygrey rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-textplace font-inter font-medium " />
                                </div>
                                <input type="text" placeholder="Subject" name="subject" ref={subject} className="w-full h-11  bg-mygrey rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-textplace font-inter font-medium mb-3" />

                                <textarea type="text" placeholder="Message" name="message" ref={message} className="w-full h-44  bg-mygrey rounded-lg
                                py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-textplace font-inter font-medium mb-3 resize-none" />
                                <div className="w-full flex justify-center">

                                    <button onClick={clearInput} type="submit" value="Send" className="flex justify-center items-center w-24 h-10 color bg-gray-700 rounded-full cursor-pointer hover:bg-gray-800">
                                        <div className="font-semibold font-inter color text-white">Send</div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}

export default Contact
