import React from 'react';
import axios from 'axios';
class  ViewBatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     batches:[]  
    }

  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/batch/fetch')
    .then(response => {
      console.log(response.data);
      this.setState({
          batches:response.data  
      });
    })
  }
render(){
   
    return (
       
            <div className="vieweval">
              <h1>List of Batches</h1>
              <table id="customers">

<tr>
  <th>Batch id</th>
  <th>Batch name</th>
  
</tr>
{this.state.batches.map(batch=>(
      <tr>
      <td>{batch.batch_id}</td>
      <td>{batch.btach_name}</td>
    </tr>
))}

</table>
            </div>


            

       

    )
}
}
export default ViewBatch;