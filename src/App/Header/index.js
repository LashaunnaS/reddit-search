import React from 'react';
import { Nav, Logo } from './TopBar';
import logo from "./img/redditLogo.png";


const Header = () => (
    <Nav>
        <Logo src={logo} alt="Logo" />
    </Nav>
);

export default Header;