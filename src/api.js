import axios from 'axios';

const API_URL = 'https://one28back-1.onrender.com/api/auth/';
export const subscribe = (email) => axios.post(`${API_URL}subscribe`, { email });
export const getSubscribes = () => axios.get(`${API_URL}subscribe`);
export const contact = (contact) => axios.post(`${API_URL}contact`, contact);
export const contactUrl = `${API_URL}contact`;
export const contactsListUrl = `${API_URL}contacts`;
export const ContactsListUrlId = (id) => `${API_URL}contact/${id}`;
export const contacts = (contacts) => axios.get(`${API_URL}contacts/${id}`, contacts);