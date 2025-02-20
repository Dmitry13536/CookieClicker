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
            <UpgradeCard img={img1} Auto={true} title={'Cookie factory'} startAdd={1} startCost={10} />
            <UpgradeCard img={img2} Auto={true} title={'Sugar Rush Automation'} startAdd={3} startCost={100} />
            <UpgradeCard img={img3} Auto={true} title={'Eternal Cookie Bake'} startAdd={10} startCost={1000} />
            <UpgradeCard img={img4} Auto={true} title={'The Cookie Alchemist'} startAdd={50} startCost={10000} />
            <UpgradeCard img={img5} Auto={true} title={'Sugar Bird'} startAdd={300} startCost={50000} />
        </div>
    )
}

export default UpgradeMenu;