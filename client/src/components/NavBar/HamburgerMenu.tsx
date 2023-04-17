import React, { useState } from "react";
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseLine } from 'react-icons/ri'
import styled from 'styled-components'

const HamburgerMenuContainer = styled.div({
})
const HamburgerMenuButton = styled.button({
    border: 'none',
    backgroundColor: 'transparent'
})

const HamburgerMenu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const icon = open ? <RiCloseLine /> : <RxHamburgerMenu />;

    return (
        <HamburgerMenuContainer className="hamburger-menu">
            <HamburgerMenuButton className="hamburger-menu-button" onClick={handleClick}>
                {icon}
            </HamburgerMenuButton>
        </HamburgerMenuContainer>
    );
};

export default HamburgerMenu;