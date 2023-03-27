import React from 'react';
import {Link} from 'react-router-dom'

const Child = (props) => {
  return(
    <div>
    <h1>{console.log(props.match.path)}CHild!</h1>
  <Link to={`${props.match.path}/grandchild`} >grandchild</Link>  
    </div>
  )
}

export default Child;