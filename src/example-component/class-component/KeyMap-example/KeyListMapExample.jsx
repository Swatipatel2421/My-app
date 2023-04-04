import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class KeyListMapExample extends Component {
    render() {
       
        let MenuData = { "/": "Home", "/about": "About", "/examples": "Examples", "classcompo": "Class Compo" }

        let MenuItem = Object.entries(MenuData).map(([key, data], index) => {
            return <li key={index}> <Link to={key}>{data}</Link> </li>
        })
        return (
            <div className='container border-top mt-2 ' >
               <h4 className='border-bottom fw-bold'>Keys List Map Array Eaxmple:</h4>

                {MenuItem}
            </div>
        );
    }
}

export default KeyListMapExample;