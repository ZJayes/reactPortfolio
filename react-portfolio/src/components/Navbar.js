import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"



const Navbar = () => { 
    return(
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          
                <a className="navbar-brand" href="#">Zachary Jayes</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <a className="nav-link" href="#">About Me</a>
               </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
               </li>
               <li className="nav-item">
               
                <a className="nav-link" href="#">Portfolio</a>
               </li>
        
          
             </ul>
      
          </div>
         
        </nav>
      </div>
    )
}

export default Navbar