import React, { PropTypes } from 'react'
import { GithubSourceFile, GithubImageFile } from 'components'
import { container, loading, loaded, loader, spin } from './styles.scss'

const exts = ['png', 'jpeg', 'svg', 'gif', 'tif', 'ico']

const EditorFile = ({ fileLoading, size, current: { extension, source, path } }) => {
  return (
    <div style={{maxWidth: size.secondary, width: size.secondary, minWidth: '100%'}} className={container}>
      <div className={`${loader} ${spin} ${fileLoading ? loading : loaded}`}>
        {'Loading...'}
      </div>
      <div className={`${fileLoading ? loaded : loading}`}>
        {
          exts.indexOf(extension) < 0
          ? (
              <GithubSourceFile
                extension={extension}
                source={source}
                path={path} />
            )
          : (
              <GithubImageFile
                extension={extension}
                source={source}
                path={path} />
            )
        }
      </div>
    </div>
  )
}

EditorFile.propTypes = {
  current: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
  fileLoading: PropTypes.bool.isRequired,
}

export default EditorFile
