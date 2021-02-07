import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ViewSession extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        students: [],
        visi:"hidden"
      }
    }
    sub=(e)=>{
    e.preventDefault();
      axios.get('http://localhost:8080/api/session/batch/'+e.target.elements.batch.value)
      .then(response => {
        console.log(response.data);
        this.setState({
            students:response.data,
            visi:"visible"
        })
      })
  }
    render(){
      return (
        <div>
          <h1>List of Sessions</h1>
          <ToastContainer />
        <form onSubmit={this.sub}>
          
          <label htmlFor="batch_id">Batch_number</label>
          <input type="text" id="batch" />
          <input type= "Submit" value="get details" />
        </ form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
          <table id="customers" cellpadding="100" style={{visibility:this.state.visi}}>
            <tr>
              <th>Session Id </th>
              <th>Session Name </th>
              <th>Trainer Id </th>
              <th>Start Time </th>
              <th>End Time </th>
              <th>Session Date </th>
              <th>Batch Id </th>
            </tr>
            {this.state.students.map(Student => (
              <tr>
                <td>{Student.session_id}</td>
                <td>{Student.session_name}</td>
                <td>{Student.trainerid}</td>
                <td>{Student.start_time}</td>
                <td>{Student.end_time}</td>
                <td>{Student.session_date}</td>
                <td>{Student.batchid}</td>
              </tr>
            ))}

          </table>
        </div>
      );
    }
  }
export default ViewSession;