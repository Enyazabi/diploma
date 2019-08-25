import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header"
        "content"
        "footer";
`;
