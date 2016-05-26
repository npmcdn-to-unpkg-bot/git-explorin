import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Sidebar, Tabs, Main, Footer } from 'components'
import { container, column30, column70, column100, loading, loaded } from './styles.scss'

class RepoContainer extends Component {

  componentDidMount = () => {
    document.title = this.props.params.repo
  }

  render () {
    return (
      <div className={this.props.loading ? loading : loaded}>
        <div className={container}>
          <div className={column30}>
            <Sidebar params={this.props.params} />
          </div>
          <div className={column70}>
            <Tabs />
            <Main />
          </div>
          <div className={column100}>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

RepoContainer.propTypes = {
  params: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default connect(
  (state) => ({
    current: state.Files.current,
    loading: state.Files.loading,
  })
  )(RepoContainer)
