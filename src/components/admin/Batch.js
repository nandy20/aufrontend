import React from 'react';
import "./Session.css";
import axios from 'axios';
class  Batch extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
        console.log(e.target.elements.assignment_name.value);
        axios.post('http://localhost:8080/api/batch/save', {
            batch_id:e.target.elements.batch_id.value,
            batch_name:e.target.elements.batch_name.value,
           
    }).then(response => {
        console.log(response);
        alert(response);
    })
    }
 render(){
    return (
        <form onSubmit={this.onSub}>
            <div className="form-inner">
                 <h2>Batch</h2>
                 <div className="form-group">
                     <label htmlFor="batch_id">Batch_id</label>
                     <input type="number" name="batch_id" id="batch_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="batch_name">Batch_name</label>
                 <input type= "text" name="batch_name" id="batch_name"/>
                 </div>
                 

                <input type="submit" value="Add Batch" />
            </div>




        </form>

    )
 }
}
export default Batch;