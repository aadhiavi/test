import React from 'react'
import ContactList from './ContactList'
import SubscribeList from './SubscribeList'

const Admin = () => {
  return (
    <div style={{
        height:'100vh',
        paddingTop:'70px',
    }}>
        <h1>Admin Page</h1>
        <p>Welcome to the admin page. Here you can manage your contacts</p>
        <ContactList/>
        <SubscribeList/>
    </div>
  )
}

export default Admin