import React from 'react';
import "./Session.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
class  Session extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/api/session/save', {
            session_id:e.target.elements.session_id.value,
            session_name:e.target.elements.session_name.value,
            trainerid:e.target.elements.trainer_id.value,
            session_date:e.target.elements.session_date.value,
            start_time:e.target.elements.start_time.value,
            end_time:e.target.elements.end_time.value,
            batchid:e.target.elements.batch_id.value,
            
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
                 <h2>Session</h2>
                 <div className="form-group">
                     <label htmlFor="session_id">Session Id</label>
                     <input type="number" name="session_id" id="session_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="session_name">Name</label>
                 <input type= "text" name="session_name" id="session_name"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="start_time">Start Time</label>
                 <input type= "text" placeholder="2021-02-04T17:43:00" name="start_time" id="start_time"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="end_time">End Time</label>
                 <input type= "text" placeholder="2021-02-04T17:43:00" name="end_time" id="end_time"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="trainer_id">Trainer Id</label>
                 <input type= "number" name="trainer_id" id="trainer_id"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="session_date">Date</label>
                 <input type= "date" name="session_date" id="session_date"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="batch_id">Batch Id</label>
                 <input type= "number" name="batch_id" id="batch_id"/>
                 </div>

                <input type="submit" value="Add Session" />
            </div>




        </form>

    )
 }
}
export default Session;