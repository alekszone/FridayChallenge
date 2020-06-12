import React from 'react'
import {Navbar , Col} from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
const NavBar = () =>{
return(
    <Navbar xs lg={2} md={3} sm={3} className=" d-none d-md-block  sidebar">
    <div className="sidebar-sticky d-flex pl-0 flex-column justify-content-between" style={{position : "sticky", top: "0", height : "97vh", alignContent : "space-between"}}>
      
     <Col>
        <ul className = " nav flex-column justify-content-center  mb-3  mb-auto">
            <li className ="nav-item mt-2  w-100 justify-content-center align-items-center">
            <i className ="fa fa-spotify" style = {{fontSize : "35px"}}>Spotify</i>
            </li>
            <li className ="mt-3  nav-item active"><a href="home.html"><i className="fa fa-home mr-3"></i>Home</a></li>
            <li className ="mt-3  nav-item"><a href="search.html"><i class="fa fa-search mr-3"></i>Search</a></li>
            <li className ="mt-3  nav-item"><a href="playlist.html"><i class="fa fa-book  mr-3"></i>Your Library</a></li>
          </ul>
     </Col>
   <Col className=" d-flex flex-column w-100">
          <ul className="nav flex-column justify-content-center align-items-center w-100 mt-auto pb-5">
            <li className="nav-item w-100 mb-3">
                <button type="button" class="btn btn-light  w-100 rounded-pill" style={{fontWweight:"500"}}>SIGN UP</button>
            </li>
            <li className="nav-item w-100 mb-2">
               <button type="button" onclick="goToLogin()" className="btn btn-secondary w-100 rounded-pill" style={{backgroundColor :" black", color : "whitesmoke", border : " 1px solid white", fontWeight :" 500"}}>LOGIN</button>
            </li>
            <li className="nav-item">
              <small className="mr-2">Cookie</small>|<small className="ml-2">Privacy Policy</small>
            </li>
           
          </ul>
   </Col>
      </div>
        
  </Navbar>
)
}
export default NavBar

