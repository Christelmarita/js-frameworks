import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 110%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: #202828;
    flex-direction: column;
    @media screen and (max-width: 497px){
        padding: 0 20px;

        h2{
            text-align: center;
        }
        
    }
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 400px;
    margin-top: 20px;
    background-color: #fff;
    padding: 0 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    input{
        border: none;
        background-color: transparent;
        outline: none;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 40px;
        padding: 0 10px;
    }
    

@media screen and (max-width: 497px){
    width: 100%;
}`;

export const Suggested = styled.div`
    width: 450px;
    margin: 10px 20px;
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    display: flex;
    }
`;



export const Results = styled.p`
        margin: 0;
        color: #fff2e7;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0.2, 0.2);
        padding: 10px;
        cursor: pointer;

        &:hover{
            background-color: #6D8CD9;
            box-shadow: none;
            color: #fff;
        }
`;