import React, { PropTypes } from 'react'
import { SourceFile, ImageFile } from 'components'
import { container, loading, loaded, loader } from './styles.scss'
const exts = ['png', 'jpeg', 'svg', 'gif', 'tif']

const File = ({ fileLoading, current: { extension, source, path } }) => {
  return (
    <div className={container}>
      <div className={`${loader} ${fileLoading ? loaded : loading}`}>
        {'Loading...'}
      </div>
      <div className={`${fileLoading ? loading : loaded}`}>
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
                source={source} />
            )
        }
      </div>
    </div>
  )
}

File.propTypes = {
  current: PropTypes.object.isRequired,
  fileLoading: PropTypes.bool.isRequired,
}

export default File
