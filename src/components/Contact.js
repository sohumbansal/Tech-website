import React from 'react';
import './styles/Contact.css';
import CustomerForm from './CustomerForm';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form>
              <CustomerForm />
            </form>
        </div>
    );
};

export default Contact;
