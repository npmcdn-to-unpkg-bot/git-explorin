import React, { PropTypes } from 'react'
import { UserSearch } from 'components'
import { container, heading } from './styles.scss'

function HomeContainer (props) {
  return (
    <div className={container}>
      <h1 className={heading}>{'GitExplorin\''}</h1>
      <UserSearch />
    </div>
  )
}

HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default HomeContainer
