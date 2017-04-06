import '../styles/App.css'

import { Col, Grid, Row } from 'react-bootstrap'
import React, { Component } from 'react'

import Map from './Map'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
      <Grid>
        <Row>
          <Col sm={4}>
          
          </Col>
          <Col sm={8} md={8}><Map/></Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
