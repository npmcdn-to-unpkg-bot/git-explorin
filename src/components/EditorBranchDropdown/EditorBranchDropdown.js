import React, { PropTypes } from 'react'
import Dropdown from 'react-dropdown'
import { connect } from 'react-redux'
import './styles.scss'

const EditorBranchDropdown = (props) => {
  return (
    <Dropdown options={props.branches} value={props.params.branch} onChange={props.handleBranchChange} />
  )
}

EditorBranchDropdown.propTypes = {
  params: PropTypes.object.isRequired,
  branches: PropTypes.array.isRequired,
  handleBranchChange: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({ branches: state.Editor.branches })
  )(EditorBranchDropdown)
