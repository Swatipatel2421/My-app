import React, { Component } from 'react';
<>
<div>
    <p>Conditional Rendering return something on condition. </p>
</div>
</>
class ConditionalRender extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:1,
            status:true
        }
    }
    
    render() {
        let HTMLData = ""
        // if (this.state.status) {
        //     return (
        //         <>
        //         { JSON.stringify(this.state.status)}
        //             <button onClick={()=>{
        //                 this.setState({ status:!this.state.status })
        //             }}>Click</button>
        //         <ul>
        //             <li>list1</li>
        //             <li>list2</li>
        //             <li>list3</li>
        //         </ul>
        //         </>
        //     );  
        // } else {
        //     return (
        //         <>
        //             <button onClick={()=>{
        //                 this.setState({ status:!this.state.status })
        //             }}>Click</button>
        //         <h2>No Record Found</h2>
        //         </>
        //     );
        // } 
        if (this.state.status) {
            HTMLData = <h2>Hi Swati</h2>
        } else {
            HTMLData = <h2>No record</h2>
        } 
        return (
            <>
            { JSON.stringify(this.state.status)}
                <button onClick={()=>{
                    this.setState({ status:!this.state.status })
                }}>Click</button>
            {HTMLData}

            {(this.state.status) ? <h2>Welcome to Conditional Rendering</h2>:<h2>no data</h2>} {/*We are saying if loading is true then show <Welcome to Conditional Rendering />, else show <no data /> */}
            </>
        );
    }
}

export default ConditionalRender;