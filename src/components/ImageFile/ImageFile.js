import React, { PropTypes } from 'react'
import { imgContainer, img } from './styles.scss'

const ImageFile = ({ source }) => {
  return (
    <div className={imgContainer}>
      <img
        className={img}
        role='presentation'
        src={`data:image/gif;base64,${btoa(source)}`} />
    </div>
  )
}

ImageFile.propTypes = {
  source: PropTypes.string.isRequired,
}

export default ImageFile
