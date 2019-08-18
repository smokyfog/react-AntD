import React from 'react'
import Child from './Child'
import { Button, Input } from 'antd'
import './index.less'


export default class Life extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // 第一种绑事件的方法
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // 第二种绑事件的方法
  handleClick() {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div className='content'>
        <p>react生命周期</p>
        <Input></Input>
        <Button onClick={this.handleAdd}>点击一下</Button>
        <button onClick={this.handleAdd}>点击一下</button>
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <p>{ this.state.count }</p>
        <Child name={this.state.count}></Child>
      </div>
    )
  }
}