import axios from 'axios';
import React from 'react';
import Trainers from './Trainers';


class  ViewGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     projects:[]  
    }

  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/project/fect')
    .then(response => {
      console.log(response.data);
      this.setState({
          projects:response.data  
      });
    })
  }
render(){
    return (
       
            <div className="viewtarin">
              <h1>List of Projects</h1>
              <table id="customers">

  <tr>
    <th>Project id</th>
    <th>Project name</th>
    <th>Description</th>
    <th>Trainer id</th>
    <th>Deadline</th>
  </tr>
  {this.state.projects.map(project=>(
        <tr>
        <td>{project.project_id}</td>
        <td>{project.project_name}</td>
        <td>{project.description}</td>
        <td>{project.trainer_id}</td>
        <td>{project.deadline}</td>
      </tr>
  ))}
  
  </table>
            </div>




       

    )
}
}
export default ViewGroup;