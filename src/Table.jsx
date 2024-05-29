import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import ContactList from './components/ContactList';
import AddContactModal from './components/AddContactModal';
import EditContactModal from './components/EditContactModal';
import { getContacts } from './services/ContactService';

const Table = () => {
  const [contacts, setContacts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const response = await getContacts();
    setContacts(response.data);
    console.log('setContacts', response.data)
  };

  const handleAddOrUpdate = () => {
    loadContacts(); // Refresh the contact list
  };

  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = (contact) => {
    setContactToEdit(contact);
    setShowEditModal(true);
  };

  return (
    <Container>
      <h1 className="mb-3 text-center mt-3">Contact CRUD App</h1>



    <div className='row mb-3'>
      <div className='col-lg'>
      <h2>Contact List</h2>
      </div>
      <div className='col-lg-auto'>
      <Button variant="primary" onClick={handleShowAddModal}>
        Add Contact
      </Button>
    </div>
    </div>
 
      <AddContactModal show={showAddModal} handleClose={handleCloseAddModal} onAdd={handleAddOrUpdate} />
      <EditContactModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        contactToEdit={contactToEdit}
        onUpdate={handleAddOrUpdate}
      />
      <ContactList contacts={contacts} onEdit={handleShowEditModal} onDelete={handleAddOrUpdate} />
    </Container>
  );
};

export default Table;
