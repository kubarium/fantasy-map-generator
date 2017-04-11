import React, { Component } from 'react'

class Tile extends Component {
    render() {
        return (
            <div className="layers" onClick={(event)=>this.props.selectTile(this.props.id)}>
              { this.props.layers.map((layer,index) => (<img key={index} src={ `/pieces/${layer}` } />)) }
            </div>
        )
    }
}

export default Tile