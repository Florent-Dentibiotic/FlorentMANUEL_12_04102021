import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserInterface from './pages/UserInterface'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/user/:userId" component={UserInterface}></Route>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
