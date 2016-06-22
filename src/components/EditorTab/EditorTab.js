import React, { PropTypes } from 'react'
import { active, tab, close } from './styles.scss'

const EditorTab = (props) => {
  return (
    <li data-file={props.path}
      onClick={props.handleSetActive}
      className={props.isActive ? active : tab}>
      {props.filename}
      <i className={close} onClick={props.handleSetInactive}></i>
    </li>
  )
}

EditorTab.propTypes = {
  handleSetActive: PropTypes.func.isRequired,
  handleSetInactive: PropTypes.func.isRequired,
  filename: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
}

export default EditorTab
