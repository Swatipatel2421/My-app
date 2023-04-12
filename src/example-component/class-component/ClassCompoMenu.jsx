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
                      <li><Link to="props">05. Props</Link></li>
                      <li><Link to="lifecycle">06. State LifeCycle</Link></li>
                      <li><Link to="conditionalrender">07.ConditionalRendering</Link></li>
                      <li><Link to="listKeysArraymap">09.Keys List Array And Map</Link></li>
                      <li><Link to="classcompospreadrest">13.class compo spread and rest</Link></li>
                      <li><Link to="dynamicsubmenu">13.Dynamic Sub Menu</Link></li>
                      <li><Link to="classcontrolledcompo">14.class controlled compo</Link></li>
                      <li><Link to="unclasscontrolledcompo">14.UnControlled Compo</Link></li>
                      <li><Link to="compositionvsinheritance">15.CompositionVsInheritance</Link></li>
                      <li><Link to="stoppropagation">Stop Propagation</Link></li>
                      <li><Link to="apiexample">APIExample</Link></li>
                      <li><Link to="classcompohoc">Class Compo High Order Compo</Link></li>


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