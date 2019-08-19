import React from 'react'
import { Link } from 'react-router-dom'

export default class Main extends React.Component{
  render() {
    return (
      <div>
          /main/a
          <br/>
          <Link to='/main/test-id'>动态路由1</Link>
          <br/>
          <Link to='/main/456'>动态路由2</Link>
          <hr/>
          { this.props.children }
      </div>
    )
  }
}