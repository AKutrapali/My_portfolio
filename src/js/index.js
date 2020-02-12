
import '../css/style.scss';
import {logoMove} from './logoMove';
import {scrollLeftRight, projectContent} from './carouselMove';
import {handleTouchStart, handleTouchMove } from './mobileSwipe';
import {openCloseDescriptionProject } from './openCloseDescriptionProject';


export const buttonLeft = document.getElementById('button_left');
export const buttonRight = document.getElementById('button_right');
const coll1 = document.getElementById('carousel_button');

setInterval(logoMove,15);

buttonLeft.addEventListener("click", () => scrollLeftRight('left'));
buttonRight.addEventListener("click",() => scrollLeftRight('right'));

projectContent.addEventListener('touchstart', handleTouchStart, false);   
projectContent.addEventListener('touchmove', handleTouchMove, false);

coll1.addEventListener("click", openCloseDescriptionProject );