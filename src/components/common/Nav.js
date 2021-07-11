import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavWrapper = styled.nav`
    float: right;
`

const NavItem = styled.li`
    display: inline-block;
    margin: 0 10px;
    vertical-align: top;

    &:last-child {
        margin: 0;
    }
`

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        color: #648880;
    }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <NavItem><NavLink to="/">home</NavLink></NavItem>
                <NavItem><NavLink to="/speakers">speakers</NavLink></NavItem>
                <NavItem><NavLink to="/schedule">schedule</NavLink></NavItem>
                <NavItem><NavLink to="/venue">venue</NavLink></NavItem>
                <NavItem><NavLink to="/register">register</NavLink></NavItem>
            </ul>
        </NavWrapper>
    )
}

export default Nav;