import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #fafafa;    
        --red: #E6303C;
        --blue: #4e5e95;
        --green: #32A317;
        --yellow: #FABA25;       
        --gray-200: #eeeeee;
        --gray-500: #d7d7d7;
        --gray: #969cb3;
        --white: #fff;

        --border-radius: .8rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    // font-size default 16px (desktop)
    html {
        font-size: 10px;
        /* @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        } */
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem
    }
    
    a {
        color: inherit;
        text-decoration: none ;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


    button {   
        padding: 0 1.5rem;
        height: 4rem;
        
        border: 0;
        font-weight: 600;
        text-transform: uppercase;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9);
        }
    }
 
    .wrapper {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding-left: 1.6rem ;
        padding-right: 1.6rem ;
    }

    
    .content-flex {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
