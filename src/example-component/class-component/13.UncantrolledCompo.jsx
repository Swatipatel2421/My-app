import React, { Component } from 'react';

class UncantrolledCompo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <>
           <div className="class-content mt-2 border-top">
                    <h5 className='text-dark border-bottom py-2 fw-bold'>UnControlledCompo:</h5>
                    <ul className='sub-content'>
                      <li>uncontrolled components, where form data is handled by the DOM itself</li>
                      <li>To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.</li>
                    </ul>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
          </>
        );
      }
    }
export default UncantrolledCompo;