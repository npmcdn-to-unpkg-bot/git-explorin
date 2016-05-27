import React, { Component, PropTypes } from 'react'
import { Directory, OpenFiles } from 'components'
import { bindActionCreators } from 'redux'
import { EditorActionCreators } from 'actions'
import { connect } from 'react-redux'
import { container } from './styles.scss'

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
  params: PropTypes.object.isRequired,
  fetchRepo: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({ directory: state.Files.directory }),
  (dispatch) => (bindActionCreators(EditorActionCreators, dispatch))
  )(Sidebar)
