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
                        <li>
                            <p>jyare program ma koi compulsory values by-default joiti hoy te values constructor by default compile kare chhe.</p>
                        </li>
                        <li>
                                <p> <strong>Syntax:</strong></p>
                                <p className="bg-info bg-opacity-10 py-3 px-4 border border-info">
                                <span className="text-primary">class</span><span className="text-success">ClassConstructor</span> <span className="text-primary">extends</span> <span className="text-success">Component</span> 	<span className="text-warning">&#123;</span> <br />
                                <span className="text-warning ms-3">constructor</span><span className="text-danger">&#40;props&#41; &#123;</span> <br />
                                <span className="text-danger ms-4">super</span> <span className="text-info">&#40;props&#41;</span>; <br />
                                <span className="text-danger ms-3">&#125;</span> <br />
                                <span className="text-warning">&#125;</span>;
                                </p>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default ClassCompoConstructor;