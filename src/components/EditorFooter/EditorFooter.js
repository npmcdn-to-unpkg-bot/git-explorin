import React from 'react'
import { container, branch } from './styles.scss'
import { EditorBranchDropdown } from 'components'

const EditorFooter = (props) => {
  return (
    <div className={container}>
      <div>
        
      </div>
      <div className={branch}>
        <EditorBranchDropdown 
          params={props.params}
          handleBranchChange={props.handleBranchChange} />
      </div>
    </div>
  )
}

export default EditorFooter
