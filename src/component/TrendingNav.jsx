import React from 'react'
import {Button,Nav } from 'react-bootstrap'
const NavBar =() =>{
return (
    <Nav className="navbar navbar-expand-lg navbar-light   pt-3 mb-3">
                 
    <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </Button>
  
   <div className="d-flex align-items-center m-auto">
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav m-auto ">
            <li className="nav-item active mr-3">
              <a className="nav-link bolder" href="#">Trending <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link bolder" href="#">Podcast</a>
            </li>
           
            <li className="nav-item mr-3">
              <a className="nav-link bolder" href="#" >Moods and genres</a>
            </li>
            <li className="nav-item mr-3">
                <a className="nav-link bolder" href="#" >New Releases</a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link bolder" href="#" >Discover</a>
              </li>
          </ul>
         
        </div>
   </div>
  </Nav>



)



}

export default NavBar
