import React, { Component } from 'react';
import ChildCompo from './childprops'

class PropsComponent extends Component {
    render(props) {
        return (
            <>
              <div className='row'>
                <div className='col-md-4'>
                    <ChildCompo title="My App" ></ChildCompo>
                </div>
                <div className='col-md-4'>
                    <ChildCompo></ChildCompo>
                </div>
                <div className='col-md-4'>
                    <ChildCompo></ChildCompo>
                </div>
                
                </div> 
            </>
        );
    }
}

export default PropsComponent;