import React from 'react';
import "./Session.css";
import axios from 'axios';
class  Trainers extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
        console.log(e.target.elements.assignment_name.value);
        axios.post('http://localhost:8080/api/trainer/save', {
            trainer_id:e.target.elements.trainer_id.value,
           trainer_name:e.target.elements.trainer_name.value,
           trainer_email:e.target.elements.trainer_email.value,
           trainer_mobile:e.target.elements.trainer_mobile_no.value,
           trainer_username:e.target.elements.trainer_username.value,
           trainer_password:e.target.elements.trainer_password.value,
    }).then(response => {
        console.log(response);
        alert(response);
    })
    }
 render(){

    return (
        <form>
            <div className="form-inner">
                 <h2>Trainer</h2>
                 <div className="form-group">
                     <label htmlFor="trainer_id">Id</label>
                     <input type="number" name="trainer_id" id="trainer_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="trainer_name">Name</label>
                 <input type= "text" name="trainer_name" id="trainer_name"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="trainer_email">Email</label>
                 <input type= "text" name="trainer_email" id="trainer_email"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="trainer_username">Mobile No</label>
                 <input type= "text" name="trainer_username" id="trainer_username"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="trainer_password">Mobile No</label>
                 <input type= "text" name="trainer_password" id="trainer_password"/>
                 </div>
                <input type="submit" value="Add Trainer" />
            </div>




        </form>

    )
 }
}
export default Trainers;