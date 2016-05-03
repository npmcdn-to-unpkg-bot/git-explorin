import React, { Component } from 'react'
import Highlight from 'react-highlight'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { container } from './styles.scss'
import * as actionCreators from '../../actions/files'
let file = ' file'
let ext = 'accesslog'
let syntax = ext + file

class Main extends Component {

  componentWillMount = () => {
    if(this.props.code === '') {
      this.props.setActiveFile('untitled')
    }
  }

  componentWillUpdate = () => {
    ext = this.props.current.split('.')[1] || 'accesslog'
    syntax = ext + file
  }

  render () {
    return (
      <div className={container} >
        <Highlight className={syntax}>
          {this.props.code}
        </Highlight>
      </div>
    )
  }

}

export default connect(
  (state) => ({ code: state.Files.code, current: state.Files.current }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(Main)