import React from 'react'
import { hero, heroTitle, section, img } from './styles.scss'
import editorScreenshot from '../../assets/images/editor_screenshot.png'

function HomeHero () {
  return (
    <div>
      <div className={hero}>
        <h1 className={heroTitle}>{'A familiar way to explore Github repositories.'}</h1>
      </div>
      <div className={section}>
        <div>
          <img className={img} role='presentation' src={editorScreenshot} />
        </div>
      </div>
    </div>
  )
}

export default HomeHero
