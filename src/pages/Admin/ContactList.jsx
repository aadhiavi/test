import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { contactsListUrl, ContactsListUrlId } from '../../api';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(contactsListUrl);
                setContacts(response.data);
            } catch (error) {
                setError('Error fetching contacts');
            }
        };

        fetchContacts();
    }, []);

    const handleUpdate = async (id) => {
        const newName = prompt("Enter new name:");
        const newPhone = prompt("Enter new phone number:");
        const newEmail = prompt("Enter new email address:");
        const newMessage = prompt("Enter new message:");

        if (newName && newPhone) {
            try {
                const response = await axios.put(ContactsListUrlId(id), {  // Pass the `id` here
                    name: newName,
                    phone: newPhone,
                    email: newEmail,
                    message: newMessage,
                });
                alert(response.data.message);
                setContacts(contacts.map(contact =>
                    contact._id === id ? { ...contact, name: newName, phone: newPhone, email: newEmail, message: newMessage } : contact
                ));
            } catch (error) {
                alert("Error updating contact");
            }
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            try {
                const response = await axios.delete(ContactsListUrlId(id));  // Pass the `id` here
                alert(response.data.message);
                setContacts(contacts.filter(contact => contact._id !== id));
            } catch (error) {
                alert("Error deleting contact");
            }
        }
    };

    return (
        <div className="contact-list">
            <h2>Contacts</h2>
            {error && <p>{error}</p>}

            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Entry Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={contact._id}>
                            <td>{index + 1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td>{new Date(contact.createdAt).toLocaleString()}</td>
                            <td style={{ display: 'flex' }}>
                                <button onClick={() => handleUpdate(contact._id)}>Update</button>
                                <button onClick={() => handleDelete(contact._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;




