import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
import Sidebar1 from '../sidebar/Sidebar1';
function Admincheck(){
    if (document.getElementById("admin_username").value==="Admin" && document.getElementById("admin_password").value==="admin"){
        ReactDOM.render(
  <React.StrictMode>
    <Sidebar1 />
    <Navbar/>
  </React.StrictMode>,
  document.getElementById('root')
);
        
    }
    else{
        alert("Failure");
    }
    return false;
}
export default Admincheck;