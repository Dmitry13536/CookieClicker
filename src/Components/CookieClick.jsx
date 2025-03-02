import React from "react";
import { useCookie } from "../App/Store";
import { useImg } from "../App/Store";
import skin1 from '../imgs/Skin1.svg'
import skin2 from '../imgs/skin2.svg'
import skin3 from '../imgs/skin3.svg'
import skin4 from '../imgs/skin4.svg'
import skin5 from '../imgs/skin5.svg'

function CookieClick(){
    const {incrementCookie} = useCookie((state) => state)
    const {Img} = useImg(state => state);

    const imgs = {
        1:skin1,
        2:skin2,
        3:skin3,
        4:skin4,
        5:skin5,
    }

    return(
        <div className="clicker">
            <img className="clicker--img" onClick={incrementCookie} src={imgs[Img]} alt="Cookie" />
        </div>
    )
}

export default CookieClick;