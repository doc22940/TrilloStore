import React, { useState } from 'react';
import './contact.style.scss'
import { connect } from 'react-redux'
import { contactStart } from '../../redux/contact/contact.actions'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

const Contact = ({ contactStart }) => {
    const [userCredentials, setCredentials] = useState({})
    const { email, message, name } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        contactStart(email, message, name)


    }
    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="contact-page">
            <h2>Get in touch with us !</h2>
            <form method="post" action="https://formspree.io/xyyerjyb" onSubmit={handleSubmit}>


                <FormInput
                    name="name"
                    type='name'
                    value={name}
                    handleChange={handleChange}
                    label='name'
                    required


                />
                <FormInput
                    name="email"
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required

                />

                <textarea
                    name="message"
                    type='message'
                    value={message}
                    onChange={handleChange}
                    placeholder='message'
                    required
                />


                <div>
                    <CustomButton type='submit' > Send </CustomButton>
                </div>


            </form>

        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    contactStart: (email, message, name) => dispatch(contactStart({ email, message, name }))
})
export default connect(null, mapDispatchToProps)(Contact);
