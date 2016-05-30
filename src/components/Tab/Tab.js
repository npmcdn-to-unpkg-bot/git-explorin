import React, { PropTypes } from 'react'
import { active, tab } from './styles.scss'

const Tab = (props) => {
  return (
    <li
      data-file={props.path}
      onClick={props.handleSetActive}
      className={props.isActive ? active : tab}>
      {props.filename}
      <i className='ion-ios-close-empty' onClick={props.handleSetInactive}></i>
    </li>
  )
}

Tab.propTypes = {
  handleSetActive: PropTypes.func.isRequired,
  handleSetInactive: PropTypes.func.isRequired,
  filename: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
}

export default Tab
