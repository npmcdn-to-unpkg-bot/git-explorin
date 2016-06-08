import React from 'react'
import { hero, headerTitle, heroTitle, main, section, img } from './styles.scss'
import editor_screenshot from '../../assets/images/editor_screenshot.png'

function HomeHero () {
  return (
    <div>
      <div className={hero}>
        <h1 className={heroTitle}>A familiar way to explore Github repositories.</h1>
      </div>
      <div className={section}>
        <div>
          <img className={img} src={editor_screenshot} />
        </div>
      </div>
    </div>
  )
}

export default HomeHero