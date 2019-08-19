import React from 'react'
import {Link} from 'react-router-dom'

export default class Info extends React.Component{
  render() {
    return (
      <div>
        Info
        动态路由的值是：{ this.props.match.params.value }
      </div>
    )
  }
}