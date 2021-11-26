import React from 'react'

const Modal = ({ showModal, setShowModal }) => {
    return <>{showModal ?
        <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded absolute" role="alert">
            <strong className="font-bold">Thank you </strong>
            <div className="block sm:inline">for contacting me, i'll reply your email soon!!</div>
        </div>
    : null}</>;
};

export default Modal