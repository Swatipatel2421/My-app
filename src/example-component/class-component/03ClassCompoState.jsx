import React, { Component } from 'react';

class ClassCompoState extends Component {
    constructor(props) {
        super(props);
        this.state = {data:"Something"}
        // this.changeData = this.changeData.bind(this)
    }
    // changeData =()=>{
    //     console.log("called");
    // }
    // changeData(){
    //     console.log("called");
    //     // Something = "Change"
    //     this.setState({data:"Testing"})
    // }
    changeData=()=>{
        console.log("called");
        // Something = "Change"
        this.setState({data:"Testing"})
    }
    
    render() {
        let Something = "Data"
        // const changeDataFunc=()=>{
        //     console.log("called");
        //     Something = "Change"
        // }
        return (
            <>
                <div className="class-content mt-2 border-top">
                    <h5 className='text-dark border-bottom py-2 fw-bold'>State:</h5>
                    <ul className='sub-content'>
                        <li>
                            <p>Change Data</p>
                        </li>
                        <li>
                            <p className='d-flex  align-items-center'>
                                {/* <button onClick={changeDataFunc}>Click</button> */}
                                <button onClick={this.changeData} className="btn btn-secondary fw-bold">Click</button>
                                <p className='ms-3'>{Something}</p>
                            </p>
                            
                        </li>
                        <li>
                            <p><strong>State</strong>&nbsp; {this.state.data}</p>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default ClassCompoState;