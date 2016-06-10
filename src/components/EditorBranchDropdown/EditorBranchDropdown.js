import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import { connect } from 'react-redux'
import { container, selectLabel } from './styles.scss'

const EditorBranchDropdown = (props) => {
  return (
    <Dropdown options={props.branches} value={props.params.splat} onChange={props.handleBranchChange}/>
  )
}

export default connect(
  (state) => ({ branches: state.Editor.branches })
  )(EditorBranchDropdown)