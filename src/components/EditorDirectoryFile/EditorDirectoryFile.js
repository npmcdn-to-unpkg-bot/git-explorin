import React, { PropTypes } from 'react'
import { file, active } from './styles.scss'

const EditorDirectoryFile = (props) => {
  let status = props.isActive ? active : file
  let filename = props.file.path.split('/')
  return (
    <li
      className={status}
      data-file={props.file.path}
      onClick={props.handleSetActive}>
      {props.children || ''}
      {filename[filename.length - 1]}
    </li>
  )
}

EditorDirectoryFile.propTypes = {
  file: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  children: PropTypes.element,
}

export default EditorDirectoryFile
