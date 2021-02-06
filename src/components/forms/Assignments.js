import React from 'react';
import "./Assignments.css";
import axios from 'axios';
class  Assignments extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
        console.log(e.target.elements.assignment_name.value);
        axios.post('http://localhost:8080/api/Assignment/save', {
           assignment_id:e.target.elements.assignment_id.value,
           assignment_name:e.target.elements.assignment_name.value,
           session_id:e.target.elements.session_id.value,
           maximum_marks:e.target.elements.maximum_marks.value,
           deadline:e.target.elements.deadline.value,
    }).then(response => {
        console.log(response);
        alert(response);
    })
    }
    render(){

    return (
        <form onSubmit={this.onSub}>
            <div className="form-inner">
                 <h2>Assignment Creation</h2>
                 <div className="form-group">
                     <label htmlFor="assignment_id">Assignment_id</label>
                     <input type="number" name="assignment_id" id="assignement_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="assignment_name">Assignment_name</label>
                 <input type= "text" name="assignment_name" id="assignement_name"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="session_id">Session_id</label>
                 <input type= "text" name="session_id" id="session_id"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="deadline">Deadline</label>
                 <input type= "date" name="deadline" id="deadline"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="deadline">Maximum Marks</label>
                 <input type= "number" name="maximum_marks" id="maximum_marks"/>
                 </div>

                <input type="submit" value="submit" />
            </div>




        </form>

    )
    }
}
export default Assignments;