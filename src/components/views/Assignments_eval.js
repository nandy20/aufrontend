import React from 'react';
import axios from 'axios';

class  Assignments_eval extends React.Component {
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
    axios.post('http://localhost:8080/api/assigneval/save', {
           student_id:e.target.elements.stu_id.value,
           assignment_id:e.target.elements.stu_assign.value,
           maximum_marks:e.target.elements.max_marks.value,
           
    }).then(response => {
        console.log(response);
        alert(response);
    })
  }
  render(){
    return (
        <div>
        <div >
            <h1>Assignments Grading</h1>
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
              <th>Student id</th>
                 <th>Student Name</th>
                 <th>Assignment id</th>
                 <th>Mark</th>
             </tr>
             </table>
         {this.state.students.map(student=>(
           <form onSubmit={this.stusubmit}>
               <table>
               <tr>
                
               <td > <input type="text" value={student.student_id} name="stu_id" id="stu_id" readOnly/></td>
               <td> <input type="text" value={student.student_name} name="stu_name" id="stuname" readOnly/></td>
               <td> <input type="text" name="stu_assign" id="stu_assign"/></td>

               <td> <input type="text" name="max_marks" id="max_marks"/></td>
               <td><input type="submit" value="grade" name={student.student_id} id={student.student_id}  /></td>
              
               </tr>
               </table>
               </form>
          ))}
         
         </div>
         </div>
    )
}
}
export default Assignments_eval;