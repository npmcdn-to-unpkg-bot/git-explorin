import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

export default connect(
  (state) => ({})
  )(HomeContainer)
