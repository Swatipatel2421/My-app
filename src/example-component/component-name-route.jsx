import React, { Component,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import CompoNameMenu from './component-name';
import FunctionComponent from './function-component';

const ClassCompoRoute = React.lazy(()=>{ return import('./class-component/classcomproute.jsx') });

class ComponentNameRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<CompoNameMenu />} >
                        <Route path="classcomponent/*" element={<Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>}></Route>
                        <Route path="functioncomponent" element={<FunctionComponent />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ComponentNameRoute;