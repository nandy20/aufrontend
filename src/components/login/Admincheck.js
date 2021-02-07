import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
import Sidebar1 from '../sidebar/Sidebar1';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admincheck() {
  if (document.getElementById("admin_username").value === "Admin" && document.getElementById("admin_password").value === "admin") {
    toast.success("Successfully logged!!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });

    ReactDOM.render(
      <React.StrictMode>
        <ToastContainer />
        <Sidebar1 />
        <Navbar />
      </React.StrictMode>,
      document.getElementById('root')
    );

  }
  else {
    alert("Failure");
  }
  return false;
}
export default Admincheck;