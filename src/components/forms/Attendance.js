import React from 'react';
import axios from 'axios';
import Styles from "./Assignments.css";

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
  render(){
    return (
        <div>
        <div >
            <h1>Attendance</h1>
            <form onSubmit={this.sub} style={{height:"auto",marginTop:"10%"}}>
            <div >
                     <label htmlFor="batch_id">Batch_number</label>
                     <input type="number" name="batch_id" id="batch_id"/>
                 </div>
                 
                 <input type="submit" value="get details" />
                 </form>
               
                
        </div>
       
         <div>
             <table style={{visibility:this.state.visi}}>
                 
              <tr>
                 <th>Student Name</th>
                 <th>Attendance</th>
             </tr>
         {this.state.students.map(student=>(
               <tr>
               <td>{student.student_id}</td>
               <td>{student.student_name}</td>
               <td> <input type="text" name="pre" id="pre"/></td>

               <td> <input type="text" name="pre" id="pre"/></td>
               <td><button>submit</button> <button/></td>
               </tr>
          ))}
          </table>
         </div>
         </div>
    )
}
}
export default Attendance;