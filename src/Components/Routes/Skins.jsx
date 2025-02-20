import React from "react";
import { useNavigate } from "react-router-dom";

function Skins(){
    const navigate = useNavigate();

    const handleClose = () =>{
        navigate('/')
    }

    return(
        <div className="popup">
            <p>skins</p>
            <button onClick={handleClose}>Close</button>
        </div>
    )
}

export default Skins;