import React, { Component } from 'react';

class PropsCompo extends Component {
    render() {
        return (
            <>
                <div className="class-content mt-2 border-top">
                    <h5 className='text-dark border-bottom py-2 fw-bold'>Props:</h5>
                    <ul className='sub-content'>
                        <li>
                            <p>props in React to <strong className='text-primary'> pass data from one component to another (from a parent component to a child component(s))</strong>.</p>
                        </li>
                        <li>
                            <p>Props is just a shorter way of saying properties.</p>
                        </li>
                        <li>
                            <p>They are useful when you want the flow of data in your app to be dynamic.</p>
                        </li>
                        
                    </ul>
                </div>
            </>
        );
    }
}

export default PropsCompo;