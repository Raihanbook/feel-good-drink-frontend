import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './Toast.css';

const Toast = forwardRef((props, ref) => {
    const [showToast, setShowToast] = useState(false);

    useImperativeHandle(ref, () => ({
        show(){
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 5000);
        },
    }));
    return (
        <div className="toast" 
            id={showToast ? "show" : "hide"} 
            style={{backgroundColor: props.type === "success" ? "#e4690c" : "#FF0033",
            color: props.type === "success" ? "white" : "white",
        }}
        >
            <div className="symbol">{props.type === "success" ? <h1><i className="fa fa-check" aria-hidden="true"/></h1> : <h1><i className="fa fa-times" aria-hidden="true"/></h1>}</div>
            <div className="message"><h6>{props.message}</h6></div>
        </div>
    );
})

export default Toast;