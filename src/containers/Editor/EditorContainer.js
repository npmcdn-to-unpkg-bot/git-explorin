import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { EditorActionCreators } from 'actions'
import { Sidebar, Tabs, File, Footer } from 'components'
import { container, column30, column70, column100, loading, loaded } from './styles.scss'
import SplitPane from 'react-split-pane'

class EditorContainer extends Component {
  constructor () {
    super()
    this.state = {
      width: {
        primary: ((window.innerWidth / 100) * 30) - 4,
        secondary: ((window.innerWidth / 100) * 70) - 4,
      }
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWindowResize);
    this.props.fetchRepo(this.props.params)
  }

  handleWindowResize = () => {
    this.setState({
      width: {
        primary: ((window.innerWidth / 100) * 30) - 4,
        secondary: ((window.innerWidth / 100) * 70) - 4,
      }
    })
  }

  handleWindowPaneResize = (size) => {
    this.setState({
      ...this.state,
      width: {
        primary: size - 4,
        secondary: (window.innerWidth - size) - 4,
      }
    })
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
      <div className={this.props.repoLoading ? loading : loaded}>
        <div style={{display:'flex', flex: 1, height: 'calc(100vh - 40px)'}}>
          <SplitPane defaultSize="30%" split="vertical" onChange={this.handleWindowPaneResize}>
            <div>
              <Sidebar
                repo={this.props.params.repo}
                active={this.props.active}
                current={this.props.current}
                files={this.props.files}
                handleSetActive={this.handleSetActive}
                handleSetInactive={this.handleSetInactive} />
            </div>
            <div>
              <Tabs
                active={this.props.active}
                current={this.props.current}
                handleSetActive={this.handleSetActive}
                handleSetInactive={this.handleSetInactive}
                size={this.state.width}/>
              <File
                current={this.props.current}
                fileLoading={this.props.fileLoading} />
            </div>
          </SplitPane>
        </div>
        <Footer />

      </div>
    )
  }
}

EditorContainer.propTypes = {
  params: PropTypes.object.isRequired,
  repoLoading: PropTypes.bool.isRequired,
  fileLoading: PropTypes.bool.isRequired,
  active: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  fetchRepo: PropTypes.func.isRequired,
  addActive: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  setInactive: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({
    repoLoading: state.Editor.repoLoading,
    fileLoading: state.Editor.fileLoading,
    current: state.Editor.current,
    active: state.Editor.active,
    files: state.Editor.files,
  }),
  (dispatch) => (bindActionCreators(EditorActionCreators, dispatch))
  )(EditorContainer)
