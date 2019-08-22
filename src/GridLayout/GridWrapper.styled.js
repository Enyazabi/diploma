import styled from 'styled-components';

export const GridWrapper = styled.div`
background: rgba(237, 237, 237, 0.49);
display: grid;
height: 100vh;
grid-template-columns: 1fr;
grid-template-rows: 1fr 7fr 0.5fr
grid-rows-gap: 5px;
grid-template-areas:
    "header"
    "content"
    "footer"
   `;
