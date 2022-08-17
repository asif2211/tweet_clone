import './style.css'
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="wrapper">
      <ul>
        <li>
        <Link to="/" className="active"> 
            Home
        
          </Link>
         
        </li>
        <li>
        <Link to="/timeLine" className="active"> 
            TimeLine
        
          </Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
};
export default Menubar;
