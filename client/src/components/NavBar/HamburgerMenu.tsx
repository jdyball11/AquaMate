import React, { useState } from "react";
import { FaBars } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'

const HamburgerMenuContainer = styled.div({
})
const HamburgerMenuButton = styled.button({
    border: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: '#87BEFC'
    },
    height: '100%',
})

const HamburgerMenu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const icon = open ? <MdClose /> : <FaBars />;

    return (
        <HamburgerMenuContainer className="hamburger-menu">
            <HamburgerMenuButton className="hamburger-menu-button" onClick={handleClick}>
                {icon}
            </HamburgerMenuButton>
        </HamburgerMenuContainer>
    );
};

export default HamburgerMenu;
