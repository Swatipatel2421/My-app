import React, { Component } from 'react';
import EnhancedComponent from './EnhancedComponent.jsx' 

class MainCompo extends Component {
    render() {
        const { clickHnadle } = this.props
        return (
            <div>
                {/* <EnhancedComponent/> */}
                {/* <button onClick={this.props.clickHnadle}>Click</button> */}
                <button onClick={clickHnadle}>Click</button>
            </div>
        );
    }
}

export default EnhancedComponent(MainCompo);