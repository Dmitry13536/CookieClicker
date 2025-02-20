import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../imgs/Author.png'

function About(){
    const navigate = useNavigate();

    const handleClose = () =>{
        navigate('/')
    }

    return(
        <div className="popup about">
            <p className="popup--title">about</p>
            <div>
                <p className="about--text">Creator</p>
                <img src={img1} alt="author" />
            </div>
        
                <p className="about--text">My github</p>
                <a href="">Click</a>
            
            <button className="popup--close" onClick={handleClose}>Close</button>
        </div>
    )
}

export default About;