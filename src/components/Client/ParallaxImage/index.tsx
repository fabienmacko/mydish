import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import './parallax.scss';

interface ParallaxImageProps {
  imagePath: string
}

const ParallaxImage = ({imagePath}: ParallaxImageProps) => {
  return (
    <>
      <Parallax className="header-image" y={[20, -20]} tagOuter="figure">
        <div className="image-container" style={{
          backgroundImage: `url('${imagePath}')`
        }}></div>
      </Parallax>
      <div id="wrapper">
        <div id="wrapper-inner">
          <div id="scroll-down">
            <span className="arrow-down">
            </span>
          </div>
        </div>
      </div>
    </>
  )
};


export default ParallaxImage;