import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class HomeContainer extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.context.router.push({
      pathname: `/${e.target.username.value}/${e.target.repo.value}/${e.target.branch.value}`
    })
  }

  render () {
    return (
      <div>
        <h1>Repo Explorer</h1>
        <form onSubmit={this.handleSubmit} >
          <input 
            type='text' 
            name='username' 
            value='isaiahgrey93' 
            onChange={()=>{}} 
            placeholder='username'
          />
          <input 
            type='text' 
            name='repo'
            value='isaiahgrey93.github.io' 
            onChange={()=>{}} 
            placeholder='repo'
          />
          <input 
            type='text' 
            name='branch'             
            value='development' 
            onChange={()=>{}} 
            placeholder='branch'
          />
          <input 
            type='submit'
          />
        </form>
      </div>
    )
  }
}

HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(
  (state) => ({})
  )(HomeContainer)