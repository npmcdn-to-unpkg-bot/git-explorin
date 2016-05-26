import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

function MainContainer (props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
}

export default connect(
  (state) => ({ })
  )(MainContainer)
