import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { useCookie } from "../App/Store";

function CookieCount(){

    const {CookieCount} = useCookie( (state) => state)

    function func(amount){
        if (amount>=1000 && amount < 1000000){
            return `${(amount/1000).toFixed(2)}k`;
        }else if(amount>=1000000 && amount < 100000000){
            return `${(amount/1000000).toFixed(2)}m`;
        }else if(amount>=1000000000 && amount < 1000000000000){
            return `${(amount/1000000000).toFixed(2)}b`;
        }else if(amount>=1000000000000){
            return `${(amount/1000000000000).toFixed(2)}t`;
        }else{return amount}
    }

    return(
      <div><p className="clicker--count">{func(CookieCount.toFixed(2))}<FontAwesomeIcon className="cookie" icon={faCookieBite} /></p></div>
    )
}

export default CookieCount;