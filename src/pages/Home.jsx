import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Grilled from '../Assets/Grilled-Food-No-Background.png';
import Dish from '../Assets/Dish-PNG.png';
import Egg from '../Assets/pngegg.png';
import { ImageContext } from '../utils/context';


const HomeWrapper = styled.div`
    padding: 30px 60px;
    color: white;
    z-index: 4;
`
const HomeContainer = styled.div`
    display: flex;
    // border: solid red;

    // flex-wrap: wrap;
`

const LeftStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    // border: solid red;

    > h2 {
        font-size: 80px;
        // border: solid red;
        text-align: justify;
        font-family: Ubuntu;
        color: white;
    }

    > p {
        // border: solid red;
        position: relative;
        bottom: 70px;
        font-family: AnjaliOldLipi;
        font-size: 18px;
        color: white;
    }
`

const ImgContainerStyled = styled.div`
    background-color: gold;
    border-radius: 50%;
    

    img {
        contain: contain;
        width: 600px;
        height: 600px;
    }
`

const RightStyled = styled.div`
    // border: solid green;
    width: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
`
const ScrollText = styled.div`
    // border: solid red;
    display: flex;
    transform: rotateZ(90deg);
    
    jusitfy-content: center;
    align-items: baseline;
    font-family: AnjaliOldLipi;
    position: relative;
    left: 30px;


    button {
        background: none;
        border: solid 1px white;
        border-radius: 30px;
        padding-bottom: 3px;
        font-size: 20px;
        width: 60px;
        margin: 0px 20px ;
        color: white;
    }
    
`

const NavDishStyled = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
    padding: 20px 20px;

    // border: solid red;
    border-radius: 60px;
    overflow: hidden;

    > img {
        margin: 20px 0;
        cursor: pointer;
        transition: trasnform 300ms;
    }

    > img:nth-child(1), img:nth-child(3) {
        transform: scale(0.8);
    }

    > img:nth-child(2) {
        transform: scale(1.5);
    }

`

const HomeFooter = styled.div`
    // border: solid  red;
    // border: solid red;
    display: flex;
    justify-content: space-between;
    font-family: AnjaliOldLipi;
    > div {
        // border: solid blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p {
        // border: solid red;
        padding: -10px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`
const BackOpaq = styled.div`
    position: absolute;
    width: 100%;
    height: 130vh;
    // background-color: rgba(243, 113, 32, 0.7);
    // background: radial-gradient(50% 50% at 50% 50%, #FBBC05 0%, #FF8F3F 100%);
    background: radial-gradient(50% 50% at 50% 50%, rgba(251, 189, 5, 0.8) 0%, rgba(255, 143, 63, 0.8) 100%);
    top: 0;
    left: 0;
    z-index: -1;
`


function Home() {
    const { image, toggleImage } = useContext(ImageContext);

    return (
        <HomeWrapper>
            <BackOpaq></BackOpaq>
            <HomeContainer>
                <LeftStyled>
                    <h2>Enjoy <br /> Delicious <br /> Meals</h2>
                    <p>Meals delivered to <br />your doorstep.</p>
                </LeftStyled>


                <ImgContainerStyled>
                    <img src={image} alt={Grilled} onChange={() => this.style.opacity = 1} />
                </ImgContainerStyled>


                <RightStyled>
                    <ScrollText>
                        <h3>Scroll to see more</h3>
                        <button><span>&rarr;</span></button>
                    </ScrollText>

                    <NavDishStyled>
                        <img src={Dish} alt={Dish} width="90px" height="90px" onClick={() => toggleImage(Dish)} />
                        <img src={Grilled} alt={Grilled} width="90px" height="90px" onClick={() => toggleImage(Grilled)} />
                        <img src={Egg} alt={Egg} width="90px" height="90px" onClick={() => toggleImage(Egg)} />
                    </NavDishStyled>
                </RightStyled>
            </HomeContainer>

            <HomeFooter>
                <div>
                    <span>Price</span>
                    <span><b>N3000</b></span>
                </div>

                <div>
                    <p>
                        <h1>Tasty Soup</h1>
                        Rice noodles, soy sauce, hoisin,<br /> chili garlic sauce, honey
                    </p>
                </div>

                <div>

                    <span>PREPARATION</span>
                    <span><b>20MINS</b></span>
                </div>
            </HomeFooter>
        </HomeWrapper>
    )
}

export default Home;