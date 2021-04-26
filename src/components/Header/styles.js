import styled from 'styled-components'

export const SiteHeader = styled.header`
    border-top: 5px solid #97c8aa;
    font-family: gothic-open-shaded, sans-serif;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    // position: fixed;
    // top: 0;
    // z-index: 1;
    // left: 0;
    // width: 100%;
    nav {
        display: flex;
        justify-content: space-evenly;
        margin: 1rem 0;
        a {
            font-size: 24px;
            &:hover {
                color: #97c8aa;
            }
        }
    }
`;

export const Container = styled.div`
    
`;

export const MaxContainer = styled.div`
    
`;


export const GridContainer = styled.div`
    
`;

export const Logo = styled.div`
    
`;