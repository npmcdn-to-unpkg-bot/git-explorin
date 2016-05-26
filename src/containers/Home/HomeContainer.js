import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
let searchHandler = false

class HomeContainer extends Component {

  onFormSubmit = (e) => {
    e.preventDefault()
    this.context.router.push({
      pathname: `/${e.target.username.value}/${e.target.repo.value}/${e.target.branch.value}`,
    })
  }

  onFormChange = (e) => {
    e.preventDefault()
    clearTimeout(searchHandler)
    searchHandler = setTimeout(() => console.info('Searching...'), 1500)
  }

  render () {
    return (
      <div>
        <h1>{'Repo Explorer'}</h1>
        <form onSubmit={this.onFormSubmit} onChange={this.onFormChange}>
          <input
            type='text'
            name='username'
            value='isaiahgrey93'
            onChange={() => {}}
            placeholder='username' />
          <input
            type='text'
            name='repo'
            value='isaiahgrey93.github.io'
            onChange={() => {}}
            placeholder='repo' />
          <input
            type='text'
            name='branch'
            value='development'
            onChange={() => {}}
            placeholder='branch' />
          <input
            type='submit' />
        </form>
      </div>
    )
  }
}

HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({})
  )(HomeContainer)
