
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { deleteContact } from '../services/ContactService';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  const handleDelete = async (id) => {
    await deleteContact(id);
    onDelete(); // Refresh the contact list
  };

  return (
    <div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.number}</td>
              <td>
                <Button variant="secondary" onClick={() => onEdit(contact)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(contact.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactList;
