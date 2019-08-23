import styled from 'styled-components';

export const GridWrapper = styled.div`
display: grid;
height: 100vh;
grid-template-columns: 1fr;
grid-template-rows: 1fr 7fr 0.5fr;
grid-template-areas:
    "header"
    "content"
    "footer";
    
   `;
