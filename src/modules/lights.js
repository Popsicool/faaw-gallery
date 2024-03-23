import * as THREE from "three";
import { scene } from "./setup";
const ambientLight = new THREE.AmbientLight(0x101010, 1.0);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xddddd, 1.0);
sunLight.position.y = 15;
scene.add(sunLight);


export {ambientLight, sunLight}