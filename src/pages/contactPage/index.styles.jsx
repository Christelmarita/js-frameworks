import styled from "styled-components";

export const ContactPageContainer = styled.div`
    width: 100%;
    max-width: 700px;
    padding: 20px;
    @media screen and (max-width: 425px) {
        padding: 10px;
    }
`;

export const ContactForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input, textarea {
        width: 100%;
        max-width: 400px;
        padding: 12px;
        border: 2px solid #6D8CD9;
        border-radius: 6px;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        transition: border-color 0.3s ease;
        &:focus {
            outline: none;
            border-color: #007bff;
        }
    }

    label {
        margin-bottom: 8px;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }

    textarea {
        min-height: 150px;
    }

    button[type="submit"] {
        padding: 0px 30px;
    }
`;

export const ContactFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`;

export const ContactFormInput = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
`;
