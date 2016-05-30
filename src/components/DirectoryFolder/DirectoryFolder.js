import React, { PropTypes } from 'react'
import { DirectoryFile } from 'components'
import { folder, folderActive, folderLink, folderLinkActive } from './styles.scss'

const DirectoryFolder = (props) => {
  function toggleFolder (e) {
    e.target.className = e.target.className === folderLink ? folderLinkActive : folderLink
    e.target.parentElement.className = e.target.parentElement.className === folder ? folderActive : folder
  }

  return (
    <ul className={props.isRoot === true ? folderActive : folder}>
      <li className={props.isRoot === true ? folderLinkActive : folderLink} onClick={toggleFolder}>{props.children}</li>
      {
        Object.keys(props.files).map((name, i) => {
          if (name === '__ref') return null
          return props.files[name].__ref.type === 'blob'
            ? (
                <DirectoryFile
                  file={props.files[name].__ref}
                  key={props.files[name].__ref.path}
                  isActive={props.current.path === name}
                  handleSetActive={props.handleSetActive} />
              )
            : (
                <li key={i}>
                  <DirectoryFolder
                    files={props.files[name]}
                    current={props.current}
                    handleSetActive={props.handleSetActive}>
                    {name}
                  </DirectoryFolder>
                </li>
              )
        })
      }
  </ul>
  )
}

DirectoryFolder.propTypes = {
  files: PropTypes.object.isRequired,
  isRoot: PropTypes.bool,
  children: PropTypes.string,
  current: PropTypes.object.isRequired,
  handleSetActive: PropTypes.func.isRequired,
}

export default DirectoryFolder
