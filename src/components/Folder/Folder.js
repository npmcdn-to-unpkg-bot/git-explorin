import React, { PropTypes } from 'react'
import { File } from 'components'
import { folder, folderActive, folderLink, folderLinkActive } from './styles.scss'

function Folder (props) {
  function toggleFolder (e) {
    e.target.className = e.target.className === folderLink ? folderLinkActive : folderLink
    e.target.parentElement.className = e.target.parentElement.className === folder ? folderActive : folder
  }

  return (
    <ul className={folder}>
      <li
        className={folderLink}
        onClick={toggleFolder}>{props.children}</li>
      {Object.keys(props.files).map((filename, prop) => {
        return typeof props.files[filename] === 'string'
          ? (
              <File
                filename={filename}
                key={prop} />
            )
          : (
              <li key={prop}>
                <Folder files={props.files[filename]}>
                  {filename}
                </Folder>
              </li>
            )
      })}
  </ul>
  )
}

Folder.propTypes = {
  files: PropTypes.object.isRequired,
  children: PropTypes.string,
}

export default Folder
