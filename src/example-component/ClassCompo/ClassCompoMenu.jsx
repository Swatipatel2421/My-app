import React, { Component } from 'react';
import { Link,Outlet } from 'react-router-dom';
import "../component.css";

class ClassCompoIntro extends Component {
  render() {
    return (
      <>
      <div className="col-md-6 col-12 border border-bottom-0 border-start-0 border-top-0 border-warning pb-3">
          <div className="class-content mt-2">
                    <ul>
                      <li><Link to="classcompointro">01. Class Compo Intro</Link></li>
                      <li><Link to="classcompoconstructor">02. Constuctor</Link></li>
                      <li><Link to="classcompostate">03. State In Class Compo</Link></li>
                      <li><Link to="classcompojsx">04. JSX In Class Compo</Link></li>
                    </ul>
                    <Outlet></Outlet>
          </div>
      </div>
      <div className="col-md-6 col-12 border border-bottom-0 border-end-0 border-top-0 border-warning pb-3"></div>
        
        
      </>
    );
  }
}

export default ClassCompoIntro;