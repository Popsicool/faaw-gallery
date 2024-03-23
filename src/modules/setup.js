import * as THREE from "three";
const scene = new THREE.Scene();
const screenWidth = window.innerWidth
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = screenWidth < 600 ? 10 : 33;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);

export { scene, camera, renderer };
