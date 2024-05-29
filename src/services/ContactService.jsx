
import axios from 'axios';

const API_URL = 'http://localhost:3001/contacts';

const getContacts = () => {
    return axios.get(API_URL);
};

const createContact = (contact) => {
    return axios.post(API_URL, contact);
};

const updateContact = (id, contact) => {
    return axios.put(`${API_URL}/${id}`, contact);
};

const deleteContact = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export { getContacts, createContact, updateContact, deleteContact };
