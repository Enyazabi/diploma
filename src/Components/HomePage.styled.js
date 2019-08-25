import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: grid;
    height: 100vh;
    padding-left: 30px;
    align-items: center;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
        "title"  
        "text" 
        "button";
`;

export const HomeTextTitle = styled.div`
    grid-area: title;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #2C375E;
`;

export const HomeText = styled(HomeTextTitle)`
    grid-area: text;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #2C375E;
`;

