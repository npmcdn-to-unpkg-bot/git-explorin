import React, { PropTypes } from 'react'
import { file, active } from './styles.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'actions/files'

function File (props) {
  function activate (e) {
    props.setActive(props.file)
  }

  let fileStatus = props.current.path === props.file.path ? active : file
  let filename = props.file.path.split('/')

  return props.children === undefined
    ? <li className={fileStatus} onClick={activate}>{filename[filename.length - 1]}</li>
    : <li className={fileStatus} onClick={activate}>{props.children}{filename[filename.length - 1]}</li>
}

File.propTypes = {
  setActive: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  children: PropTypes.element,
}

export default connect(
  (state) => ({ current: state.Files.current }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(File)
