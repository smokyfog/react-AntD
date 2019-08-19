import React from 'react'
import { HashRouter as Router, Route, Link, Switch  } from 'react-router-dom'
import About from './about'
import Main from './main'
import Topics from './topic'
import Home from './Home'

export default class extends React.Component{
  render() {
    return (
      <div>
        <Router>
          <Home>
            <Route path='/main' render={() => 
              <Main>
                <Route path='/main/a' component={ About }></Route>
              </Main>
            }></Route>
            <Route path='/about' component={ About }></Route>
            <Route path='/topics' component={ Topics }></Route>
          </Home>
        </Router>
      </div>
    )
  }
}