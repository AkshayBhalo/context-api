
import React from 'react';

const ContactForm = ({ contact, setContact, handleSubmit }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({ ...prevContact, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={contact.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={contact.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Mobile No:</label>
                <input type="number" name="number" value={contact.number} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
