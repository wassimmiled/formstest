import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Page d'accueil</Link>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/corporate/createforml">Formulaire</Link>
        </li>
        
      </ul>
    </div>
  );
};
export default NavBar;
