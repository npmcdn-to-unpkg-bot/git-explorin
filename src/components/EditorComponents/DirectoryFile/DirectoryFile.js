import React, { PropTypes } from 'react'
import { file, active } from './styles.scss'

const DirectoryFile = (props) => {
  let status = props.isActive ? active : file
  let filename = props.file.path.split('/')
  return (
    <li
      className={status}
      onClick={props.handleSetActive}
      data-file={props.file.path}>
      {props.children || ''}
      {filename[filename.length - 1]}
    </li>
  )
}

DirectoryFile.propTypes = {
  file: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  children: PropTypes.element,
}

export default DirectoryFile
