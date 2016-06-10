import React, { PropTypes } from 'react'
import { EditorTab } from 'components'
import { tabs, wrapper } from './styles.scss'

const EditorTabBar = (props) => {
  let files = Object.keys(props.active)
  return (
      <div className={wrapper} style={{maxWidth:props.size.secondary, width: props.size.secondary, minWidth:'100%'}}>
        <ul className={tabs}>
          
          {
            files.map((file, idx) => {
              let filename = file.split('/')
              return (
                <EditorTab
                  key={idx}
                  path={file}
                  isActive={props.current.path === file}
                  filename={filename[filename.length - 1]}
                  handleSetActive={props.handleSetActive}
                  handleSetInactive={props.handleSetInactive} />
                )
            })
          }
          <li></li>
        </ul>
      </div>
  )
}

EditorTabBar.propTypes = {
  handleSetActive: PropTypes.func.isRequired,
  handleSetInactive: PropTypes.func.isRequired,
  active: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
}

export default EditorTabBar
