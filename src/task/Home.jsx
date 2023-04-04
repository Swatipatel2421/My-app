import React from 'react';
import {Link} from 'react-router-dom'


const Home = (props) => {
  return(
    <div>
  <h1>{console.log(props.match.path)}Home!</h1>
  <Link to="/parent" >parent</Link>  
            
    </div>
  )
}

export default Home;