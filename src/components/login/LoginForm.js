import React from 'react';
import "./LoginForm.css"
import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
import Sidebar1 from '../sidebar/Sidebar1';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Sidebar2 from '../sidebar/Sidebar2';
import Sidebar from '../sidebar/Sidebar';
import { useHistory } from 'react-router-dom';

const Admincheck = (e, props) => {
    let userName = document.getElementById("admin_username").value;
    let password = document.getElementById("admin_password").value;

    e.preventDefault();
    axios.post('http://localhost:8080/api/login', {
        userName: userName,
        password: password
    }).then(response => {
        if (response.data) {
            if (response.data === "admin") {
                return props.history.push('/admin/dashboard');
            } else if (response.data === "trainer") {
                return props.history.push('/trainer/dashboard');
            } else if (response.data === "student") {
                return props.history.push('/student/dashboard');
            } else if (response.data === "failure") {
                <div>{ toast.failure("Invalid User Name Password!", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 2000
                }) }</div>
            }
        }
    })

}


const LoginForm = (props) => {
    return (
        <div >
            <form className="app">
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="admin_username">Username:</label>
                        <input type="text" name="admin_username" id="admin_username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="admin_password">Password:</label>
                        <input type="password" name="admin_password" id="admin_password" />
                    </div>

                    <input type="submit" onClick={(e) => Admincheck(e,props) } />
                </div>
            </form>
        </div>

    );
}
export default LoginForm;