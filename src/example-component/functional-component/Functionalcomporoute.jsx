import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Functionalcompomenu from './Functionalcompomenu.jsx';
import WelcomeToFunctionCompo from './functioncompointro.jsx';
import FunctionalCompoState from "./FunctionCompoState.jsx";
import FunctionalCompoLifeCycle from "./useeffactlifecycle.jsx";

    

const Functionalcomporoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Functionalcompomenu />} >
                    <Route path="welcometofunctioncompo" element={<WelcomeToFunctionCompo />} />
                    <Route path="functionalcompostate" element={<FunctionalCompoState />} />
                    <Route path="functionalcompolifecycle" element={<FunctionalCompoLifeCycle />} />
                    

                </Route>
            </Routes>
        </>
    );
};

export default Functionalcomporoute;