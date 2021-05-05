import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { Button } from './Button'
import Bars from '../images/bars.svg'


const Nav = styled.nav `
    height: 60px;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    width: 100%;
    position: fixed;
    padding: 1rem 2rem;
`
const NavLink = css `
    color: #fff;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link) `
    ${NavLink}  
    font-style: italic;
`
const MenuBars = styled.i`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        top: 0;
        position: absolute;
        right: 0;
        transform: translate(-50%, 24%);
    }
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`
const NavMenuLinks = styled(Link)`
    ${NavLink}
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to='/'>BLUE</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {
                    menuData.map((item,index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))
                }
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
