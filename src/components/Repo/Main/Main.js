import React, { Component, PropTypes } from 'react'
import Highlight from 'react-highlight'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { container } from './styles.scss'
import * as actionCreators from 'actions/files'

let syntax = ''
let filepath = ''

class Main extends Component {

  componentWillReceiveProps = (nextProps) => {
    filepath = nextProps.current.path.split('.')
    if (filepath.length < 2) syntax = 'accesslog'
    else syntax = filepath[filepath.length - 1]
  }

  render () {
    return (
      <div className={container} id={'code'}>
        <Highlight className={syntax}>
          {this.props.current.source}
        </Highlight>
      </div>
    )
  }
}

Main.propTypes = {
  current: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({ current: state.Files.current }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(Main)
