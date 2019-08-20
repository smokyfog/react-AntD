import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch'
import Modals from './pages/ui/modals'
import loadings from './pages/ui/loadings'
import carousel from './pages/ui/carousel'
import gallery from './pages/ui/gallery'
import messages  from './pages/ui/messages'
import notification from './pages/ui/notice'
import tabs from './pages/ui/tabs'
import login from './pages/form/login'
import register from './pages/form/register'
import basic from './pages/table/basicTable'
import high from './pages/table/highTable'



export default class IRouter extends React.Component{
  render() {
    return (
      <HashRouter>
        <App>
          <Route path='/login' component={ Login } />
          <Route path='/admin' render={() =>
            <Admin>
              <Switch>
                <Route path='/admin/ui/buttons' component={ Buttons } />
                <Route path='/admin/ui/modals' component={ Modals } />
                <Route path='/admin/ui/loadings' component={ loadings } />
                <Route path='/admin/ui/carousel' component={ carousel } />
                <Route path='/admin/ui/gallery' component={ gallery } />
                <Route path='/admin/ui/messages' component={ messages } />
                <Route path='/admin/ui/notification' component={ notification } />
                <Route path='/admin/ui/tabs' component={ tabs } />
                <Route path='/admin/form/login' component={ login } />
                <Route path='/admin/form/reg' component={ register } />
                <Route path='/admin/table/basic' component={ basic } />
                <Route path='/admin/table/high' component={ high } />
                <Route component={ NoMatch } />
              </Switch>
            </Admin>
          } />
          <Route path='/order/detail' component={ Login } />
        </App>
      </HashRouter>
    )
  }
}