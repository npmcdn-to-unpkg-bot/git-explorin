import React, { PropTypes } from 'react'
import { container, tabs, tab, active } from './styles.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'actions/files'

function Tabs (props) {
  function handleSetActive (file, e) {
    e.stopPropagation()
    props.setActive(file)
  }

  function handleSetInactive (file, e) {
    e.stopPropagation()
    props.setInactive(file)
  }

  return (
    <div className={container}>
      <ul className={tabs}>
        {Object.keys(props.active).map((file) => {
          let filename = file.split('/')
          return (
            <li
              key={file}
              onClick={handleSetActive.bind(null, props.active[file])}
              className={file === props.current.path ? active : tab}>
              {filename[filename.length - 1]}
              <i
                className='ion-ios-close-empty'
                onClick={handleSetInactive.bind(null, props.active[file])}></i>
            </li>
          )
        })}
      </ul>
    </div>
  )
}



// Tabs.propTypes = {
//   setFileInactive: PropTypes.func.isRequired,
//   active: PropTypes.array.isRequired,
//   current: PropTypes.object.isRequired,
// }

export default connect(
  (state) => ({
    active: state.Files.active,
    current: state.Files.current,
  }),
  (dispatch) => (bindActionCreators(actionCreators, dispatch))
  )(Tabs)
