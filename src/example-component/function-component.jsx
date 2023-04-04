import React, { Component } from 'react';


class FunctionComponent extends Component {
    render() {
        return (
            <>
            <div className="col-md-6 col-12 border border-bottom-0 border-top-0 border-start-0 border-warning pb-3"></div>
            <div className="col-md-6 col-12 border border-bottom-0 border-end-0 border-top-0 border-warning pb-3">
            <div className="class-content mt-4">
                        <ul>
                            
                            <li>
                                <p> <strong>Syntax:</strong></p>
                                <p className="bg-info bg-opacity-10 py-3 px-4 border border-info">
                                    <span className="text-primary">const</span> <span className="text-success">FunctionComponent</span> <span className="text-primary">=</span> <span className="text-warning">&#40;&#41;</span> <span className="text-info">=&#62;</span> 	<span className="text-warning">&#123;</span> <br />
                                    <span className="text-danger ms-4">return</span> <span className="text-info">&#40;</span> <br />
                                    <span className="text-info ms-5">&#60;&#62;</span><br /><span className="text-secondary ms-5 ps-4">Code here...</span> <br /><span className="text-info ms-5">&#60;/&#62;</span>    <br/>       
                                    <span className="text-info ms-4">&#41;</span>; <br />
                                    <span className="text-warning">&#125;</span>;
                                </p>
                            </li>
                        </ul>
                    </div>
            </div>
            </>
        );
    }
}

export default FunctionComponent;