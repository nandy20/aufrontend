import React from 'react';
import "./SAssignments.css"
import axios from 'axios';
class  VSessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     sessions:[]  
    }

  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/session/trainer/17')
    .then(response => {
      console.log(response.data);
      this.setState({
          sessions:response.data  
      });
    })
  }
render(){

    return (
        <div>
            <h1> List of Sessions</h1>
            <table id="customers">

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
export default VSessions;