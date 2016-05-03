import React from 'react'
import { Sidebar, Tabs, Main, Footer } from 'components'
import { container, column25, column75, column100 } from './styles.scss'

function HomeContainer () {
  return (
    <div className={container}>
      <div className={column25}>
        <Sidebar />
      </div>
      <div className={column75}>
        <Tabs />
        <Main />
      </div>
      <div className={column100}>
        <Footer />
      </div>
    </div>
  )
}

export default HomeContainer
