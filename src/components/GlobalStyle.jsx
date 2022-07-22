import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Grilled from '../Assets/Grilled-Food-No-Background.png';
import { ImageContext } from '../utils/context';


const GlobalStyle = createGlobalStyle`
    body {
        background: url(${({image}) => image}) no-repeat;
        background-size: cover; 
        background-position: top;
        transition: background 500ms ease-in;
    }
    
`

function Global() {
    const {image} = useContext(ImageContext);

    return ( <GlobalStyle image={image} />);
}

export default Global;