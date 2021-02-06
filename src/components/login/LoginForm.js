import React from 'react';
import "./LoginForm.css"
import Admincheck from './Admincheck';
function LoginForm()
{
    return (
        <div >
        <form  className="app">
            <div className="form-inner">
                 <h2>Admin Login</h2>
                 <div className="form-group">
                     <label htmlFor="admin_username">Username:</label>
                     <input type="text" name="admin_username" id="admin_username"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="admin_password">Password:</label>
                 <input type= "password" name="admin_password" id="admin_password"/>
                 </div>

                <input type="submit" onClick={Admincheck}/>
            </div>
        </form>
        </div>

    );
}
export default LoginForm;