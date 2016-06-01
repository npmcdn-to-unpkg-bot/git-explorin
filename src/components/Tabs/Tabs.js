import React, { PropTypes } from 'react'
import { Tab } from 'components'
import { container } from './styles.scss'

const Tabs = (props) => {
  let files = Object.keys(props.active)
  return (
      <div style={{maxWidth:props.size.secondary, minWidth:'100%'}}>
        <ul className={container}>
          {
            files.map((file, idx) => {
              let filename = file.split('/')
              return (
                <Tab
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

Tabs.propTypes = {
  handleSetActive: PropTypes.func.isRequired,
  handleSetInactive: PropTypes.func.isRequired,
  active: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
}

export default Tabs
