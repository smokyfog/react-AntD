import React from 'react'
import { Link } from 'react-router-dom'

export default class About extends React.Component{
  render() {
    return (
      <div>
          /about/a
          <br/>
          <Link to='/about/a'>嵌套路由</Link>
          <hr/>
          { this.props.children }
      </div>
    )
  }
}