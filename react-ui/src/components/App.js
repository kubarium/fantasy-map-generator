import '../styles/App.css'

import { Col, Grid, Navbar, Row } from 'react-bootstrap'
import React, { Component } from 'react'

import Map from '../containers/Map'
import Pieces from '../containers/Pieces'

class App extends Component {
  render() {
    return (
      <article>
        <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text>
        Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
      </Navbar.Text>
      <Navbar.Text pullRight>
        Have a great day!
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
      <Grid>
        <Row>
          <Col sm={4}>
            <Pieces/>
          </Col>
          <Col sm={8} md={8}><Map/></Col>
        </Row>
      </Grid>
      </article>
    )
  }
}

export default App;
