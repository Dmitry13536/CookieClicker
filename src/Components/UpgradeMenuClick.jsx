import React from "react";
import UpgradeCard from "./UpgradeCard";
import img1 from '../imgs/Rectangle 12-4.svg';
import img2 from '../imgs/Rectangle 12-5.svg';
import img3 from '../imgs/Rectangle 12-6.svg';
import img4 from '../imgs/Rectangle 12-7.svg';
import img5 from '../imgs/Rectangle 12-8.svg';

function UpgradeMenuClick(){

    return(
        <div className="upgrademenu">
            <UpgradeCard img={img1} Auto={false} title={'Golden Click Aura'} startAdd={1} startCost={10} />
            <UpgradeCard img={img2} Auto={false} title={'Hyper Cookie Fingers'} startAdd={5} startCost={100} />
            <UpgradeCard img={img3} Auto={false} title={'Quantum Click Amplifier'} startAdd={30} startCost={700} />
            <UpgradeCard img={img4} Auto={false} title={'Cookie Click Frenzy'} startAdd={100} startCost={5000} />
            <UpgradeCard img={img5} Auto={false} title={'Divinity\'s Touch'} startAdd={500} startCost={20000} />
        </div>
    )
}

export default UpgradeMenuClick;