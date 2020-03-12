import React from 'react';
import Contact from 'Contact';

class ContactList extends React.Component {
    render() {
        return (
            <div>
            <Contact name="Bruno" />
            <Contact name="Daniel" />
            <Contact name="Rafael" />
            <Contact name="Luis" />
            </div>
        )
    }
}

export default ContactList;