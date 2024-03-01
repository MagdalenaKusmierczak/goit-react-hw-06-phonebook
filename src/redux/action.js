import { createAction } from '@reduxjs/toolkit';


export const addTContact = createAction('contacts/AddContact');
export const deleteContact = createAction('contacts/DeleteContact');
export const filterContacts = createAction("contacts/FilterContacts");