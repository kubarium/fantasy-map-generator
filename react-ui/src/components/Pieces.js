import '../styles/Pieces.css'

import {ListGroup, ListGroupItem, Panel, PanelGroup} from 'react-bootstrap'
import React, {Component} from 'react'

class Pieces extends Component {
    
    componentWillMount() {
        this
            .props
            .loadPieces()
    }
    
    
    render() {
        return (
            <PanelGroup defaultActiveKey="1" accordion className="pieces">
                <Panel header="Side Pieces" eventKey="1">
                    <ListGroup >
                        {this
                            .props
                            .pieces
                            .map((piece, index) => <ListGroupItem listItem={false} onClick={(event)=>console.log(event)} key={`piece-${index}`}><img src={`/pieces/${piece}`}/></ListGroupItem>)}
                    </ListGroup>
                </Panel>
                <Panel header="Outward" eventKey="2">Panel 2 content</Panel>
                <Panel header="Inward" eventKey="3">Panel 2 content</Panel>
            </PanelGroup>
        )
    }
}

export default Pieces