import React, {useState} from "react";
import HamburgerIcon from "../../assets/icons/icon-hamburger.svg";
import {ReactComponent as Close} from "../../assets/icons/icon-close.svg";

const Nav = (props) => {
    const[isActive, setActive] = useState(false);

    const showMenu = () => {
        setActive(true);
    }

    const closeMenu = () => {
        setActive(false);
    }

    return (
        <div className="container-lg">
            <nav className={isActive? "Nav show-menu" : "Nav"}>
                <button onClick={showMenu} className="mobile-only Nav--hamburgerBtn"><img className="mobile-only" src={HamburgerIcon}/></button>
                <h1>room</h1>
                <ul>
                    <li className="mobile-only">
                        <button onClick={closeMenu} className="Nav--closeBtn">
                            <Close className="Nav--closeIcon" />
                        </button>
                    </li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;