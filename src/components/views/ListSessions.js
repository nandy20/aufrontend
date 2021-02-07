import React from 'react';
import axios from 'axios';
class  LSessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     sessions:[],
     visi:"hidden"  
    }

  }
  sub=(e)=>{
    e.preventDefault();
      axios.get('http://localhost:8080/api/session/trainer/'+e.target.elements.trainer.value)
      .then(response => {
        console.log(response.data);
        this.setState({
            sessions:response.data,
            visi:"visible"
        })
      })
  }
  
render(){

    return (
        <div>
          <h1>Sessions Details</h1>
            <form onSubmit={this.sub}>
          
          <label htmlFor="batch_id">Enter your trainer id</label>
          <input type="text" id="trainer" />
          <input type= "Submit" value="get details" />
        </ form>
            <table id="customers" style={{visibility:this.state.visi}}>

<tr>
  <th>Session id</th>
  <th>Session name</th>
  <th>Session date</th>
  <th>Start time</th>
  <th>End time</th>
</tr>
{this.state.sessions.map(session=>(
      <tr>
      <td>{session.session_id}</td>
      <td>{session.session_name}</td>
      <td>{session.session_date}</td>
      <td>{session.start_time}</td>
      <td>{session.end_time}</td>
    </tr>
))}

</table>
        </div>

    )

}
}
export default LSessions;