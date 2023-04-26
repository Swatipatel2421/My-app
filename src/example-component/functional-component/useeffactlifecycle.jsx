import React, { useEffect, useLayoutEffect, useState, } from 'react';

const FunctionalCompoUseEffect = () => {
    const [stateNameAnything,aajebiju] = useState(true)
    const [SecondState,SetSecondState] = useState(0)
    const [data, setData] = useState([])  
    // useEffect(()=>{
    //     console.log("called");
    // })
    // useEffect(()=>{
    //     console.log("useEffect");
    // },[])

    useEffect(() => {
      fetchData().then(myData => setData(myData))
    }); 


    useEffect(()=>{
        console.log("useEffect");
    },[stateNameAnything])
    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
        return () => {
            console.log("called return");
        };
      
    },[])
    const BtnClicked = ()=> {
        console.log("BtnClicked");
        aajebiju(!stateNameAnything)
    }
    const BtnClickedOther = ()=> {
        console.log("BtnClicked for SecondState");
        SetSecondState(SecondState+1)
    }
    return (
        <>
          <p>UseEffect Hook</p>  
          {JSON.stringify(stateNameAnything)}
          <button onClick={BtnClicked}>Click</button>
          <button onClick={BtnClickedOther}>Click {SecondState} </button>
          <br /><br/>
        </>
    );
};

export default FunctionalCompoUseEffect;