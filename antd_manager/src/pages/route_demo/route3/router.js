import React from 'react'
import { HashRouter as Router, Route, Switch  } from 'react-router-dom'
import Info from './info'
import About from './about'
import Main from './main'
import Topics from './topic'
import Home from './Home'
import NoMatch from './nomatch'

export default class Root extends React.Component{
  render() {
    return (
      <div>
        <Router>
          <Home>
            <Switch>
              <Route path='/main' render={() => 
                <Main>
                  <Route path='/main/:value' component={ Info }></Route>  {/* 动态路由 */}
                </Main>
              }></Route>
              <Route path='/about' render={() => 
                <About>
                  <Route path='/about/a' component={ Topics }></Route>    {/* 嵌套路由 */}
                </About>
              }></Route>
              <Route path='/topics' component={ Topics }></Route>
              <Route component={NoMatch}></Route>
            </Switch>
          </Home>
        </Router>
      </div>
    )
  }
}