import { Link } from "react-router-dom";
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        
        <div className="logo-home">
          <h1>
            <Link 
              to="/HomeLogin" 
              className="logo-link"
              style={{ 
                color: 'white', 
                marginLeft: '20%',
                display: 'inline-block', 
                fontSize: 55
              }}
            >
              JiraJira
            </Link>
          </h1>
        </div>

        
        <Link 
          to="/Projects" 
          className="myproject-button"
        >
          MyProject
        </Link>
      </div>
    </div>
  );
}