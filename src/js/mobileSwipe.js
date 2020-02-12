import {scrollLeftRight} from './carouselMove';

let xDown ;  
                                                                                                         
export function handleTouchStart(e) {                                         
    xDown = e.touches[0].clientX;                                                                         
};  

export function handleTouchMove(e) {
  if ( xDown === 0.1234567) {
    return;
  }
  const xUp = e.touches[0].clientX;                                    
  const xDiff = xDown - xUp;
    if ( xDiff < 0 ) {
      scrollLeftRight('left')
    } else {
      scrollLeftRight('right')
    }                   
  xDown = 0.1234567;                            
};