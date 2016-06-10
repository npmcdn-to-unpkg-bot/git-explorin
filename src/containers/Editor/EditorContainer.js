import React, { Component, PropTypes } from 'react'
import { EditorSidebar, EditorFooter, EditorTabBar, EditorFile, TopMenu } from 'components'
import SplitPane from 'react-split-pane'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { EditorActionCreators } from 'actions'
import { container, loading, loaded } from './styles.scss'

class EditorContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: {
        primary: ((window.innerWidth / 100) * 30),
        secondary: ((window.innerWidth / 100) * 70),
      },
      repository: {}
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleFetchRepo(this.props.params)
  }

  componentWillReceiveProps = (next, prev) => {
    if(!_.isEqual(next.params, this.state.repository)) {
      this.setState({
        ...this.state,
        repository:next.params
      }, () => {
        this.handleFetchRepo(this.props.params)
      })
    }
  }

  handleFetchRepo = (params) => {
    this.props.fetchRepo(params)
  }

  handleBranchChange = (branch) => {
    this.context.router.push(`/${this.props.params.username}/${this.props.params.repo}/${branch.value}`)
    this.handleFetchRepo({ ...this.props.params, splat:branch.value })
  }

  handleWindowResize = () => {
    this.setState({
      width: {
        primary: ((window.innerWidth / 100) * 30),
        secondary: ((window.innerWidth / 100) * 70),
      }
    })
  }

  handleWindowPaneResize = (size) => {
    this.setState({
      ...this.state,
      width: {
        primary: size,
        secondary: (window.innerWidth - size),
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
        <TopMenu />
        <div className={container}>
          <SplitPane defaultSize={'30%'} split={'vertical'} onChange={this.handleWindowPaneResize}>
            <div>
              <EditorSidebar
                params={this.props.params}
                active={this.props.active}
                current={this.props.current}
                files={this.props.files}
                handleSetActive={this.handleSetActive}
                handleSetInactive={this.handleSetInactive} />
            </div>
            <div>
              <EditorTabBar
                active={this.props.active}
                current={this.props.current}
                handleSetActive={this.handleSetActive}
                handleSetInactive={this.handleSetInactive}
                size={this.state.width}/>
              <EditorFile
                current={this.props.current}
                fileLoading={this.props.fileLoading}
                size={this.state.width}/>
            </div>
          </SplitPane>
        </div>
        <EditorFooter
          handleBranchChange={this.handleBranchChange}
          branches={['master', 'development', 'my-feature']}
          current={this.props.current}
          params={this.props.params} />

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

EditorContainer.contextTypes = {
  router: PropTypes.object.isRequired,
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
