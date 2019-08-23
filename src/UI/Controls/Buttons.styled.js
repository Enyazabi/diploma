import styled from 'styled-components';

export const Button = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: ${(props) => (props.variant==='signUp'?'bold':'normal')};
    font-size: ${(props) => (props.variant==='signUp'?'20px':'26px')};
    line-height: 30px;
    border: none;
    background: none;
    outline: none;
    align-items: flex-end;
    text-align: justify;
    cursor: pointer;
    color: ${(props) => (props.variant==='signUp'?'white':'#1945E4')};
    :hover {
        color: #142D86;
        text-decoration: underline;
    }; 
    :active {
        color: grey;
`;
