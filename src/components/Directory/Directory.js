import React, { PropTypes } from 'react'
import { Folder } from 'components'
import { container, heading } from './styles.scss'

function Directory (props) {
  return (
    <div className={container}>
      <h1 className={heading}>{'folders'}</h1>
      <Folder files={props.files}>
        {'isaiahgrey'}
      </Folder>
    </div>
  )
}

Directory.propTypes = {
  files: PropTypes.object.isRequired,
}

export default Directory
