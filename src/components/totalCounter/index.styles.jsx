import styled from "styled-components";

export const TotalCounterContainer = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;

`;

export const TotalItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
max-width: 300px;
width: 100%;
border-bottom: 1px solid #000;
padding: 10px 0;

p{
    margin: 0;
}
`;

export const TotalPrice = styled(TotalItem)`
font-size: 1.3rem;
font-weight: 700;
margin-top: 20px;
`;

export const TotalBtnContainer = styled.div`
a{
display: flex;
align-items: center;
margin-top: 40px;
}

`;