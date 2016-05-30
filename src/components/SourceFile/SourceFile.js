import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import hljs from 'highlight.js'

class SourceFile extends Component {

  constructor () {
    super()
    this.state = {
      currentPath: '',
      changed: false,
    }
  }

  componentDidMount = () => {
    this.highlight()
  }

  componentWillReceiveProps = (nextProps, prevProps) => {
    if (nextProps.path !== this.state.currentPath) {
      this.setState({
        ...this.state,
        currentPath: nextProps.path,
        changed: true,
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
    return (
      <pre>
        <code className={this.props.extension}>
          {this.props.source}
        </code>
      </pre>
    )
  }
}

SourceFile.propTypes = {
  extension: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
}

export default SourceFile
