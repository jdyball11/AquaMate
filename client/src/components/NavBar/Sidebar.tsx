import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import HamburgerMenu from "./HamburgerMenu";
import { motion, AnimatePresence } from 'framer-motion'
import { BiHomeAlt, BiLogOut } from 'react-icons/bi';
import { AiOutlineHistory } from 'react-icons/ai';
import { MdOutlineManageAccounts} from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';

const SidebarContainer = styled(motion.div)({
  position: 'fixed',
  display: 'flex',
  top: '0',
  left: '0',
  height: '100%',
  padding: '20px 0',
  backgroundColor: '#fff',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  zIndex: '7',
})

const SidebarContent = styled.div({
  padding: '30px 0',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-between',

})

const SidebarBottomContent = styled.div({
  marginTop: '80px',
})

const Lists = styled.ul({
  listStyle: 'none',
  padding: '20px 20px 20px 0',
  fontSize: '20px',
})

const NavLink = styled.a({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginBottom: '30px',
  color: '#009dc4',
})

const SideSpan = styled.span({
  marginLeft: '20px',
})


const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return ( <>
    <div onClick={toggle}>
        <HamburgerMenu />
    </div>
    <SidebarContainer 
      initial={{width: 0}}
      animate={{width: isOpen ? '260px' : '0'}}
      className="sidebarContainer" 
      >
      <div onClick={toggle}>
        <HamburgerMenu />
      </div>
      <SidebarContent className="sidebarContent">
        <Lists className="lists">
          <motion.li className="list" whileHover={{ scale: 1.1 }}>
            <NavLink href="#" className="nav-link"><BiHomeAlt />
              <SideSpan className="link">Dashboard</SideSpan>
            </NavLink>
          </motion.li>
          <motion.li className="list" whileHover={{ scale: 1.1 }} >
            <NavLink href="#" className="nav-link"><AiOutlineHistory />
              <SideSpan className="link">History</SideSpan>
            </NavLink>
          </motion.li>
          <motion.li className="list" whileHover={{ scale: 1.1 }} >
            <NavLink href="#" className="nav-link"><FaUserFriends />
              <SideSpan className="link">Friends</SideSpan>
            </NavLink>
          </motion.li>
          <motion.li className="list" whileHover={{ scale: 1.1 }} >
            <NavLink href="#" className="nav-link"><MdOutlineManageAccounts />
              <SideSpan className="link">Account</SideSpan>
            </NavLink>
          </motion.li>
          <SidebarBottomContent className="bottomContent">
          <motion.li className="list" whileHover={{ scale: 1.1 }} >
            <NavLink href="#" className="nav-link"><BiLogOut />
              <SideSpan className="link">Logout</SideSpan>
            </NavLink>
          </motion.li>
          </SidebarBottomContent>
        </Lists>
      </SidebarContent>
    </SidebarContainer>
    </>
  )
}

export default Sidebar
