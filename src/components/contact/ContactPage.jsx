import React from 'react';
import debug from 'sabio-debug';

import ContactForm from './ContactForm';

const _logger = debug.extend('ContactForm');
false && _logger();

const ContactPage = () => {
    return (
        <div>
            <ContactForm />
        </div>
    );
};

export default ContactPage;
