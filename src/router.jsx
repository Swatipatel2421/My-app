import React,{ Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";
import ContactPage from "./contact";
import HeaderComp from "./Main-Component/Header";
import ExampleComponent from "./example-component";
import PropsComponent from "./props";
import Statelifecycle from "./statelifecycle";

const ExampleCompoRoute = React.lazy(()=>{ return import('./example-component/component-name-route') })
const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HeaderComp />
        <HomePage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <HeaderComp />
        <AboutPage></AboutPage>
      </>
    ),
  },
  {
    path: "/lifecycle",
    element: (
      <>
        <Statelifecycle/>
        <HomePage />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <HeaderComp />
        <ContactPage />
      </>
    ),
  },
  {
    path: "/props",
    element: (
      <>
        <HeaderComp />
        <PropsComponent/>
      </>
    ),
  },
  {
    path: "/component",
    element: (
      <>
        <HeaderComp />
        <ExampleComponent />
      </>
    ),
    children: [
      {
        path: "componentname/*",
              element: <Suspense fallback={<h2>Loading...</h2>}><ExampleCompoRoute/></Suspense>,
      },
    ],
  },
]);

export default MainRouter;
