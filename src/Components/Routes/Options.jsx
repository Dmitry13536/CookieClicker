import React from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "../../App/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";


function Options(){
    const navigate = useNavigate();
    const {Sound, Music, setMusic, setSound} = useSound((state)=>state);

    const handleClose = () =>{
        navigate('/')
    }

    const handleChangeSound = (event) =>{
        setSound(event.target.value)
    }

    const handleChangeMusic = (event) =>{
        setMusic(event.target.value)
    }

    return(
        <div className="popup options">
            <p className="popup--title">options</p>
            <div className="options--input">
                <FontAwesomeIcon icon={faMusic}/><input type="range" value={Music} min={0} max={100} onChange={handleChangeMusic}/>
                {/* <FontAwesomeIcon icon={faVolumeHigh}/><input type="range" value={Sound} min={0} max={100} onChange={handleChangeSound}/> */}
            </div>
            <button className="popup--close" onClick={handleClose}>Close</button>
        </div>
    )
}

export default Options;