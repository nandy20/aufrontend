import React from 'react';
import "./Session.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class  Batch extends React.Component {
    
    onSub = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/api/batch/save', {
            batch_id:e.target.elements.batch_id.value,
            btach_name:e.target.elements.batch_name.value,
           
    }).then(response => {
        if(response.data=="success"){
        toast.success("Successfully added!!", {
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