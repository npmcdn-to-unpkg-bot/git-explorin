import React, { PropTypes } from 'react'
import { File } from 'components'
import { container, heading } from './styles.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/files'

function OpenFiles (props) {
  function setFileInactive (e) {
    e.stopPropagation()
    props.setFileInactive(e.target.getAttribute('data-filename'))
  }
  return (
    <div className={container}>
      <h1 className={heading}>{'open files'}</h1>
      <ul>
        {props.active.map((filename) => {
          return (
            <File key={filename} filename={filename}>
              <i onClick={setFileInactive} data-filename={filename}></i>
            </File>
          )
        })}
      </ul>
    </div>
  )
}

OpenFiles.propTypes = {
  active: PropTypes.array.isRequired,
  setFileInactive: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({ active: state.Files.active }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(OpenFiles)
