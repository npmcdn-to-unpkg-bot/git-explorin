import React, { PropTypes, Component } from 'react'
import Markdown from 'react-remarkable'
import ReactDOM from 'react-dom'
import hljs from 'highlight.js'
import { container, markdownBody } from './styles.scss'

class GithubSourceFile extends Component {
  constructor () {
    super()
    this.state = {
      currentPath: '',
      changed: false,
      source: '',
      ext: 'accesslog',
    }
  }

  componentDidMount = () => {
    this.highlight()
  }

  componentWillReceiveProps = (nextProps, prevProps) => {
    if (nextProps.path !== this.state.currentPath && nextProps.source.length > 250000) {
      let size = nextProps.source.length / 1000000
      let unit = 'mb'
      if (size < 1) {
        size = size * 1000
        unit = 'kb'
      }

      this.setState({
        ...this.state,
        currentPath: nextProps.path,
        changed: true,
        source: `Sorry... File size exceeds viewing limits.
        \n\nFiles of this size (approx. ${Math.floor(size)}${unit}) can cause unexpected UI delays and UX degradation.
        \n\n:(`,
        ext: 'accesslog',
      })
    } else if (nextProps.path !== this.state.currentPath) {
      this.setState({
        ...this.state,
        currentPath: nextProps.path,
        changed: true,
        source: nextProps.source,
        ext: nextProps.extension,
      })
    } else {
      this.setState({
        ...this.state,
        changed: false,
      })
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.changed) return true
    else return false
  }

  componentDidUpdate = () => {
    this.highlight()
  }

  highlight = () => {
    var domNode = ReactDOM.findDOMNode(this)
    var nodes = domNode.querySelectorAll('pre code')
    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i = i + 1) {
        hljs.highlightBlock(nodes[i])
      }
    }
  }

  render () {
    return this.state.ext === 'md'
    ? (
        <div className={container}>
          <div className={markdownBody}>
            <Markdown container={'div'} source={this.state.source} />
          </div>
        </div>
      )
    : (
      <pre>
        <code className={this.state.ext}>
          {this.state.source}
        </code>
      </pre>
    )
  }
}

GithubSourceFile.propTypes = {
  extension: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
}

export default GithubSourceFile
