import React, { PropTypes } from 'react'
import { header, basic, name } from './styles.scss'

function ProfileHeader (props) {
  return (
    <div className={header}>

      <div className={basic}>
        <p className={name}>{props.name || ''}</p>
        <p>{props.loading ? '' : `@${props.login}`}</p>
      </div>
    </div>
  )
}

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default ProfileHeader
