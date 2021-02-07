import axios from 'axios';
import React from 'react';
import Trainers from './Trainers';


class  ViewTrainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     trainers:[]  
    }

  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/trainer/fetch')
    .then(response => {
      console.log(response.data);
      this.setState({
          trainers:response.data  
      });
    })
  }
render(){
    return (
       
            <div className="viewtarin">
              <h1>List of Trainers</h1>
              <table id="customers">

  <tr>
    <th>Trainer Id</th>
    <th>Trainer Name</th>
    <th>Trainer Email</th>
    <th>Trainer Username</th>
    <th>Trainer Password</th>
  </tr>
  {this.state.trainers.map(trainer=>(
        <tr>
        <td>{trainer.trainer_id}</td>
        <td>{trainer.trainer_name}</td>
        <td>{trainer.trainer_email}</td>
        <td>{trainer.trainerUsername}</td>
        <td>{trainer.trainerPwd}</td>
      </tr>
  ))}
  
  </table>
            </div>




       

    )
}
}
export default ViewTrainers;