import React, { useState } from 'react';
import { createContact } from '../services/ContactService';
import ContactForm from './ContactForm';

const AddContact = ({ onAdd }) => {
    const [contact, setContact] = useState({ name: '', email: '',number: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createContact(contact);
        onAdd(); // Refresh the contact list
        setContact({ name: '', email: '',number: '' });
    };

    return (
        <div>
            <h2>Add Contact</h2>
            <ContactForm contact={contact} setContact={setContact} handleSubmit={handleSubmit} />
        </div>
    );
};

export default AddContact;
