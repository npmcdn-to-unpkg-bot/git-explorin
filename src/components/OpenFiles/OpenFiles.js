import React, { PropTypes } from 'react'
import { DirectoryFile } from 'components'
import { container, openfiles } from './styles.scss'

const OpenFiles = (props) => {
  return (
    <div className={container}>
      <ul className={openfiles}>
        {
          Object.keys(props.active).map((file) => {
            return (
              <DirectoryFile
                key={file}
                file={props.active[file]}
                isActive={props.current.path === file}
                handleSetActive={props.handleSetActive}>
                <i onClick={props.handleSetInactive}></i>
              </DirectoryFile>
            )
          })
        }
      </ul>
    </div>
  )
}

OpenFiles.propTypes = {
  active: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  handleSetInactive: PropTypes.func.isRequired,
}

export default OpenFiles
