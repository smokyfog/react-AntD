import React from 'react'
import { HashRouter as Router, Route, Link, Switch  } from 'react-router-dom'
import About from './about'
import Main from './main'
import Topics from './topic'

export default class extends React.Component{
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact={true} path='/' component={ Main }></Route>
              <Route path='/about' component={ About }></Route>
              <Route path='/topics' component={ Topics }></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}