import React from "react";
import MenuButton from "./MenuButton";
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore";
import { faCircleQuestion, faGear, faShirt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useLargeScreen from "../IsDesktop";

function Menu(){
    const navigate = useNavigate();
    const screen = useLargeScreen();

    const NavigateAbout = ()=>{
        navigate('/about')
    }

    const NavigateStore = ()=>{
        navigate('/store')
    }

    const NavigateSkins = ()=>{
        navigate('/skins')
    }

    const NavigateOptions = ()=>{
        navigate('/options')
    }

    return(
        <div className="menu">
            {!screen && <MenuButton onClick={NavigateStore} icon={faStore}/>}
            <MenuButton onClick={NavigateSkins} icon={faShirt}/>
            <MenuButton onClick={NavigateOptions} icon={faGear}/>
            <MenuButton onClick={NavigateAbout} icon={faCircleQuestion}/>
        </div>
    )
}

export default Menu;