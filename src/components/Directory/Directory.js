import React, { PropTypes } from 'react'
import { DirectoryFolder } from 'components'
import { container } from './styles.scss'

const Directory = (props) => {
  return (
    <div className={container}>
      <DirectoryFolder
        isRoot={true}
        current={props.current}
        files={props.files}
        handleSetActive={props.handleSetActive}>
        {props.repo}
      </DirectoryFolder>
    </div>
  )
}

Directory.propTypes = {
  files: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  repo: PropTypes.string.isRequired,
}

export default Directory
