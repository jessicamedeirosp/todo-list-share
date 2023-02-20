import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #fafafa;    
        --red: #E6303C;
        --blue: #4e5e95;
        --blue-200: #0f81dc;
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

    html {
        font-size: 10px;     
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

    hr {
        margin-top: 1rem ;
        margin-bottom: 1.6rem ;
    }

    ul {
        margin-left: 30px;
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
        padding-left: 1.6rem;
        padding-right: 1.6rem;
    }

    
    .content-flex {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem
    }

    .content-flex-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .modal-overlay {
        background: rgba( 0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items:center;

    }

    .modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem
    }
    
`;
