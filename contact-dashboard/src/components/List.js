import React from 'react';
import Contact from './components/Contact';

class List extends React.Component{
    render() {
        return(
            <div>
                <h1>List</h1>
                <Contact name="Bruno" />
                <Contact name="Carol" />
            </div>
        )
    }
}

export default List;