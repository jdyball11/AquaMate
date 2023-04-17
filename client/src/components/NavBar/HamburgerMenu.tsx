import React, { useState } from "react";
import { RxHamburgerMenu } from 'react-icons/rx'

const HamburgerMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
        console.log("open: ", open)
    };
    return (
        <div className="hamburger-menu">
            <button className="hamburger-menu-button">
                <RxHamburgerMenu onClick={handleClick} />
            </button>
        </div>
    );
};

export default HamburgerMenu;