import React from 'react'
import { connect } from 'react-redux'
import { Sidebar, Tabs, Main, Footer } from 'components'
import { container, column30, column70, column100, loading, loaded } from './styles.scss'

function RepoContainer (props) {
  let status = props.loading ? loading : loaded
  return (
    <div className={status}>
      <div className={container}>
        <div className={column30}>
          <Sidebar params={props.params} />
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

export default connect(
  (state) => ({ loading: state.Files.loading })
  )(RepoContainer)
