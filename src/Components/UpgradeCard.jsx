import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCookie } from "../App/Store";

function UpgradeCard({startAdd, img, title}){
    const [cost, setCost] = useState(() => {
        const storedCost = localStorage.getItem(`${title}-cost`);
        return storedCost ? parseFloat(storedCost) : startAdd * 10; // Стартовая цена в 10 раз больше startAdd
    });

    const [multiplier, setMultiplier] = useState(() => {
        const storedMultiplier = localStorage.getItem(`${title}-multiplier`);
        return storedMultiplier ? parseFloat(storedMultiplier) : 1.37;
    });

    const { CookieCount, decrementBy, incrementClick } = useCookie((state) => state);

    useEffect(() => {
        localStorage.setItem(`${title}-cost`, cost.toString());
        localStorage.setItem(`${title}-multiplier`, multiplier.toString());
    }, [cost, multiplier, title]);


    const buy = () => {
        if (cost <= CookieCount) {
            incrementClick(startAdd);
            decrementBy(cost);
            setCost(prevCost => prevCost * multiplier);
            setMultiplier(prevMultiplier => prevMultiplier + 0.02);
        } else {
            console.log(cost, CookieCount);
        }
    };


    return(
        <div className="card">
            <img className="card--img" src={img} alt="Картинка" />
            <div className="card__info">
                <p className="card--title">{title}</p>
                <div className="card__numbers">
                    <p>+{startAdd}</p>
                    <p>{cost.toFixed(2)}</p>
                </div>
            </div>
            <button className="card--button" onClick={buy} disabled={cost > CookieCount}><FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    )

}

export default UpgradeCard;
