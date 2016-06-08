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
    let credentials = 'client_id=fb454ec74924b5f8fbe5&client_secret=ec40732e8b66dff25332ba22b72d0b9ad445f80c'

    axios(`https://api.github.com/repos/${this.props.params.username}/${this.props.params.repo}/branches?${credentials}`)
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