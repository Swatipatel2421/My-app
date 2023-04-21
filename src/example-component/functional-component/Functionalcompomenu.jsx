import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const Functionalcompomenu = () => {
    return (
        <>
         <div className="col-md-6 col-12 border border-bottom-0 border-top-0 border-start-0 border-warning pb-3"></div>
                <div className="col-md-6 col-12 border border-bottom-0 border-end-0 border-top-0 border-warning pb-3">
                <div className="class-content mt-4">
                  <ol>
                    <li><Link to="welcometofunctioncompo"> functional Compo Intro</Link></li>
                    <li><Link to="functionalcompostate"> functional Compo State</Link></li>
                  
                  </ol>
                  <Outlet></Outlet>
        </div>
    </div>
    <div className="col-md-6 col-12 border border-bottom-0 border-end-0 border-top-0 border-warning pb-3"></div>
      
      
    </>
    );
};

export default Functionalcompomenu;