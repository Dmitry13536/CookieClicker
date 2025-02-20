import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuButton({icon, onClick}){


    return(
        <button className="menubutton" onClick={onClick}><FontAwesomeIcon className="menubutton--icon" icon={icon} /></button>
    )
}

export default MenuButton;