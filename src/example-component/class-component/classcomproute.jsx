import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu';
import WelcomeToClassCompo from './01WelcomeToClassCompo';
import ClassCompoConstructor from './02ClassCompoConstructor';
import ClassCompoState from './03ClassCompoState';
import ClassCompojsx from './04ClassCompojsx';
import PropsCompo from './05PropsCompo';
import LifeCycleCompo from './06StateLifeCycle';
import PropsExampleComp from './props-example/props-example';
import ExampleLifeCycle from './Lifecycle-Example/ExampleLifeCycle';
import ConditionalRender from './07.conditionalrender';
import RenderingExample from './ConditionalRendering-Example/RenderingExample';
import ListKeysArraymap from './09.keyandlist';
import KeyListMapExample from './KeyMap-example/KeyListMapExample';
import ClassCompoSpreadRest from './10.ClassCompoSpreadRest';
import DynamicSubMenu from './11.dynamicmenu';
import ClassCompoControlledCompo from './12.ClassCompoControlledCompo';
import UnClassCompoControlledCompo from './13.UncantrolledCompo';
import CompositionVsInheritance from './14.CompositionVsInheritance';
import Stoppropagation from './Stoppropagation';
import APIExample from './17.APIExaple';
import ClassCompoHOC from './19HOC_in_classCompo/mainCompo';


class ClassCompRoute extends Component {
    render() {
        return (
            <>
               <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompointro" element={<WelcomeToClassCompo />} />
                        <Route path="classcompoconstructor" element={<ClassCompoConstructor />} />
                        <Route path="classcompostate" element={<ClassCompoState />} />
                        <Route path="classcompojsx" element={<ClassCompojsx />} />
                        <Route path="props" element={<PropsCompo />} />
                        <Route path="lifecycle" element={<LifeCycleCompo />} />
                        <Route path="props-example" element={<PropsExampleComp />} />
                        <Route path="exampleLifeCycle" element={<ExampleLifeCycle/>}/>
                        <Route path="conditionalrender" element={<ConditionalRender/>}/>
                        <Route path="renderingexample" element={<RenderingExample/>}/>
                        <Route path="listKeysArraymap" element={<ListKeysArraymap/>}/>
                        <Route path="keylistmapexample" element={<KeyListMapExample/>}/>
                        <Route path="classcompospreadrest" element={<ClassCompoSpreadRest/>}/>
                        <Route path="dynamicsubmenu" element={<DynamicSubMenu/>}/>
                        <Route path="classcontrolledcompo" element={<ClassCompoControlledCompo/>}/>
                        <Route path="unclasscontrolledcompo" element={<UnClassCompoControlledCompo/>}/>
                        <Route path="compositionvsinheritance" element={<CompositionVsInheritance/>}/>
                        <Route path="stoppropagation" element={<Stoppropagation/>}/>
                        <Route path="apiexample" element={<APIExample/>}/>
                        <Route path="classcompohoc" element={<ClassCompoHOC />} />

                    </Route>
                </Routes> 
            </>
        );
    }
}

export default ClassCompRoute;