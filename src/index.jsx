import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Error from './components/Error'
import Header from './components/Header'
import DevUser from './dev/DevUser'
import DevActivity from './dev/DevActivity'
import DevActivities from './dev/DevActivities'
import DevAverageSessions from './dev/DevAverageSessions'
import DevKeyData from './dev/DevKeyData'
import DevTodayScore from './dev/DevTodayScore'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route
                    exact
                    path="/user/:id/dashboard"
                    component={Dashboard}
                ></Route>
                <Route exact path="/user/:id">
                    <DevUser />
                </Route>
                <Route exact path="/user/:id/activity">
                    <DevActivity />
                </Route>
                <Route exact path="/user/:id/activities">
                    <DevActivities />
                </Route>
                <Route exact path="/user/:id/key-data">
                    <DevKeyData />
                </Route>
                <Route exact path="/user/:id/average-sessions">
                    <DevAverageSessions />
                </Route>
                <Route exact path="/user/:id/today-score">
                    <DevTodayScore />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
