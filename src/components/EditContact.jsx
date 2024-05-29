
import React, { useState, useEffect } from 'react';
import { updateContact } from '../services/ContactService';
import ContactForm from './ContactForm';

const EditContact = ({ contact, onUpdate }) => {
    const [updatedContact, setUpdatedContact] = useState(contact);

    useEffect(() => {
        setUpdatedContact(contact);
    }, [contact]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateContact(updatedContact.id, updatedContact);
        onUpdate(); // Refresh the contact list
    };

    return (
        <div>
            <h2>Edit Contact</h2>
            <ContactForm contact={updatedContact} setContact={setUpdatedContact} handleSubmit={handleSubmit} />
        </div>
    );
};

export default EditContact;
