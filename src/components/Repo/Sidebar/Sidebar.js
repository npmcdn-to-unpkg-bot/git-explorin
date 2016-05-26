import React, { Component, PropTypes } from 'react'
import { container } from './styles.scss'
import { Directory, OpenFiles } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fileActionCreators from 'actions/files'

class Sidebar extends Component {

  componentDidMount = () => {
    var { username, repo, branch } = this.props.params
    this.props.fetchRepo(username, repo, branch)
  }

  render () {
    return (
      <div className={container}>
        <OpenFiles />
        <Directory repo={this.props.params.repo} files={this.props.directory} />
      </div>
    )
  }
}

Sidebar.propTypes = {
  directory: PropTypes.object.isRequired,
  fetchRepo: PropTypes.func.isRequired,
}

Sidebar.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({ directory: state.Files.directory }),
  (dispatch) => (bindActionCreators(fileActionCreators, dispatch))
  )(Sidebar)
