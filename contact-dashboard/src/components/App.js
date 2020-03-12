import React from 'react';
import List from './List';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1> Contacts Dashboard </h1>
                <div><List></List></div>
            </div>
        )
    }
}

export default App;