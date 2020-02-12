import {buttonLeft, buttonRight} from './index';

export const projectContent = document.getElementById('project_content');
let n = 0;
let currentPositionCarousel;

const carousel = document.getElementsByClassName('carousel_item');
export function scrollLeftRight(direction) {
  buttonLeft.style.display = 'flex';
  buttonRight.style.display = 'flex';
  currentPositionCarousel = -n*98
  let signDirection    
  if(direction === "right") { signDirection = -1}
  if(direction === "left") {signDirection = 1}
  n -= signDirection
  if (n===(carousel.length - 1)) {
    buttonRight.style.display = 'none';
  }
  if (n===0) {
    buttonLeft.style.display = 'none';
  }  

  const finishPositionCarousel = currentPositionCarousel +(signDirection*98) 
  let offsetCarousel = signDirection * 1;
  function moveCarousel () {
    projectContent.style.left =`${offsetCarousel}%`;
    offsetCarousel *= 0.99
    currentPositionCarousel += offsetCarousel
    projectContent.style.left =`${currentPositionCarousel + offsetCarousel}%`;
    if ( (direction === "right" && currentPositionCarousel<finishPositionCarousel) || (direction === "left" && currentPositionCarousel>finishPositionCarousel) ) {
      currentPositionCarousel = finishPositionCarousel;
      // eslint-disable-next-line no-use-before-define
      clearInterval(moveC);
    }
  }
  const moveC = setInterval(moveCarousel, 6);
};