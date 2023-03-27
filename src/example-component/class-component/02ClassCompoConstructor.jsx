import React, { Component } from 'react';

class ClassCompoConstructor extends Component {
    constructor(props) {
        super(props);
    }
    // constructor() {
    //     console.log("called con");
    // }
    
    render() {
        return (
            <>
                <div className="class-content mt-2 border-top">
                    <h5 className='text-dark border-bottom py-2 fw-bold'>Constructor:</h5>
                    <ul className='sub-content'>
                        <li>
                            <p>Constructor is a method which is invoked by default when components are called</p>
                        </li>
                        <li>
                            <p>Render is also calling by default but render used for give response to the compo</p>
                        </li>
                        <li>
                            <p>Constructor will use for initiate some value</p>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default ClassCompoConstructor;