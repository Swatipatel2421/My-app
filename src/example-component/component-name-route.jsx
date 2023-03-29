import React, { Component,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import CompoNameMenu from './component-name';
import FunctionComponent from './function-component';

const ClassCompoRoute = React.lazy(()=>{ return import('./class-component/classcomproute.jsx') });// lazy loading  allows you to load parts of your application on-demand to reduce the initial load time

class ComponentNameRoute extends Component {
    render() {
        return (
            <>
                <Routes>//It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
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
