import { createGlobalStyle } from 'styled-components';

const GlobalStyle  = createGlobalStyle`
 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1200px) {
            font-size: 80%;
        }
        @media (max-width: 1200px) {
            font-size: 70%;
        }
    }

    body {
        background: #1b1b1b;
        font-family: 'Inter', sans serif;
        overflow-x: hidden;
    }

    button {
        font-family: 'Inter', sans serif;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background-color: #23d997;
            color: white;
        }
        @media (max-width: 500px) {
            margin-top: 2rem;
            }
    }
    h2 {
        font-weight: lighter;
        font-size: 2.5rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    a {
        font-size: 1rem;
    }
    span {
        font-weight: bold;
        color: #23d997;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1rem;
        line-height: 150%;
    }
` ;

export default GlobalStyle;