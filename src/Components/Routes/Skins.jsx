import React from "react";
import { useNavigate } from "react-router-dom";
import { useImg } from "../../App/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skin1 from '../../imgs/Skin1.svg'
import skin2 from '../../imgs/skin2.svg'
import skin3 from '../../imgs/skin3.svg'
import skin4 from '../../imgs/skin4.svg'
import skin5 from '../../imgs/skin5.svg'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Skins(){
    const navigate = useNavigate();
    const {Img, plusImg, minusImg} = useImg(state => state);

    // const ImgP = useState(()=>{
    //     const storedImg = localStorage.getItem('img-storage');
    //     return storedImg ? storedImg : Img;
    // })

    const handleClose = () =>{
        navigate('/')
    }

    const imgs = {
        1:skin1,
        2:skin2,
        3:skin3,
        4:skin4,
        5:skin5,
    }

    // useEffect(()=>{
    //     localStorage.setItem('img-storage', Img)
    // }, [Img])

    return(
        <div className="popup skins">
            <p className="popup--title">skins</p>
            <div className="popup__content">
                <div className="skin__choose">
                    <button className="skin__choose--arrow" onClick={minusImg}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <div className="skin__choose--img"><img src={imgs[Img]} alt="" /></div>
                    <button className="skin__choose--arrow" onClick={plusImg}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                {/* <button className="popup--close">Apply</button> */}

            </div>
            <button className="popup--close" onClick={handleClose}>Close</button>
        </div>
    )
}

export default Skins;