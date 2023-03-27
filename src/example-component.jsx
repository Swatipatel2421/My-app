import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

class ExampleComponent extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-5 border border-warning mb-3">
                        <div className="col-12 text-center py-2">
                            <Link to="componentname" className="text-center fs-3 fw-bold text-primary">Example Component</Link>
                        </div>
                        <Outlet />
                    </div>
                    
                </div>
                
            </>
        );
    }
}

export default ExampleComponent;