import React from 'react';
import axios from 'axios';
class LoginForm3 extends React.Component
{
    onSub = (e) => {
        console.log('enter');
        e.preventDefault();
        console.log(e.target.elements.student_username.value);
        var trainer_username=e.target.elements.student_username.value;
        var trainer_password=e.target.elements.student_password.value;
        axios.get('http://1087d3098528.ngrok.io/api/login/student/'+trainer_username+'/'+trainer_password,{
            headers: {'Access-Control-Allow-Origin':'http://1087d3098528.ngrok.io/api/login/student'},
        }).then(response => {
        console.log(response);
        alert(response);
    })
    }
    render(){
    return (
        <form onSubmit={this.onSub} className="app">
            <div className="form-inner">
                 <h2>Student Login</h2>
                 <div className="form-group">
                     <label htmlFor="student_username">Username:</label>
                     <input type="text" name="student_username" id="student_username"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="trainer_password">Password:</label>
                 <input type= "password" name="student_password" id="student_password"/>



                 </div>

                <input type="submit" value="login" />
            </div>




        </form>

    )
}
}
export default LoginForm3;