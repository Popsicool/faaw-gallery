import * as THREE from "three";
const scene = new THREE.Scene();
const screenWidth = window.innerWidth
const camera = new THREE.PerspectiveCamera(
  screenWidth < 600 ? 100 : 75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = screenWidth < 600 ? 15 : 33;

var lastTouchPosition = {
  x: 0,
  y: 0
};

function onTouchStart(event) {
  lastTouchPosition.x = event.touches[0].clientX;
  lastTouchPosition.y = event.touches[0].clientY;
}

// Function to handle touch move event
function onTouchMove(event) {
  var touch = event.touches[0];

  // Calculate the change in touch position
  var deltaX = touch.clientX - lastTouchPosition.x;
  // var deltaY = touch.clientY - lastTouchPosition.y;

  // Update the camera's rotation based on touch movement
  camera.rotation.y -= deltaX * 0.01;
  // camera.rotation.x -= deltaY * 0.01;

  // Update the last touch position
  lastTouchPosition.x = touch.clientX;
  lastTouchPosition.y = touch.clientY;
}
document.addEventListener('touchstart', onTouchStart, false);
document.addEventListener('touchmove', onTouchMove, false);



const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);

export { scene, camera, renderer };
