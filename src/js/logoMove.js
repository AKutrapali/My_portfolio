const logoA = document.getElementById('logoA');
const logoK = document.getElementById('logoK');
const startA = 0;
const finishA = 45;
let differenceA = 0.5;
const differenceK = 2;
let offsetA = 0;
let offsetK = 0;

export function logoMove() {
  if(offsetA === finishA) differenceA= -0.5;
  if(offsetA === startA) {
    differenceA= 0.5;
    offsetK = 0;
  }
  offsetA += differenceA;
  logoA.style.marginTop = `${offsetA}px`;
  offsetK += differenceK;
  logoK.style.transform = `rotate(${offsetK}deg)`;
}