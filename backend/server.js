// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let contacts = [
  { id: 1, name: 'John Doe', email: 'john@example.com',number: '7874339974' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com',number: '7048846762' },
];

// Get all contacts
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// Get a contact by ID
app.get('/contacts/:id', (req, res) => {
  const contact = contacts.find(c => c.id === parseInt(req.params.id));
  if (!contact) return res.status(404).send('Contact not found');
  res.json(contact);
});

// Create a new contact
app.post('/contacts', (req, res) => {
  const newContact = {
    id: contacts.length ? contacts[contacts.length - 1].id + 1 : 1,
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  };
  contacts.push(newContact);
  res.json(newContact);
});

// Update a contact
app.put('/contacts/:id', (req, res) => {
  const contact = contacts.find(c => c.id === parseInt(req.params.id));
  if (!contact) return res.status(404).send('Contact not found');

  contact.name = req.body.name;
  contact.email = req.body.email;
  contact.number = req.body.number;
  
  res.json(contact);
});

// Delete a contact
app.delete('/contacts/:id', (req, res) => {
  contacts = contacts.filter(c => c.id !== parseInt(req.params.id));
  res.json({ message: 'Contact deleted' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
