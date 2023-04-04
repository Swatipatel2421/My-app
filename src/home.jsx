import React from "react";

const HomePage = () => {
  return (
    <div className="class-content m-2 py-5 px-5 border-top ">
    <ul className='sub-content '>
    <li><span className="list-group-item-info ">ReactJS</span> is a<span className="list-group-item-info">JavaScript</span> library used to build User Interfaces(UI). It significantly decreases the code with it's components, states i.e. hooks, etc. </li>
    <li><p>Creating react app
Open your terminal in the directory you would like to create your application. Run this command to create a React application named <br/><span className="text-primary fw-bold">my-react-app:</span><br/>
<br/>
<span className="fw-bold"> npx create&minus;react&minus;app my&minus;react&minus;app</span>
</p>
</li>
<li><span className="text-danger fw-bold">Note:</span> When choosing folder name, make sure there are no spaces or capital letters because of npm naming restrictions. </li>
<li>Once base application is created, if folder specified you just have to enter the folder. You can use this command to enter:</li><br/>

<li><span className="fw-bold">cd directory-name</span></li><br/>
<li>
Then just start up the application with this command:<br/>
<br/>
<span className="fw-bold">npm start</span></li>
    </ul>
    </div>
  );
};

export default HomePage;
