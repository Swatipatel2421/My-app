import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ConditionalRendering extends Component {
    render() {
        return (
            <>
                <div className="class-content mt-2 border-top">
                    <ul className='sub-content'>
                <li>Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false</li>
                <li>Rendering external data from an API.</li>
                <li>Showing or hiding elements.</li>
                <li>Toggling application functionality.</li>
                <li>
                     <p>For Example click here...</p>
                            <Link to="../RenderingExample" className='btn btn-primary'>Demo Link</Link>
                            </li>
                </ul> 
                </div>
            </>
        );
    }
}
export default ConditionalRendering;