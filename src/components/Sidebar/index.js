import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkPage, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="event" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Event</SidebarLink>
                <SidebarLink to="ourpartner" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Our Partner</SidebarLink>
                <SidebarLinkPage to="register">Register</SidebarLinkPage>
                <SidebarLinkPage to="contactus">Contact Us</SidebarLinkPage>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar