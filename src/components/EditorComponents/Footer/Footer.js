import React from 'react'
import { container, branch } from './styles.scss'
import { BranchesDropdown } from 'components'

const Footer = (props) => {
  return (
    <div className={container}>
      <div>
        <p>{props.current.path}</p>
      </div>
      <div className={branch}>
        <BranchesDropdown 
          params={props.params}
          handleBranchChange={props.handleBranchChange} />
      </div>
    </div>
  )
}

export default Footer
