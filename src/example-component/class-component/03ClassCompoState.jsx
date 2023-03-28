import React, { Component } from 'react';

class ClassCompoState extends Component {
    constructor(props) {
        super(props);
        this.state = {data:"Something"}
        // this.changeData = this.changeData.bind(this)
    }
    render() {
        return (
            <>
                <div className="class-content mt-2 border-top">
                    <h5 className='text-dark border-bottom py-2 fw-bold'>State:</h5>
                    <ul className='sub-content'>
                        <li>
                            <p>React components has a built-in state object.</p>
                        </li>
                        <li>
                            <p>The state object is where you store property values that belongs to the component.</p>
                        <li>
                            <p>When the state object changes, the component re-renders.</p>
                        </li>
                        <li>
                            <p>jyare program ma koi compulsory values by-default joiti hoy te values constructor by default compile kare chhe.</p>
                        </li>
                        </li>
                        <li>
                            <p>Define data ne web page refresh karya vagar click event par data change karva mate state no use thay chhe. </p>
                        </li>
                        <li>
                                <p> <strong>Syntax:</strong></p>
                                <p className="bg-info bg-opacity-10 py-3 px-4 border border-info">
                                <span className="text-primary">class</span><span className="text-success">ClassConstructor</span> <span className="text-primary">extends</span> <span className="text-success">Component</span><span className="text-warning">&#123;</span> <br />
                                <span className="text-warning ms-3">constructor</span><span className="text-danger">&#40;props&#41; &#123;</span> <br />
                                <span className="text-danger ms-4">super</span> <span className="text-info">&#40;props&#41;</span>; <br />
                                <span className="text-danger ms-3">&#125;</span> <br />
                                <span className="text-primary ms-4">this.</span><span className="text-info">state<span className='ms-2'>&#61;</span></span><span className="text-primary ms-2">&#123;</span><span className="text-info">data:</span> <span className="text-danger">	&quot;Something	&quot;</span><span className="text-primary">&#125;</span>
                                <br/><span className="text-warning">&#125;</span>
                                </p>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

    // changeData =()=>{
    //     console.log("called");
    // }
    // changeData(){
    //     console.log("called");
    //     // Something = "Change"
    //     this.setState({data:"Testing"})
    // }
//     changeData=()=>{
//         console.log("called");
//         // Something = "Change"
//         this.setState({data:"Testing"})
//     }
    
//     render() {
//         let Something = "Data"
//         // const changeDataFunc=()=>{
//         //     console.log("called");
//         //     Something = "Change"
//         // }
//         return (
//             <>
//                 <div className="class-content mt-2 border-top">
//                     <h5 className='text-dark border-bottom py-2 fw-bold'>State:</h5>
//                     <ul className='sub-content'>
//                         <li>
//                             <p>Change Data</p>
//                         </li>
//                         <li>
//                             <p className='d-flex  align-items-center'>
//                                 {/* <button onClick={changeDataFunc}>Click</button> */}
//                                 <button onClick={this.changeData} className="btn btn-secondary fw-bold">Click</button>
//                                 <p className='ms-3'>{Something}</p>
//                             </p>
                            
//                         </li>
//                         <li>
//                             <p><strong>State</strong>&nbsp; {this.state.data}</p>
//                         </li>
//                     </ul>
//                 </div>
//             </>
//         );
//     }
// }

export default ClassCompoState;