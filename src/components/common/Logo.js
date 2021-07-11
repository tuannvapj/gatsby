import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LogoWrapper = styled.h1`
    float: left;
    border-top: 4px solid #648880;
    font-size: 48px;
    line-height: 44px;
    padding: 40px 0 20px 0;
    letter-spacing: .5px;
    text-transform: uppercase;
`
const LogoLink = styled(Link)`
    color: white;
    text-decoration: none;
    
    &:hover {
        color: #648880;
    }
`

const Logo = () => {
    return (
        <LogoWrapper>
            <LogoLink to="/">STYLES <br/> CONFERENCE</LogoLink>
        </LogoWrapper>
    )
}

export default Logo;