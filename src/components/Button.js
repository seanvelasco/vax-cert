import styled from 'styled-components';

const Button = styled.button`
    font-family: Segoe UI Semibold;
    border-radius: 0.25em;
    padding: 1em 2em;
    margin: auto;
    min-width: 120px;
    background-color: ${props => props.transparent ? "transparent" : "#328dd2"};
    color: ${props => props.transparent ? "#328dd2" :  "inherit"};
    text-transform: uppercase;
    border: 3px solid #328dd2;
    border-radius: 0.5em;
    width: 100%;
    transition: 200ms;
    cursor:pointer;
    :hover {
        border-color: ${props => props.transparent ? "#328dd2" : "#2672ab"};
        background-color: ${props => props.transparent ? "#328dd2" : "#2672ab"};
        color: white;
    }
`;

export default Button;