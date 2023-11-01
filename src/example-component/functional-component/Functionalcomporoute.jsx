import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Functionalcompomenu from './Functionalcompomenu.jsx';
import WelcomeToFunctionCompo from './01functioncompointro.jsx';
import FunctionalCompoState from "./02FunctionCompoState.jsx";
import FunctionalCompoUseeffact from "./03Useeffactlifecycle.jsx";
import FunctionalCompoUseCallback from "./04FunctionalCompoUseCallback.jsx";
import FunctionalCompoUseMemo from "./05FunctionalCompoUseMemo.jsx";
import FunctionalCompoStyleCompo from "./06StyledComponentExample.jsx";
import FunctionalCompoUseMemoExample from "./07FunctionalCompoUseMemoFactorialExample.jsx";
import FunctionalCompoContect from "./08FunctionalCompoUseContext.jsx";
import FunctionalCompoUseReducer from './reducer.jsx'; 
import DatatSearch from   './DataTable.jsx';

const Functionalcomporoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Functionalcompomenu />} >
                    <Route path="welcometofunctioncompo" element={<WelcomeToFunctionCompo />} />
                    <Route path="functionalcompostate" element={<FunctionalCompoState />} />
                    <Route path="functionalcompouseeffact" element={<FunctionalCompoUseeffact />} />
                    <Route path="functionalcompousecallback" element={<FunctionalCompoUseCallback />} />
                    <Route path="functionalcompoUsememo" element={<FunctionalCompoUseMemo />} />
                    <Route path="functionalcompostylecompo" element={<FunctionalCompoStyleCompo />} />
                    <Route path="functionalcompoUSememofactorialExample" element={<FunctionalCompoUseMemoExample />} />
                    <Route path="functionalcompocontext" element={<FunctionalCompoContect />} />
                    <Route path="functionalreducer" element={<FunctionalCompoUseReducer />} />
                    <Route path="datasearch" element={<DatatSearch />} />

                </Route>
            </Routes>
        </>
    );
};

export default Functionalcomporoute;