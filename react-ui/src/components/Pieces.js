import { Panel, PanelGroup, ListGroup, ListGroupItem } from 'react-bootstrap'
import React, { Component } from 'react'

class Pieces extends Component {
    render() {
        return (
            <PanelGroup defaultActiveKey="1" accordion>
              <Panel header="Side Pieces" eventKey="1"><ListGroup><ListGroupItem><img src={}/></ListGroupItem></ListGroup></Panel>
              <Panel header="Outward" eventKey="2">Panel 2 content</Panel>
              <Panel header="Inward" eventKey="3">Panel 2 content</Panel>
            </PanelGroup>
        )
    }
}

export default Pieces