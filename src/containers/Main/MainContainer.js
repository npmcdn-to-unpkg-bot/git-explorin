import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loading, loaded } from './styles.scss'

function MainContainer (props) {
  let status = props.loading ? loading : loaded
  return (
    <div className={status}>
      {props.children}
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default connect(
  (state) => ({ loading: state.Files.loading })
  )(MainContainer)
