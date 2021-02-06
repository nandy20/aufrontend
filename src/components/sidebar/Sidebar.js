import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Spring AU</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
      <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="/trainer/dashboard">Trainer</a>
        </div>
        
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="/trainer/attendance">Attendance</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="/trainer/sessions">Sessions</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="/trainer/projects">Projects</a>
        </div>
        
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="/trainer/assignments">Assignments</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="/trainer/assignmentseval">Assignments Evaluation</a>
        </div>
        </div>
    </div>
  );
};

export default Sidebar;