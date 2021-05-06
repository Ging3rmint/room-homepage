import React from "react";
import AngleLeft from "../../assets/icons/icon-angle-left.svg";
import AngleRight from "../../assets/icons/icon-angle-right.svg";

const Tab = (props) => {
    return (
        <div className="Tab">
            <button className="Tab--left" onClick={props.prevSlide}>
                <img src={AngleLeft} alt="Angle icon"/>
            </button>
            <button className="Tab--right" onClick={props.nextSlide}>
                <img src={AngleRight} alt="Angle icon"/>
            </button>
        </div>
    );
}

export default Tab;