import '../styles/Tile.css'

import React, {Component} from 'react'

import Tile from '../containers/Tile'
import className from 'classnames'

class Map extends Component {
    stylize = () => {

    }
    render() {
        //const tiles = [...Array(64).keys()].map((x, x_index) => [...Array(64).keys()].map((y, y_index) => (
        const tiles = this.props.tiles.map(tile => (
            
            <li
                className={className({
                tile: true,
                [`tile-${tile.id}`]: true,
                selected:tile.selected
            })}
                key={`${tile.id}`}>
                <Tile id={`${tile.id}`} layers={tile.layers}/>
                <span className="tile-label">{`${tile.id}`}</span>
            </li>

        ))
        return (
            <div className="map">
                <ul>
                    {tiles}
                </ul>
            </div>
        )
    }
}

export default Map