import React, { Component } from 'react';
const EnhancedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        
        clickHnadle = ()=>{
            console.log("called inside enhanced");
        }
        render() {
            return <>
            <p> A higher-order component is a function that takes in a component and returns a new component</p> 
            <p>parent ni method  child ne send kari simple props</p>  
            <p>parents ni method send kari ani andar na data update thai ne pachha send karva che parent ne ane called state liftying</p>
            <p>parent mathi data send karya child ne child ni method direct parent called karvani its means high order components</p> 
            <OriginalComponent clickHnadle={this.clickHnadle}/>
            </>
        }
    }
    return NewComponent;
}
export default EnhancedComponent;