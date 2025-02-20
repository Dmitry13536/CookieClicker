import React from "react";
import { useNavigate } from "react-router-dom";

function Options(){
    const navigate = useNavigate();

    const handleClose = () =>{
        navigate('/')
    }

    return(
        <div className="popup">
            <p>options</p>
            <button onClick={handleClose}>Close</button>
        </div>
    )
}

export default Options;