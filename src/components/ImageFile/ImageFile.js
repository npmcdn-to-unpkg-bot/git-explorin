import React, { PropTypes } from 'react'
import { SourceFile } from 'components'
import { imgContainer, img } from './styles.scss'

const ImageFile = ({ source, extension, path }) => {
  let isImage = source.indexOf('standalone="no"') === -1
  if (extension === 'svg') source = `data:image/svg+xml;utf8,${source}`
  else source = `data:image/${extension};base64,${btoa(source)}`

  return isImage
    ? (
        <div className={imgContainer}>
          <img
            className={img}
            role='presentation'
            src={source} />
        </div>
      )
    : (
        <SourceFile
          extension={extension}
          source={source}
          path={path} />
      )
}

ImageFile.propTypes = {
  source: PropTypes.string.isRequired,
  extension: PropTypes.string,
  path: PropTypes.string.isRequired,
}

export default ImageFile
