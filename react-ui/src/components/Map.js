import '../styles/Tile.css'

import React, {Component} from 'react'

import Tile from './Tile'
import className from 'classnames'

class Map extends Component {
    stylize = () => {

    }
    render() {
        const tiles = [...Array(64).keys()].map((x, x_index) => [...Array(64).keys()].map((y, y_index) => (
            <li
                className={className({
                tile: true,
                [`tile-${x_index}-${y_index}`]: true
            })}
                key={`${x_index}-${y_index}`}>
                <span className="tile-label">{`${x_index}-${y_index}`}</span>
                <Tile/>
            </li>

        )))
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