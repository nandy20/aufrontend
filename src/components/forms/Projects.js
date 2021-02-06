import React from 'react';
import "./Projects.css"
import axios from 'axios';
class  Projects extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
        console.log(e.target.elements.assignment_name.value);
        axios.post('http://localhost:8080/api/Assignment/save', {
            project_id:e.target.elements.project_id.value,
            project_name:e.target.elements.project_name.value,
            trainer_id:e.target.elements.trainer_id.value,
            deadline:e.target.elements.deadline.value,
            project_maximum_marks:e.target.elements.max_marks.value,
    }).then(response => {
        console.log(response);
        alert(response);
    })
    }
    render(){
    return (
        <form onSubmit={this.onSub}>
            <div className="form-inner">
                 <h2>Project Question Submission</h2>
                 <div className="form-group">
                     <label htmlFor="project_id">Project_id</label>
                     <input type="number" name="project_id" id="project_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="project_name">project_name</label>
                 <input type= "text" name="project_name" id="project_name"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="description">Description</label>
                 <input type= "text" name="description" id="description"/>
                 </div>
                
                 <div className="form-group">
                 <label htmlFor="trainer_id">project Id</label>
                 <input type= "number" name="trainer_id" id="trainer_id"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="max_marks">Maximum Marks</label>
                 <input type= "number" name="max_marks" id="max_marks"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="deadline">Deadline</label>
                 <input type= "number" name="deadline" id="deadline"/>
                 </div>

                <input type="submit" value="submit" />
            </div>




        </form>

    )
    }
}
export default Projects;