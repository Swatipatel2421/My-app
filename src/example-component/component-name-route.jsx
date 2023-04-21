import React, { Component,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import CompoNameMenu from './component-name';


const ClassCompoRoute = React.lazy(()=>{ return import('./class-component/classcomproute.jsx') });
const FunctioalCompoRoute = React.lazy(()=>{ return import('./functional-component/Functionalcomporoute.jsx') });

class ComponentNameRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<CompoNameMenu />} >
                        <Route path="classcomponent/*" element={<Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>}></Route>
                        <Route path="functioncomponent/*" element={<Suspense fallback={<h2>Loading...</h2>}><FunctioalCompoRoute/></Suspense>}></Route>
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ComponentNameRoute;