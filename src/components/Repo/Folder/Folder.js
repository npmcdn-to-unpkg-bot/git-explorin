import React, { PropTypes } from 'react'
import { File } from 'components'
import { folder, folderActive, folderLink, folderLinkActive } from './styles.scss'

function Folder ({ files, children, isRoot }) {

  function toggleFolder ({ target }) {
    target.className = target.className === folderLink ? folderLinkActive : folderLink
    target.parentElement.className = target.parentElement.className === folder ? folderActive : folder
  }
  
  return (
    <ul className={isRoot === true ? folderActive : folder}>
      <li className={folderLink} onClick={toggleFolder}>{children}</li>
      {Object.keys(files).map((name, i) => {
        if (name === '__ref') return null
        return files[name].__ref.type === 'blob'
          ? (
              <File
                file={files[name].__ref}
                key={files[name].__ref.path} />
            )
          : (
              <li key={i}>
                <Folder files={files[name]}>
                  {name}
                </Folder>
              </li>
            )
      })}
  </ul>
  )
}

// Folder.propTypes = {
//   files: PropTypes.object.isRequired,
//   children: PropTypes.string,
// }

export default Folder
