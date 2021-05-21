import React from 'react'
import { Fade } from 'react-slideshow-image'
import { allImgs1200W } from './images/1200_wide_backround/all_images_1200w'

export default function AltBanner({ pageName }) {
  const fadeOutProperties = {
    arrows: false,
    indicators: true,
  }

  const shuffledImgs = allImgs1200W.sort((a, b) => 0.5 - Math.random())

  return (
    <Fade {...fadeOutProperties}>
      {shuffledImgs.map((fadeImg) => {
        return (
          <div id="banner" className="altBanner" style={{ backgroundImage: `url(${fadeImg})` }}>
            <div className="inner">
              <header className="container">
                <h2>{pageName}</h2>
              </header>
            </div>
            {/* </div> */}
          </div>
        )
      })}
    </Fade>
  )
}
