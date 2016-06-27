import React, { PropTypes } from 'react'
import Dropdown from 'react-dropdown'
import { connect } from 'react-redux'
import './styles.scss'

const EditorBranchDropdown = (props) => {
  return (
    <Dropdown
    value={props.params.branch || 'master'}
    options={props.branches}
    onChange={props.handleBranchChange} />
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
