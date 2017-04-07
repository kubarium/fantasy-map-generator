import '../styles/Tile.css'

import React, {Component} from 'react'

import className from 'classnames'

class Map extends Component {
    render() {
        const tiles = [...Array(64).keys()].map((x, x_index) => [...Array(64).keys()].map((y, y_index) => (
            <li
                className={className({
                tile: true,
                [`tile-${x_index}-${y_index}`]: true
            })}
                key={`${x_index}-${y_index}`}>
                <span className="tile-label">{`${x_index}-${y_index}`}</span>
                <div className="layers">
                <img src={`/pieces/island-${x_index}.png`} width="64" height="64" />

                </div>
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