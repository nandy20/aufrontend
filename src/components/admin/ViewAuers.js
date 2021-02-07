import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ViewAuer extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        students: [],
        visi:"hidden"
      }
    }
    sub=(e)=>{
    e.preventDefault();
      axios.get('http://localhost:8080/api/Auer/batch/'+e.target.elements.batch.value)
      .then(response => {
        console.log(response.data);
        this.setState({
            students:response.data,
            visi:"visible"
        })
        if(response.data){
          toast.success("Successfully fetched!!", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000
            });
          console.log(response);
          }
      })
  }
    render(){
      return (
        <div>
           <ToastContainer />
        <form onSubmit={this.sub}>
          <h1>List of Auers</h1>

          <label htmlFor="batch_id">Batch Number</label>
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
              <th>Student Id </th>
              <th>Student Name </th>
              <th>Student Email </th>
              <th>Student Mobile </th>
              <th>Batch Id </th>
              <th>Student Username </th>
              <th>Student Password </th>
            </tr>
            {this.state.students.map(Student => (
              <tr>
                <td>{Student.student_id}</td>
                <td>{Student.student_name}</td>
                <td>{Student.student_email}</td>
                <td>{Student.student_mobile}</td>
                <td>{Student.batchid}</td>
                <td>{Student.studentUsername}</td>
                <td>{Student.studentPwd}</td>
              </tr>
            ))}

          </table>
        </div>
      );
    }
  }
export default ViewAuer;