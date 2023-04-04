import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StateLifeCycleCompo extends Component {
    render() {
        return (
            <>
                <div className="class-content mt-2 border-top">
                    <h5 className='text-dark border-bottom py-2 fw-bold'>State Life Cycle:</h5>
                    <ul className='sub-content'>
                        <li>
                            <p><strong className='text-info'>Mounting:</strong> <strong>Birth</strong> of your component.</p>
                        </li>
                        <li>
                            <p><strong className='text-info'>Update:</strong> <strong>Growth</strong> of your component.</p>
                        </li>
                        <li>
                            <p><strong className='text-info'>Unmount:</strong> <strong>Death</strong> of your component.</p>
                        </li>
                        <li>
                            <p><strong>Methods in react component in lifecycle:</strong></p>
                            <ul className='sub-content mt-2'>
                                <li className='mb-1'><p><strong>Render&#40;&#41;</strong> - not modify state method.</p></li>
                                <li className='mb-1'><p><strong>ComponentDidMount&#40;&#41;</strong> - after run render method.</p></li>
                                <li className='mb-1'><p><strong>ComponentDidUpdate&#40;&#41;</strong> - updating data.</p></li>
                                <li className='mb-1'><p><strong>ComponentWillUnmount&#40;&#41;</strong> - just run before unmounting method.</p></li>
                            </ul>
                        </li>
                        <li>
                     <p>For Example click here...</p>
                            <Link to="../exampleLifeCycle" className='btn btn-primary'>Demo Link</Link>
                            </li>
                    </ul>
                   
                </div>
            </>
        );
    }
}

export default StateLifeCycleCompo;