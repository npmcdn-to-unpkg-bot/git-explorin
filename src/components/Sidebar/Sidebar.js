import React, { PropTypes } from 'react'
import { Directory, OpenFiles } from 'components'
import { container, heading } from './styles.scss'

const Sidebar = (props) => {
  return (
    <div className={container}>
      <h1 className={heading}>{'open files'}</h1>
      <OpenFiles
        active={props.active}
        current={props.current}
        handleSetActive={props.handleSetActive}
        handleSetInactive={props.handleSetInactive} />
      <h1 className={heading}>{'folders'}</h1>
      <Directory
        repo={props.repo}
        files={props.files}
        current={props.current}
        handleSetActive={props.handleSetActive} />
    </div>
  )
}

Sidebar.propTypes = {
  repo: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired,
  active: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  handleSetInactive: PropTypes.func.isRequired,
}

export default Sidebar
