import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Assignments from "./components/forms/Assignments"
import Projects from "./components/forms/Projects";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Attendance from "./components/forms/Attendance";
import ListSessions from "./components/views/ListSessions";
import Assignments_eval from "./components/views/Assignments_eval";
import Sidebar1 from "./components/sidebar/Sidebar1";
import Main from "./components/main/Main";
import Session from "./components/admin/Session";
import Projects1 from "./components/admin/Projects1";
import Group from "./components/admin/Group";
import Batch from "./components/admin/Batch";
import Auer from "./components/admin/Auer";
import Trainers from "./components/admin/Trainers";
import Sidebar2 from "./components/sidebar/Sidebar2";
import SAssignments from "./components/student/SAssignments";
import VSessions from "./components/student/VSessions";
import ViewSession from "./components/admin/ViewSession";
import ViewBatch from "./components/admin/ViewBatch";
import ViewAuers from "./components/admin/ViewAuers";
import ViewGroup from "./components/admin/ViewGroup";
import ViewTrainers from "./components/admin/ViewTrainers";
import LoginForm from "./components/login/LoginForm";
import Nav from "./components/login/Nav";
import LoginForm1 from "./components/login/LoginForm1";
import LoginForm3 from "./components/login/LoginForm3";
const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
     
   <Router>
    <div className="container">
      <h1>                    </h1>
      <Switch>
      
      <Route path="/admin" component={Sidebar1}></Route>
      <Route path="/student" component={Sidebar2 }/>
      
      </Switch>
      
      
     
      
      <Route path="/trainer" component={Sidebar} />
      <Switch>
      <Route path="/admin/viewbatch" component={ViewBatch}></Route>
      <Route path="/admin/viewauers" component={ViewAuers}></Route>
      <Route path="/admin/viewgroups" component={ViewGroup}/>
      <Route path="/admin/viewtrainers" component={ViewTrainers} />
      <Route path="/admin/viewsessions" component={ViewSession}></Route>
      <Route path="/admin/dashboard" component={Main}></Route>
      <Route path="/student/dashboard" component={Main}></Route>
      <Route path="/admin/sessions" component={Session} />
      <Route path="/admin/projects1" component={Projects1} />
      <Route path="/trainer/dashboard" component={Main} />
      <Route path="/admin/group" component={Group} />
      <Route path="/admin/auers" component={Auer} />
      <Route path="/admin/trainers" component={Trainers} />
      <Route path="/admin/batch" component={Batch} />
      <Route path="/trainer/projects" component={Projects} />
      <Route path="/trainer/assignments" component={Assignments} />
      <Route path="/trainer/attendance" component={Attendance} />
      <Route path="/trainer/sessions" component={ListSessions}></Route>
      <Route path="/trainer/assignmentseval" component={Assignments_eval}></Route>
      <Route path="/student/Assignments" component={SAssignments}/>
      <Route path="/student/sessions" component={VSessions} />
      <Route path="/login/admin" component={LoginForm} />
      
      <Route path="/login/trainer" component={LoginForm1} />
      <Route path="/login/students" component={LoginForm3} />
      <Route path="/" component={Nav} />
      </Switch>
    </div>
    </Router>
  
     
  );
};

export default App;