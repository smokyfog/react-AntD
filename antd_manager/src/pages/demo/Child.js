import React from 'react'

export default class Child extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentWillMount() {
      console.log('will mount')
  }
  componentDidMount() {
      console.log('did mount')
  }
  componentWillReceiveProps(newProps) {
      console.log('will props', newProps)
  }
  shouldComponentUpdate() {
      console.log('should updata')
      return true
  }
  componentDidUpdate() {
      console.log('will update')
  }
  componentDidUpdate() {
      console.log('didupdate')
  }
  render() {
      return (
          <div>
              <p>这是子组件的生命周期</p>
              <p>{ this.props.name }</p>
          </div>
      )
  }
}