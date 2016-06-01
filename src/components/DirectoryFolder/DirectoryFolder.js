import React, { Component, PropTypes } from 'react'
import { DirectoryFile } from 'components'
import { folder, folderActive, folderLink, folderLinkActive } from './styles.scss'

class DirectoryFolder extends Component {

  constructor () {
    super()

    this.state = {
      rendered: false
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
        rendered:true
      })
      return true
    } else {
      return false
    }
  }

  render () {
    return (
      <ul className={this.props.isRoot === true ? folderActive : folder}>
        <li className={this.props.isRoot === true ? folderLinkActive : folderLink} onClick={this.toggleFolder}>{this.props.children}</li>
        {
          this.sortCurrentDirectory().map((name, idx) => {
            if (name === '__ref') return null
            return this.props.files[name].__ref.type === 'blob'
              ? (
                  <DirectoryFile
                    file={this.props.files[name].__ref}
                    key={this.props.files[name].__ref.path}
                    isActive={false}
                    handleSetActive={this.props.handleSetActive} />
                )
              : (
                  <li key={idx}>
                    <DirectoryFolder
                      files={this.props.files[name]}
                      current={this.props.current}
                      handleSetActive={this.props.handleSetActive}>
                      {name}
                    </DirectoryFolder>
                  </li>
                )
          })
        }
    </ul>
    )
  }
}

DirectoryFolder.propTypes = {
  files: PropTypes.object.isRequired,
  isRoot: PropTypes.bool,
  children: PropTypes.string,
  current: PropTypes.object.isRequired,
  handleSetActive: PropTypes.func.isRequired,
}

export default DirectoryFolder
