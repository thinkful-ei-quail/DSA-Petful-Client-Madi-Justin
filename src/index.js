import './index.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Root from './root/Root'
import App from './App/App'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
