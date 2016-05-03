import React, { Component, PropTypes } from 'react'
import Highlight from 'react-highlight'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { container } from './styles.scss'
import * as actionCreators from '../../actions/files'

var syntax = ''
var ext = ''

class Main extends Component {
  componentWillMount = () => {
    if (this.props.code === '') {
      this.props.setActiveFile('untitled')
      syntax = 'accesslog'
    }
  }

  componentWillReceiveProps = (nextProps) => {
    ext = nextProps.current.split('.')[1] || 'accesslog'
    if (ext === 'js' || ext === 'jsx') ext = 'jsx scala'
    if (ext === 'txt') ext = 'html'
    syntax = ext
  }

  render () {
    return (
      <div className={container} id={'code'}>
        <Highlight className={syntax}>
          {this.props.code}
        </Highlight>
      </div>
    )
  }

}

Main.propTypes = {
  code: PropTypes.string.isRequired,
  setActiveFile: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
}

export default connect(
  (state) => ({ code: state.Files.code, current: state.Files.current }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(Main)
