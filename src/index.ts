import './style.scss';
// import './assets/style/hover-effect.scss';

// import { hoverEffectInit } from './components/hover-box';
// https://stackify.com/node-js-module-exports/
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/
const desktopWindowSize = 1200;

window.onload = function() {
  console.log('initializing live code...');

  const animationContainer = document.getElementById("main-banner-area");

  // const bannerHeight = animationContainer.offsetHeight;
  const bannerWidth = animationContainer.offsetWidth;
  
  const squarAmountPerSide = 20;
  // let NumberOfSquaresX = 0, NumberOfSquaresY = 0;
  let totalSquars = 0;
  if (bannerWidth > desktopWindowSize) {
    totalSquars = squarAmountPerSide * squarAmountPerSide;

  } else {
    const mobileSquarAmountPerSide = squarAmountPerSide / 2;
    totalSquars = mobileSquarAmountPerSide * mobileSquarAmountPerSide;
  }

  for (let i = 0; i < totalSquars; i++) {
    const animationBox = document.createElement('div');
    animationBox.classList.add('animation-box');
    animationContainer.appendChild(animationBox)
  }
  // hoverEffectInit();
};