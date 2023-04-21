import React, { Component } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

class ClassCompoControlledCompo extends Component {
    constructor(props) {
        super(props);
        this.state={inpUName:"",uid:"",emailid:"emailid",formData:{}}
    }
    
    setInputData=(event)=>{  
        // console.log("Event",event);
        // console.log("event.target",event.target);
        // console.log("event.target",event.target.value);
        this.setState({inpUName:event.target.value})
    }
    submitdata=(event)=>{  
        event.preventDefault();
        console.log("submitted",this.state);
    }
    render() {
        return (
            <>
           <div className="container border-top">
                <form action="post">
                    <table>
                   <tr>
                    <td>
                <label >First Name:</label></td>
                <td><input type="text"  onChange={this.setInputData} name="" id="" /> {this.state.inpUName}</td>
                </tr>
                <tr>
               <td> <label className='py-2 m-1'>Last Name:</label></td>
                <td><input type="text"  onChange={this.setInputData} name="" id="" />
                {this.state.inpUName}</td>
                </tr>
                
                <label className='py-2 m-2'>Email Id:
                <input label='Email input' id='typeEmail' type='email' /></label>
                <br/>
                <br/>
                <input className='py-2 m-1 mr-2' type="submit" onClick={this.submitdata} name="" id="" />
                </table>
                </form>
                {/* <h2>set Data to State inside input arrow </h2> */}
                {/* <form>
                    {JSON.stringify(this.state)}
                    <input type="text" onChange={(event)=>{ this.setState({username:event.target.value})}} name="Uid" id="username" />
                    <input type="submit" onClick={this.submitdata} name="" id="" />
                </form> */}

                {/* <h2>set multiple Data to single State object inside input arrow </h2>
                <form> */}
                    {/* {JSON.stringify(this.state)}*/}
                    {/* {JSON.stringify(this.state.formData)}  */}
                    {/* <input type="text" onChange={this.storeDatatoStateObject} name="uname" id="uname" /> */}
                    {/* <br />

                    <input type="text" onChange={(event)=>{this.setState((prevState) => ({ formData: {...prevState.formData,[event.target.name]: event.target.value} }))}} name="uname" id="uname" /> */}
{/* 
                    <br />
                    <br />

                    <input type="text" onChange={(event)=>{ this.setState((koibhi) => ({ formData: {  ...koibhi.formData,  [event.target.name]: event.target.value } }))  }}name="password" id="password" /> */}
                    {/* <input type="text" onChange={(event)=>{ this.setState({...this.state.formData,[event.target.name]:event.target.value})  }} name="uname" id="uname" /> */}
                    {/* <input type="text" onChange={(event)=>{ this.setState({[event.target.name]:event.target.value})}} name="username" id="username" />
                    <input type="text" onChange={(event)=>{ this.setState({[event.target.name]:event.target.value})}} name="password" id="password" /> */}
                    {/* <input type="text" onChange={(event)=>{ this.setState((data)=>({
                        formData:{...data.formData,[event.target.name]:event.target.value}
                    })) }} name="email" id="email" /> */}
                   
                 {/* </form> */}
                 </div>
            </> 
        );
    }
}

export default ClassCompoControlledCompo;