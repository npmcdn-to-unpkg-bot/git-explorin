import React, { PropTypes } from 'react'
import { EditorDirectoryFolder } from 'components'
import { container } from './styles.scss'

const EditorDirectory = (props) => {
  return (
    <div className={container}>
      <EditorDirectoryFolder
        isRoot={true}
        files={props.files}
        params={props.params}
        current={props.current}
        handleSetActive={props.handleSetActive}>
        {props.params.repo}
      </EditorDirectoryFolder>
    </div>
  )
}

EditorDirectory.propTypes = {
  files: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
}

export default EditorDirectory
