import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateContact } from '../services/ContactService';

const EditContactModal = ({ show, handleClose, contactToEdit, onUpdate }) => {
  const [contact, setContact] = useState(contactToEdit);

  useEffect(() => {
    setContact(contactToEdit);
  }, [contactToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateContact(contact.id, contact);
    onUpdate();
    handleClose();
  };

  // Add a null check for the contact object
  if (!contact) {
    return null; // Return null if contact is null
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formNumber" className="mb-3">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="number"
              name="number"
              value={contact.number}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Contact
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditContactModal;
