const content1 = document.getElementsByClassName('carousel_text');

export function openCloseDescriptionProject () {
  if (content1[0].style.display === 'block') {
    for (let q=0; q<content1.length; q++) {
      content1[q].style.display = "none";
    }
  } 
  else {
    for (let q=0; q<content1.length; q++) {
      content1[q].style.display = "block";
    }
  }
};