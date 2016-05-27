import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

function UserContainer (props) {
  return (
    <div>
      User Profile
    </div>
  )
}

export default connect(
  (state) => ({ })
  // (dispatch) => (bindActionCreators())
  )(UserContainer)
