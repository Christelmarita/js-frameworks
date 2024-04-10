import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 5px 10px;
    border-radius: 3px;
    width: 100%;
    max-width: 350px;
    justify-content: center;
    height: 60px;
    margin: 10px 5px;
    font-size: 1.3rem;
    font-family: 'Staatliches', sans-serif;
`;

export const PrimaryBtn = styled(Button)`
    background-color: #202828;
    color: #fff;
`;

export const SecondaryBtn = styled(Button)`
    background-color: #6D8CD9;
`;

export default Button;
