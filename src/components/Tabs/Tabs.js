import React, { PropTypes } from 'react'
import { container, tabs, tab, active } from './styles.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/files'

function Tabs (props) {
  function handleSetActive (e) {
    e.preventDefault()
    props.setActiveFile(e.target.getAttribute('data-filename'))
  }

  function setFileInactive (e) {
    e.stopPropagation()
    props.setFileInactive(e.target.getAttribute('data-filename'))
  }

  return (
    <div className={container}>
      <ul className={tabs}>
        {props.active.map((file) => {
          let currentFile = file === props.current ? active : tab
          return (
            <li
              className={currentFile}
              key={file}
              onClick={handleSetActive}
              data-filename={file}>{file}<i className='ion-ios-close-empty' onClick={setFileInactive} data-filename={file}></i>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Tabs.propTypes = {
  setFileInactive: PropTypes.func.isRequired,
  active: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
}

export default connect(
  (state) => ({
    active: state.Files.active,
    current: state.Files.current,
  }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(Tabs)
