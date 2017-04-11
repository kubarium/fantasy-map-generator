import './styles/index.css'

import { applyMiddleware, createStore } from 'redux'

import App from './components/App'
import InitialState from './InitialState.json'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reducers from './Reducers'
import thunkMiddleware from 'redux-thunk'

const store = createStore(reducers, InitialState, applyMiddleware(thunkMiddleware))

window.store = store

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
