import React, { Component } from 'react';


class Statelifecycle extends Component {
    constructor(props) {
        super(props);
        
    }
       
    // componentWillMount() {
    //     console.log("componentWillMount");        
    // }    
    componentDidMount() {
        console.log("componentDidMount");
    }
    // componentWillReceiveProps(nextProps) {        
    //     console.log("componentWillReceiveProps");
    // }    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // return false
        return true
    }
    // componentWillUpdate(nextProps, nextState) {        
    //     console.log("componentWillUpdate");
    // }    
    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
      }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        console.log("render");
        return (
            <div>
                <p>Change Data</p>
                {/* <button onClick={changeDataFunc}>Click</button> */}
                <button onClick={()=>this.setState({data:"chnge color"})}>Click</button>
                <p><strong>welcome home</strong>{this.state.data}</p>
            </div>
        );
    }
}

export default Statelifecycle;
