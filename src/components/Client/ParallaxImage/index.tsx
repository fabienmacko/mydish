import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import './parallax.scss';

interface ParallaxImageProps {
  imagePath: string
}

const ParallaxImage = ({imagePath}: ParallaxImageProps) => {
  return (
    <Parallax className="header-image" y={[20, -20]} tagOuter="figure">
      <div style={{
        backgroundImage: `url('${imagePath}')`,
        width: '100%',
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 0
      }}></div>
    </Parallax>
  )
};


export default ParallaxImage;