import React, {Component} from 'react'
import {Col,Row} from 'react-bootstrap'
import TrendingNav from './TrendingNav'

class Trending extends Component {
      render(){
    return(
    <Col sm={9} md={9} lg={10} className=" pb-sm-4" >
            <TrendingNav /> 
               
               
                <Row>
              <Col xs={10}></Col>
            </Row>
            <Row className=" ml-5">
              <Col xs={10}>
                <div id="rock">
                  <h2>Eminem</h2>
                  <Row
                    xs={1} sm={2} lg={3} xl={4}
                    className = " imgLinks py-3"
                    id="Eminem"
                  ></Row>
                </div>
              </Col>
            </Row>
            <Row className=" ml-5">
              <Col lg={10}>
                <div id="rock">
                  <h2>Metallica</h2>
                  <Row  xs={1} sm={2} lg={3} xl={4}
                    className=" imgLinks py-3"
                    id="Metallica"
                  ></Row>
                </div>
              </Col>
            </Row>
            <Row className=" ml-5">
              <Col lg={10}>
                <div id="rock">
                  <h2>Behemoth</h2>
                  <Row  xs={1} sm={2} lg={3} xl={4}
                    className=" imgLinks py-3"
                    id="Behemoth"
                  ></Row>
                </div>
              </Col>
            </Row>
         
  
        
      </Col>




    )
    }
}

export default Trending
