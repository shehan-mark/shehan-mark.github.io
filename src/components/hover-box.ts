/* eslint-disable */
// https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/

const mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event: any) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function(e: any) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}

let containers: HTMLCollectionOf<Element>;
let inners: HTMLCollectionOf<Element>;
let currentContainer: any;
let currentInner: any;
// let helper:any;
let timerReference: any;

/**
 * handling mouse events from mouse entering to mouse going out of the box
 * @param event 
 */
const onMouseEnterHandler = (event: any, index: number) => {
  console.log('on mouse enter event here', event, index);
  currentContainer = containers[index];
  currentInner = inners[index];
  mouse.setOrigin(currentContainer);
  update(event);
}

const onMouseLeaveHandler = (event: any) => {
  clearTimeout(timerReference);
  currentInner.style = "";
}

const onMouseMoveHandler = (event: any) => {
  clearTimeout(timerReference);
  timerReference = setTimeout(() => {
    update(event);
  }, 100);
}

const update = (event: any) => {
  console.log('updating...');
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / currentInner.offsetHeight/2).toFixed(2),
    (mouse.x / currentInner.offsetWidth/2).toFixed(2)
  );
}

const updateTransformStyle = function(x: any, y: any) {
  let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  currentInner.style.transform = style;
  currentInner.style.webkitTransform = style;
  currentInner.style.mozTransform = style;
  currentInner.style.msTransform = style;
  currentInner.style.oTransform = style;
};

const hoverEffectInit = () => {
  containers = document.getElementsByClassName('hover-container');
  inners = document.getElementsByClassName('inner');
  // helper = document.getElementById("helper");
  console.log('queried UI elements', containers);
  
  /** binding mouse move events to container */
  for (let i = 0; i < containers.length; i++) {
    const containerEle = <HTMLElement>containers[i]; // using type assertion to placate the compiler
    containerEle.onmouseenter = (event) => {
      onMouseEnterHandler(event, i);
    };
    containerEle.onmouseleave = onMouseLeaveHandler;
    containerEle.onmousemove = onMouseMoveHandler;
  }
}

export {
  hoverEffectInit,
}