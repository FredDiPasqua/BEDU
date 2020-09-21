import React from 'react';
import ReactDOM from 'react-dom'
import '../assets/styles/components/Modal.scss'

const Modal = (props) => {
    if (props.isOpen) {
        return null;
    }
    return ReactDOM.createPortal (
            <div className="login">
                <div className="containerModal">
                    <button onClick={props.onClose} className="closeBtn" > X </button>
                    {props.children}
                </div>
            </div>, 
            document.getElementById("modal")
        )


    
};


export default Modal;

