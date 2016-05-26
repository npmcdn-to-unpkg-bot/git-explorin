import React, { PropTypes } from 'react'
import { File } from 'components'
import { folder, folderActive, folderLink, folderLinkActive } from './styles.scss'

function Folder (props) {
  function toggleFolder (e) {
    e.target.className = e.target.className === folderLink ? folderLinkActive : folderLink
    e.target.parentElement.className = e.target.parentElement.className === folder ? folderActive : folder
  }

  return (
    <ul className={props.isRoot === true ? folderActive : folder}>
      <li className={folderLink} onClick={toggleFolder}>{props.children}</li>
      {
        Object.keys(props.files).map((name, i) => {
          if (name === '__ref') return null
          return props.files[name].__ref.type === 'blob'
            ? (
                <File
                  file={props.files[name].__ref}
                  key={props.files[name].__ref.path} />
              )
            : (
                <li key={i}>
                  <Folder files={props.files[name]}>
                    {name}
                  </Folder>
                </li>
              )
        })
      }
  </ul>
  )
}

Folder.propTypes = {
  files: PropTypes.object.isRequired,
  isRoot: PropTypes.bool.isRequired,
  children: PropTypes.string,
}

export default Folder
