import React from "react";
import UpgradeCard from "./UpgradeCard";
import img1 from '../imgs/card1.svg';
import img2 from '../imgs/Rectangle 12.svg';
import img3 from '../imgs/Rectangle 12-1.svg';
import img4 from '../imgs/Rectangle 12-2.svg';
import img5 from '../imgs/Rectangle 12-3.svg';


function UpgradeMenu(){

    return(
        <div className="upgrademenu">
            <UpgradeCard img={img1} title={'Cookie factory'} startAdd={1} startCost={10} />
            <UpgradeCard img={img2} title={'Sugar Rush Automation'} startAdd={5} startCost={100} />
            <UpgradeCard img={img3} title={'Eternal Cookie Bake'} startAdd={30} startCost={1000} />
            <UpgradeCard img={img4} title={'The Cookie Alchemist'} startAdd={100} startCost={10000} />
            <UpgradeCard img={img5} title={'Sugar Bird'} startAdd={500} startCost={50000} />
        </div>
    )
}

export default UpgradeMenu;