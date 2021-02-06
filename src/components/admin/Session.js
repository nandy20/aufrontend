import React from 'react';
import "./Session.css";
import axios from 'axios';
class  Session extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
        console.log(e.target.elements.assignment_name.value);
        axios.post('http://localhost:8080/api/session/save', {
            session_id:e.target.elements.session_id.value,
            session_name:e.target.elements.session_name.value,
            trainer_id:e.target.elements.trainer_id.value,
            start_time:e.target.elements.start_time.value,
            end_time:e.target.elements.end_time.value,
            batch_id:e.target.elements.batch_id.value,
            
    }).then(response => {
        console.log(response);
        alert(response);
    })
    }
 render(){
    return (
        <form onSubmit={this.onSub}>
            <div className="form-inner">
                 <h2>Session</h2>
                 <div className="form-group">
                     <label htmlFor="session_id">Id</label>
                     <input type="number" name="session_id" id="session_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="session_name">Name</label>
                 <input type= "text" name="session_name" id="session_name"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="start_time">Start time</label>
                 <input type= "time" name="start_time" id="start_time"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="end_time">End time</label>
                 <input type= "time" name="end_time" id="end_time"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="trainer_id">Trainer id</label>
                 <input type= "number" name="trainer_id" id="trainer_id"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="session_date">Date</label>
                 <input type= "date" name="session_date" id="session_date"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="batch_id">Batch id</label>
                 <input type= "date" name="batch_id" id="batch_id"/>
                 </div>

                <input type="submit" value="Add Session" />
            </div>




        </form>

    )
 }
}
export default Session;