import React from 'react';
import "./Session.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class  Auer extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
        console.log(e.target.elements.Auer_name.value);
        axios.post('http://localhost:8080/api/Auer/save', {
           student_id:e.target.elements.Auer_id.value,
           student_name:e.target.elements.Auer_name.value,
           student_email:e.target.elements.Auer_email.value,
           student_mobile:e.target.elements.Auer_mobile_no.value,
           batchid:e.target.elements.Auer_batch_id.value,
           studentUsername:e.target.elements.Auer_username.value,
           studentPwd:e.target.elements.Auer_password.value,
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
            <div className="form-inner" >
                 <h2>Auer</h2>
                 <div className="form-group">
                     <label htmlFor="Auer_id">Id</label>
                     <input type="number" name="Auer_id" id="Auer_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="Auer_name">Name</label>
                 <input type= "text" name="Auer_name" id="Auer_name"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="Auer_email">Email</label>
                 <input type= "text" name="Auer_email" id="Auer_email"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="Auer_mobile_no">Mobile No</label>
                 <input type= "text" name="Auer_mobile_no" id="Auer_mobile_no"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="Auer_batch_id">Batch Id</label>
                 <input type= "number" name="Auer_batch_id" id="Auer_batch_id"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="Auer_username">UserName</label>
                 <input type= "text" name="Auer_username" id="Auer_username"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="Auer_password">Password</label>
                 <input type= "text" name="Auer_password" id="Auer_password"/>
                 </div>

                <input type="submit" value="Add Auer" />
            </div>




        </form>

    )
 }
}
export default Auer;