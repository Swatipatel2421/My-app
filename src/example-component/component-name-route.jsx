import React, { Component,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import CompoNameMenu from './component-name';

const ClassCompoRoute = React.lazy(()=>{ return import('./class-component/classcomproute.jsx') });
const FunctionalCompoRoute = React.lazy(()=>{ return import('./functional-component/Functionalcomporoute')});

class ComponentNameRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<CompoNameMenu />} >
                        <Route path="classcomponent/*" element={<Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>}></Route>
                        <Route path="functionalcomponent/*" element={<FunctionalCompoRoute/>}></Route>
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ComponentNameRoute;