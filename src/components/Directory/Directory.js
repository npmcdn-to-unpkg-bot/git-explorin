import React, { PropTypes } from 'react'
import { Folder } from 'components'
import { container, heading } from './styles.scss'

function Directory ({ files, repo }) {
  return (
    <div className={container}>
      <h1 className={heading}>{'folders'}</h1>
      <Folder files={files} isRoot={true}>
        {repo}
      </Folder>
    </div>
  )
}

Directory.propTypes = {
  files: PropTypes.object.isRequired,
  repo: PropTypes.string.isRequired,
}

export default Directory
