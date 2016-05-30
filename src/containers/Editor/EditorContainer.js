import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { EditorActionCreators } from 'actions'
import { Sidebar, Tabs, File, Footer } from 'components'
import { container, column30, column70, column100, loading, loaded } from './styles.scss'

class EditorContainer extends Component {

  componentDidMount = () => {
    this.props.fetchRepo(this.props.params)
  }

  handleSetActive = (e) => {
    e.stopPropagation()
    if (this.props.active[e.target.getAttribute('data-file')] === undefined) {
      this.props.addActive(e.target.getAttribute('data-file'))
    } else {
      this.props.setActive(this.props.active[e.target.getAttribute('data-file')])
    }
  }

  handleSetInactive = (e) => {
    e.stopPropagation()
    this.props.setInactive(this.props.active[e.target.parentNode.getAttribute('data-file')])
  }

  render () {
    return (
      <div className={this.props.editorLoading ? loading : loaded}>
        <div className={container}>
          <div className={column30}>
            <Sidebar
              repo={this.props.params.repo}
              active={this.props.active}
              current={this.props.current}
              directory={this.props.directory}
              handleSetActive={this.handleSetActive}
              handleSetInactive={this.handleSetInactive} />
          </div>
          <div className={column70}>
            <Tabs
              active={this.props.active}
              current={this.props.current}
              handleSetActive={this.handleSetActive}
              handleSetInactive={this.handleSetInactive} />
            <File
              current={this.props.current}
              fileLoading={this.props.fileLoading} />
          </div>
          <div className={column100}>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

EditorContainer.propTypes = {
  params: PropTypes.object.isRequired,
  editorLoading: PropTypes.bool.isRequired,
  fileLoading: PropTypes.bool.isRequired,
  active: PropTypes.object.isRequired,
  directory: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  fetchRepo: PropTypes.func.isRequired,
  addActive: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  setInactive: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({
    editorLoading: state.Editor.editorLoading,
    fileLoading: state.Editor.fileLoading,
    current: state.Editor.current,
    active: state.Editor.active,
    directory: state.Editor.directory,
  }),
  (dispatch) => (bindActionCreators(EditorActionCreators, dispatch))
  )(EditorContainer)
