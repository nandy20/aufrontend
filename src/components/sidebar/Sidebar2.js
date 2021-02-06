import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar2 = ({ sidebarOpen, closeSidebar }) => {
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
          <a href="/student/dashboard">Student</a>
        </div>
        
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="/student/Assignments">Assignments</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="/student/sessions">View sessions</a>
        </div>
        
        
       
        
        
        </div>
    </div>
  );
};

export default Sidebar2;