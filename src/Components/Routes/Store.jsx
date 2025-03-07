import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import UpgradeMenu from "../../Components/UpgradeMenu";
import UpgradeMenuCLick from "../../Components/UpgradeMenuClick";
import CookieCount from "../CookieCount";

function Store(){
    const [menu, setMenu] = useState(true);
    const navigate = useNavigate();

    const handleClick = () =>{
        setMenu(false);
    }

    const handleAuto = () =>{
        setMenu(true);
    }

    const handleClose = () =>{
        navigate('/')
    }

    return(
        <div className="popup store">
            <p className="popup--title">store</p>
            <div className="store__choose"><button className={menu?'dark':''} onClick={handleAuto}>Auto</button><CookieCount /><button className={!menu?'dark':''} onClick={handleClick}>Click</button></div>
            {menu ? <UpgradeMenu /> : <UpgradeMenuCLick /> }
            <button className="popup--close" onClick={handleClose}>Close</button>
        </div>
    )
}

export default Store;