import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import { container, selectLabel } from './styles.scss'
import axios from 'axios'

class EditorBranchDropdown extends Component {
  constructor () {
    super()

    this.state = {
      branches: []
    }
  }

  componentDidMount = () => {
    axios(`https://api.github.com/repos/${this.props.params.username}/${this.props.params.repo}/branches`)
      .then((res) => this.setState({
        ...this.state,
        branches: res.data.map((branch) => branch.name)
      }))
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <Dropdown options={this.state.branches} value={this.props.params.splat} onChange={this.props.handleBranchChange}/>
    )
  }
}

export default EditorBranchDropdown