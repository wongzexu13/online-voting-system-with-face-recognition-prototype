import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksPage, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {

const [scrollNav, setScrollnav] = useState(false)

const changeNav = () =>{
    if(window.scrollY >= 80){
        setScrollnav(true)
    }else{
        setScrollnav(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () =>{
    scroll.scrollToTop()
}


  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>e-VOTE</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='event' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Event</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='ourpartner' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Our Partner</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinksPage to='/register' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Register</NavLinksPage>
                    </NavItem>
                    <NavItem>
                        <NavLinksPage to='' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavLinksPage>
                    </NavItem>
                    <NavItem>
                        <NavLinksPage to='/userVoteSelection'>UserVotePage|Dev</NavLinksPage>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar