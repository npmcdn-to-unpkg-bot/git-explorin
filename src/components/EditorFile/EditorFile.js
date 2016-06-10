import React, { PropTypes } from 'react'
import { SourceFile, ImageFile } from 'components'
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
              <SourceFile
                extension={extension}
                source={source}
                path={path} />
            )
          : (
              <ImageFile
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
  fileLoading: PropTypes.bool.isRequired,
}

export default EditorFile
