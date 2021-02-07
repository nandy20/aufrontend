import React from 'react';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import ReactDOM from 'react-dom';
import "./LoginForm.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class LoginForm1 extends React.Component
{
    onSub = (e) => {
        console.log('enter');
        e.preventDefault();
        console.log(e.target.elements.trainer_username.value);
        var trainer_username=e.target.elements.trainer_username.value;
        var trainer_password=e.target.elements.trainer_password.value;
        axios.get('http://localhost:8080/api/login/trainer/'+trainer_username+'/'+trainer_password,{
            headers: {'Access-Control-Allow-Origin':'http://8c617c973473.ngrok.io/api/login/trainer'},
        }).then(response => {
        console.log(response);
        toast.success("Successfully logging in!!", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 2000
          });
    
    })
    }
    render(){
    return (
        <form onSubmit={this.onSub} className="app">
            <div className="form-inner">
                 <h2>Trainer Login</h2>
                 <div className="form-group">
                     <label htmlFor="trainer_username">Username:</label>
                     <input type="text" name="trainer_username" id="trainer_username"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="trainer_password">Password:</label>
                 <input type= "password" name="trainer_password" id="trainer_password"/>



                 </div>

                <input type="submit" value="login"/>
            </div>




        </form>

    )
}
}
export default LoginForm1;