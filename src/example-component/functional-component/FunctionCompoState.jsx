import React,{useState}from 'react';

const FunctionCompoState = () => {
    const [stateNameAnything,setStateData] = useState(true)
    let data = "Test"
    const BtnClicked = ()=> {
        console.log("btn clicked");
        data = "Update"
        // setStateData("data")
        // setStateData(stateNameAnything+1)
        setStateData(!stateNameAnything)
        console.log(!stateNameAnything);
    }
    return (
        <>
            {data}
            <p>State Data : { JSON.stringify(stateNameAnything) }</p>
            <div>{ stateNameAnything ? <img src="/light.jpg" alt="" srcset="" width="55px" /> : <img src="/bulb.jpg" alt="" srcset="" width="43x" /> }</div>
            <p>Welcome to functional Component in reactjs</p>
            <button onClick={BtnClicked}>Click</button>
        </>
    );
};


export default FunctionCompoState;