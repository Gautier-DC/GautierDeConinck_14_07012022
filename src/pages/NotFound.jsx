import React from 'react'
import styled from "styled-components";
import colors from '../utils/style/colors';

const ErrorContainer = styled.div`
    padding: 2em;
    height: 500px;
    width: 100%;
    text-align: center;
    font-size: 2em;
    color: #fff;
`

export default function NotFound() {

    return (
        <main style={{ backgroundColor: `${colors.bgcolor}`}}>
            <ErrorContainer>
               <p> 🤦 this is embarassing... 🤦‍♂️ <br /> Error <span style={{color: 'red', fontWeight: 700}}>404</span> occured</p>
            </ErrorContainer>
        </main>
        )
}