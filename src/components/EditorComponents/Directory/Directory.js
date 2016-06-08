import React, { PropTypes } from 'react'
import { DirectoryFolder } from 'components'
import { container } from './styles.scss'

const Directory = (props) => {
  return (
    <div className={container}>
      <DirectoryFolder
        isRoot={true}
        files={props.files}
        params={props.params}
        current={props.current}
        handleSetActive={props.handleSetActive}>
        {props.params.repo}
      </DirectoryFolder>
    </div>
  )
}

Directory.propTypes = {
  files: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
}

export default Directory
