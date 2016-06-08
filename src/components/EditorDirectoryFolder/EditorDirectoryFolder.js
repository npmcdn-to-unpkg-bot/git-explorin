import React, { Component, PropTypes } from 'react'
import { EditorDirectoryFile } from 'components'
import { folder, folderActive, folderLink, folderLinkActive } from './styles.scss'
import _ from 'lodash'

class EditorDirectoryFolder extends Component {

  constructor (props) {
    super(props)

    this.state = {
      rendered: false,
      repository: props.params || {}
    }
  }

  toggleFolder = (e) => {
    e.target.className = e.target.className === folderLink ? folderLinkActive : folderLink
    e.target.parentElement.className = e.target.parentElement.className === folder ? folderActive : folder
  }

  sortCurrentDirectory = () => {
    return Object.keys(this.props.files).sort((a, b) => {
      a = this.props.files[a].__ref !== undefined ? this.props.files[a].__ref : this.props.files[a]
      b = this.props.files[b].__ref !== undefined ? this.props.files[b].__ref : this.props.files[b]
      if (a.type > b.type) return -1
      else if (a.type < b.type) return 1
      else return 0
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextState.rendered === false) {
      this.setState({
        ...this.state,
        rendered:true
      })
      return true
    } else if (!_.isEqual(this.state.repository, nextProps.params)) {
      this.setState({
        ...this.state,
        repository: { ... nextProps.params }
      }, () => {
        let root = document.getElementById('root');
        root.className = folderActive
        root.firstChild.className = folderLinkActive
        let active = [...document.querySelectorAll(`li.${folderLinkActive.split(" ")[0]}`)]
        active.map((el) => {
          if (el.parentElement.id !== 'root') {
            el.className = folderLink
            el.parentElement.className = folder  
          }
        })
        
      })
      return true
    } else {
      return false
    }
  }

  render () {
    return (
      <ul id={this.props.isRoot === true ? 'root' : 'sub'} className={this.props.isRoot === true ? folderActive : folder}>
        <li className={this.props.isRoot === true ? folderLinkActive : folderLink} onClick={this.toggleFolder}>{this.props.children}</li>
        {
          this.sortCurrentDirectory().map((name, idx) => {
            if (name === '__ref') return null
            return this.props.files[name].__ref.type === 'blob'
              ? (
                  <EditorDirectoryFile
                    file={this.props.files[name].__ref}
                    key={this.props.files[name].__ref.path}
                    isActive={false}
                    handleSetActive={this.props.handleSetActive} />
                )
              : (
                  <li key={idx}>
                    <EditorDirectoryFolder
                      files={this.props.files[name]}
                      current={this.props.current}
                      handleSetActive={this.props.handleSetActive}>
                      {name}
                    </EditorDirectoryFolder>
                  </li>
                )
          })
        }
    </ul>
    )
  }
}

EditorDirectoryFolder.propTypes = {
  files: PropTypes.object.isRequired,
  isRoot: PropTypes.bool,
  children: PropTypes.string,
  current: PropTypes.object.isRequired,
  handleSetActive: PropTypes.func.isRequired,
}

export default EditorDirectoryFolder
