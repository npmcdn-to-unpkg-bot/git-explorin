import React from 'react'
import { hero, heroTitle, section, img } from './styles.scss'

function HomeHero () {
  return (
    <div>
      <div className={hero}>
        <h1 className={heroTitle}>{'A familiar way to explore Github repositories.'}</h1>
      </div>
      <div className={section}>
        <div className={img}>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
