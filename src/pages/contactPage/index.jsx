import React, { useState } from "react";
import { PrimaryBtn } from "../../components/buttons/index.styles";
import { ContactForm, ContactFormContainer, ContactFormInput, ContactPageContainer } from "./index.styles";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value});
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (formData.name.length < 3) {
            formIsValid = false;
            errors["name"] = "Full name must be at least 3 characters long";
        }

        if (formData.subject.length < 3) {
            formIsValid = false;
            errors["subject"] = "Subject must be at least 3 characters long";
        }

        if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            formIsValid = false;
            errors["email"] = "Please enter a valid email address";
        }

        if (formData.message.length < 3) {
            formIsValid = false;
            errors["message"] = "Message must be at least 3 characters long";
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form data:", formData);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        }
    };

    return (
        <div className="contact-page-container">
            <ContactPageContainer>
                <ContactForm onSubmit={handleSubmit}>
                    <h1>Contact us</h1>
                    <ContactFormContainer>
                        <ContactFormInput>
                            <label htmlFor="name">Full name</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                            <span className="error">{errors.name}</span>
                        </ContactFormInput>
                        <ContactFormInput>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                            <span className="error">{errors.email}</span>
                        </ContactFormInput>
                        <ContactFormInput>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" value={formData.subject} onChange={handleChange} required />
                            <span className="error">{errors.subject}</span>
                        </ContactFormInput>
                        <ContactFormInput>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                            <span className="error">{errors.message}</span>
                        </ContactFormInput>
                    </ContactFormContainer>
                    <div>
                        <PrimaryBtn type="submit"><p>Send</p></PrimaryBtn>
                    </div>
                </ContactForm>
            </ContactPageContainer>
        </div>
    );
}

export default ContactPage;