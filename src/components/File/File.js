import React, { PropTypes } from 'react'
import { file, active } from './styles.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'actions/files'

function File (props) {
  function activate (e) {
    e.preventDefault()
    if (props.filename.split('.')[1] === 'pdf') {
      window.open(`${window.location.origin}/resume`)
    } else {
      props.setActiveFile(props.filename)
    }
  }
  let fileStatus = props.current === props.filename ? active : file
  return props.children === undefined
    ? <li className={fileStatus} onClick={activate}>{props.filename}</li>
    : <li className={fileStatus} onClick={activate}>{props.children}{props.filename}</li>
}

File.propTypes = {
  setActiveFile: PropTypes.func.isRequired,
  filename: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export default connect(
  (state) => ({ current: state.Files.current }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(File)
