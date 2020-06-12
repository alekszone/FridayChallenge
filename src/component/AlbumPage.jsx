import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import {Row } from 'react-bootstrap'
class AlbumPage extends React.Component{
render(){
return(
<div className="container-fluid home-content body">
      <Row className=" w-100 ml-0 mr-0">
<NavBar />
<Footer />
</Row>
</div>


)
}
}

export default AlbumPage