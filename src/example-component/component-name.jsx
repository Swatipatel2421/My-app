import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

class ComponentName extends Component {
    render() {
        return (
            <>
                {/* <div className="container">
                    <div className="row"> */}
                        <div className="col-md-6 col-12 border border-bottom-0 border-start-0 border-warning pt-3">
                            <Link to="classcomponent" className="text-center fs-5 fw-bold text-dark text-opacity-75">Class Component</Link>
                        </div>
                        <div className="col-md-6 col-12 border border-bottom-0 border-end-0 border-warning pt-3">
                            <Link to="functionComponent" className="text-center fs-5 fw-bold text-dark text-opacity-75">Functional Component</Link>
                        </div>
                        <Outlet />
                    {/* </div>
                    
                </div> */}
            </>
        );
    }
}

export default ComponentName;