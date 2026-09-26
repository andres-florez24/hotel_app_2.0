import { NavLink } from "react-router-dom";

export default function Menu(props) {
  return (
    <div className="w3-bar w3-white w3-large">
      
      <span className="w3-bar-item">{props.data}</span>

      <NavLink to="/" className="w3-bar-item w3-button w3-mobile">
        <i className="fa fa-home w3-margin-right"></i>Home
      </NavLink>
      <NavLink to="/Rooms" className="w3-bar-item w3-button w3-mobile">Rooms</NavLink>
      <NavLink to="/About" className="w3-bar-item w3-button w3-mobile">About</NavLink>
      <NavLink to="/Ours" className="w3-bar-item w3-button w3-mobile">Ours</NavLink>
      <NavLink to="/Contact" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Book Now</NavLink>
    </div>
  );
}