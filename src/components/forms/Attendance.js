import React from 'react';
import axios from 'axios';
import Styles from "./Assignments.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class  Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     students:[],
     visi:"hidden"
    }

  }
  sub=(e)=>{
    e.preventDefault();
      axios.get('http://localhost:8080/api/Auer/batch/'+e.target.elements.batch_id.value)
      .then(response => {
        console.log(response.data);
        this.setState({
            students:response.data,
            visi:"visible"
        })
      })
  }
  stusubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8080/api/attendance/save', {
           student_id:e.target.elements.stu_id.value,
           session_id:e.target.elements.stu_sess.value,
           status:e.target.elements.stu_status.value,
           
    }).then(response => {
      if(response.data=="success"){
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
        <div>
        <div >
        <ToastContainer />
            <h1>Attendance</h1>
            <form onSubmit={this.sub} style={{height:"auto",marginTop:"10%"}}>
            <div >
                     <label htmlFor="batch_id">Batch Number</label>
                     <input type="number" name="batch_id" id="batch_id"/>
                 </div>
                 
                 <input type="submit" value="get details" />
                 </form>
               
                
        </div>
       
         <div>
             <table style={{visibility:this.state.visi}}>
                 
              <tr>
              <th>Student id</th>
                 <th>Student Name</th>
                 <th>Session id</th>
                 <th>Attendance</th>
             </tr>
             </table>
         {this.state.students.map(student=>(
           <form onSubmit={this.stusubmit}>
               <table>
               <tr>
                
               <td > <input type="text" value={student.student_id} name="stu_id" id="stu_id" readOnly/></td>
               <td> <input type="text" value={student.student_name} name="stu_name" id="stuname" readOnly/></td>
               <td> <input type="text" name="stu_sess" id="stu_sess"/></td>

               <td> <input type="text" name="stu_status" id="stu_status"/></td>
               <td><input type="submit" value="mark" name={student.student_id} id={student.student_id}  /></td>
              
               </tr>
               </table>
               </form>
          ))}
         
         </div>
         </div>
    )
}
}
export default Attendance;