import React, { Component, PropTypes } from 'react'
import { container, tabs, tab, active } from './styles.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'actions/files'

class Tabs extends Component {

  handleSetActive = (e) => {
    e.stopPropagation()
    this.props.setActive(this.props.active[e.target.getAttribute('data-file')])
  }

  handleSetInactive = (e) => {
    e.stopPropagation()
    this.props.setInactive(this.props.active[e.target.parentNode.getAttribute('data-file')])
  }

  render () {
    return (
      <div className={container}>
        <ul className={tabs}>
          {
            Object.keys(this.props.active).map((file) => {
              let filename = file.split('/')
              return (
                <li
                  key={file}
                  onClick={this.handleSetActive}
                  data-file={file}
                  className={file === this.props.current.path ? active : tab}>
                  {filename[filename.length - 1]}
                  <i
                    className='ion-ios-close-empty'
                    onClick={this.handleSetInactive}></i>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

Tabs.propTypes = {
  setInactive: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  active: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({
    active: state.Files.active,
    current: state.Files.current,
  }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(Tabs)
