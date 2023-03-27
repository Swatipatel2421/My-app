import React, { Component } from 'react';

class ClassCompojsx extends Component {
    changeDataDmFunction = ()=>{
        console.log("called changeDataDmFunction");
    }
    render() {
        const koidata = "Something"
        const changeData = ()=>{
            console.log("called");
        }
        return (
            <>
                <div className="class-content mt-2 border-top">
                    <h5 className='text-dark border-bottom py-2 fw-bold'>JSX:</h5>
                    <ul className='sub-content'>
                        <li>
                            <p>{koidata}</p>
                        </li>
                        <li>
                            <p>Addition of 50+874 is {50+874} </p>
                        </li>
                        <li>
                            <p className='d-flex  align-items-center'>
                                {/* <button onClick={changeData()}>Click</button> */}
                                <button onClick={changeData} className="btn btn-secondary me-3">Click</button>
                                <button onClick={this.changeDataDmFunction} className="btn btn-secondary">Click</button>
                            </p>
                            
                        </li>
                        
                    </ul>
                </div>
                
                
                
            </>
        );
    }
}

export default ClassCompojsx;