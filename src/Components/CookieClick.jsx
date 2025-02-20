import React from "react";
import { useCookie } from "../App/Store";
import img from '../imgs/Skin1.svg';

function CookieClick(){
    const {CookieCount, decrementBy, incrementCookie} = useCookie((state) => state)
    
    return(
        <div className="clicker">
            <img className="clicker--img" onClick={incrementCookie} src={img} alt="Cookie" />
        </div>
    )
}

export default CookieClick;