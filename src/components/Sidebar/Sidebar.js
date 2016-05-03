import React, { Component, PropTypes } from 'react'
import { container } from './styles.scss'
import { Directory, OpenFiles } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fileActionCreators from '../../actions/files'

class Sidebar extends Component {

  componentWillMount = () => {
    this.props.fetchFiles()
  }

  render () {
    return (
      <div className={container}>
        <OpenFiles />
        <Directory files={this.props.files} />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(fileActionCreators, dispatch)
}

Sidebar.propTypes = {
  files: PropTypes.object.isRequired,
  fetchFiles: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({ files: state.Files.files }),
  mapDispatchToProps
  )(Sidebar)
