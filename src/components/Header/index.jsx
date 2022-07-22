import React from 'react';
import styled from 'styled-components';



const HeaderWrapper = styled.div`
    padding: 30px 60px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    // border: solid red;
    z-index: 4;
    font-family: Ubuntu;
`

const LogoStyled = styled.div`
    width: 100px;

    span {
        font-family: Ani;
        font-weight: bold;
        font-size: 40px;
        color: white;
    }

`
const NavStyled = styled.div`
    display: flex;
    color: white;
    // padding: 0px 5rem;
    // border: solid red;

    span {
        margin: 0 2rem;
        cursor: pointer;
    }
`
const ButtonStyled = styled.button`
    border: solid 1px white;
    border-radius: 20px;
    padding: 10px 20px;
    color: #FFFFFF;
    background: none;
    transition: background 300ms, box-shadow 300ms;
    &:hover {
        cursor: pointer;
        background-color: #F37120;
        box-shadow: 0px 6px 30px #FBAD39;
        border-color: #F37120;
    }
`

function Header() {

    return (
        <HeaderWrapper>
            <LogoStyled><span>Cooks</span></LogoStyled>

            <NavStyled>
                <span>Home</span>
                <span>Restaurants</span>
                <span>HomeChefs</span>
                <span>Offers</span>
                <span>About us</span>
            </NavStyled>

            <ButtonStyled>Sign up</ButtonStyled>
        </HeaderWrapper>
    )
}

export default Header;