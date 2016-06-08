import React, { PropTypes } from 'react'
import { EditorDirectoryFile } from 'components'
import { container, openfiles } from './styles.scss'

const EditorOpenFiles = (props) => {
  return (
    <div className={container}>
      <ul className={openfiles}>
        {
          Object.keys(props.active).map((file) => {
            return (
              <EditorDirectoryFile
                key={file}
                file={props.active[file]}
                isActive={props.current.path === file}
                handleSetActive={props.handleSetActive}>
                <i onClick={props.handleSetInactive}></i>
              </EditorDirectoryFile>
            )
          })
        }
      </ul>
    </div>
  )
}

EditorOpenFiles.propTypes = {
  active: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  handleSetInactive: PropTypes.func.isRequired,
}

export default EditorOpenFiles
