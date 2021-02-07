import React from 'react';
import "./Session.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class  Trainers extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
        console.log(e.target.elements.trainer_name.value);
        axios.post('http://localhost:8080/api/trainer/save', {
            trainer_id:e.target.elements.trainer_id.value,
           trainer_name:e.target.elements.trainer_name.value,
           trainer_email:e.target.elements.trainer_email.value,
           trainerUsername:e.target.elements.trainer_username.value,
           trainerPwd:e.target.elements.trainer_password.value,
    }).then(response => {
        if(response.data){
            toast.success("Successfully saved!!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
              });
            console.log(response);
            }
    })
    }
 render(){

    return (
        <form onSubmit={this.onSub}>
            <ToastContainer />
            <div className="form-inner">
                 <h2>Trainer</h2>
                 <div className="form-group">
                     <label htmlFor="trainer_id">Trainer Id</label>
                     <input type="number" name="trainer_id" id="trainer_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="trainer_name">Trainer Name</label>
                 <input type= "text" name="trainer_name" id="trainer_name"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="trainer_email">Trainer Email</label>
                 <input type= "text" name="trainer_email" id="trainer_email"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="trainer_username">Trainer Username</label>
                 <input type= "text" name="trainer_username" id="trainer_username"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="trainer_password">Trainer Password</label>
                 <input type= "text" name="trainer_password" id="trainer_password"/>
                 </div>
                <input type="submit" value="Add Trainer" />
            </div>




        </form>

    )
 }
}
export default Trainers;