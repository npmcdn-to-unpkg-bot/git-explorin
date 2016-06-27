import React, { PropTypes } from 'react'
import { GithubSourceFile } from 'components'
import { imgContainer, img } from './styles.scss'

const GithubImageFile = ({ source, extension, path }) => {
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
        <GithubSourceFile
          extension={extension}
          source={source}
          path={path} />
      )
}

GithubImageFile.propTypes = {
  source: PropTypes.string.isRequired,
  extension: PropTypes.string,
  path: PropTypes.string.isRequired,
}

export default GithubImageFile
