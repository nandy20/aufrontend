import React from 'react';
import "./Projects.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
class  Projects extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
       
        axios.post('http://localhost:8080/api/project/save', {
            project_id:e.target.elements.project_id.value,
            project_name:e.target.elements.project_name.value,
            trainer_id:e.target.elements.trainer_id.value,
            description:e.target.elements.desc.value,
            deadline:e.target.elements.deadline.value,
            project_maximum_marks:e.target.elements.max_marks.value,
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
                 <h2>Project Question Submission</h2>
                 <div className="form-group">
                     <label htmlFor="project_id">Project Id</label>
                     <input type="number" name="project_id" id="project_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="project_name">Project Name</label>
                 <input type= "text" name="project_name" id="project_name"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="desc">Description</label>
                 <input type= "text" name="desc" id="desc"/>
                 </div>
                
                 <div className="form-group">
                 <label htmlFor="trainer_id">Trainer Id</label>
                 <input type= "number" name="trainer_id" id="trainer_id"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="max_marks">Maximum Marks</label>
                 <input type= "number" name="max_marks" id="max_marks"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="deadline">Deadline</label>
                 <input type= "text" placeholder="yyyy-mm-dd" name="deadline" id="deadline"/>
                 </div>

                <input type="submit" value="submit" />
            </div>




        </form>

    )
    }
}
export default Projects;