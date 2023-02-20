import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    background-color: var(--blue);
    color: var(--white);
    height: 6rem;  
    text-transform: uppercase;

    a + a {
        margin-left: 1.6rem;
    }   
`