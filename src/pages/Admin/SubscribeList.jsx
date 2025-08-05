import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getSubscribes } from '../../api';

const SubscribeList = () => {
    const [emails, setEmails] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const response = await getSubscribes();
                setEmails(response.data);
            } catch (error) {
                setError('Error fetching emails');
            }
        };

        fetchEmails();
    }, []);

    return (
        <div>
            <h2>Subscribed Emails List</h2>
            {error && <p>{error}</p>}
            <table style={{width:"auto"}}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{email.email}</td>
                        </tr>
                    ))}

                    {emails.length === 0 && <tr><td colSpan="2">No emails found</td></tr>}
                </tbody>
            </table>

        </div>
    );
};

export default SubscribeList;
