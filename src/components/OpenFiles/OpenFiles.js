import React, { Component, PropTypes } from 'react'
import { File } from 'components'
import { container, heading, openfiles } from './styles.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { EditorActionCreators } from 'actions'

class OpenFiles extends Component {

  setFileInactive = (e) => {
    e.stopPropagation()
    this.props.setInactive(this.props.active[e.target.getAttribute('data-file')])
  }

  render () {
    return (
      <div className={container}>
        <h1 className={heading}>{'open files'}</h1>
        <ul className={openfiles}>
          {
            Object.keys(this.props.active).map((file) => {
              return (
                <File key={file} file={this.props.active[file]} >
                  <i onClick={this.setFileInactive} data-file={file}></i>
                </File>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

OpenFiles.propTypes = {
  active: PropTypes.object.isRequired,
  setInactive: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({ active: state.Files.active }),
  (dispatch) => (bindActionCreators(EditorActionCreators, dispatch))
  )(OpenFiles)
