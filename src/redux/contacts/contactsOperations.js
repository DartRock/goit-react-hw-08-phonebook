// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as api from '../../js/services/api';

// const API_ENDPOINT = 'contacts';

// const getContacts = createAsyncThunk('contacts/getContactsStatus', () =>
//   api.getData(API_ENDPOINT),
// );

// const addContact = createAsyncThunk('contacts/addContactStatus', newContact =>
//   api.saveItem(API_ENDPOINT, newContact),
// );

// const deleteContact = createAsyncThunk('contacts/deleteContactStatus', id =>
//   api.deleteItem(API_ENDPOINT, id),
// );

// export { getContacts, addContact, deleteContact };

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_KEY;
axios.defaults.baseURL = BASE_URL;

async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

async function fetchAddContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

async function fetchDeleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

const getContacts = createAsyncThunk('contacts/getContactsStatus', async () => {
  try {
    const contacts = await fetchContacts();
    return contacts;
  } catch (error) {
    console.log(error);
    // toast.error(`${'Something went wrong please try again'}`);
  }
});

const addContact = createAsyncThunk(
  'contacts/addContactStatus',
  async contact => {
    try {
      const contacts = await fetchAddContacts(contact);
      // toast.success(`You add new contact ${contact.name}`);
      return contacts;
    } catch (error) {
      console.log(error);
      // toast.error(`${'Something went wrong please try again'}`);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContactStatus',
  async id => {
    try {
      await fetchDeleteContact(id);
      const newContacts = await fetchContacts();
      // toast.success('You delete contact');
      return newContacts;
    } catch (error) {
      console.log(error);
      // toast.error(`${'Something went wrong please try again'}`);
    }
  },
);

export { getContacts, addContact, deleteContact };
