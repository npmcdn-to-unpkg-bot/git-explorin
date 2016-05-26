import React, { PropTypes } from 'react'
import { File } from 'components'
import { container, heading, openfiles } from './styles.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'actions/files'

function OpenFiles (props) {

  function setFileInactive (file, e) {
    e.stopPropagation()
    props.setInactive(file)
  }

  return (
    <div className={container}>
      <h1 className={heading}>{'open files'}</h1>
      <ul className={openfiles}>
        {Object.keys(props.active).map((file) => {
          return (
            <File key={file} file={props.active[file]}>
              <i onClick={setFileInactive.bind(null, props.active[file])}></i>
            </File>
          )
        })}
      </ul>
    </div>
  )
}

// OpenFiles.propTypes = {
//   active: PropTypes.array.isRequired,
//   setFileInactive: PropTypes.func.isRequired,
// }

export default connect(
  (state) => ({ active: state.Files.active }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(OpenFiles)
