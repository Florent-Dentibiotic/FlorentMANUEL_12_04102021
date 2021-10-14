import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserInterface from './pages/UserInterface'
import Error from './components/Error'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/user/:userId" component={UserInterface}></Route>
            <Route>
                <Error />
            </Route>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
