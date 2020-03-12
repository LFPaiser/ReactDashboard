import React from 'react';
import ContactList from './ContactList';


class App extends React.Component {
    render() {
        return (
            <div>
                <h1> Contacts Dashboard </h1>
                <div><ContactList /></div>
            </div>
        )
    }
}

export default App;