import "./style.css";


import { camera, renderer } from "./src/modules/setup";
import { animate } from "./src/modules/animate";
import { showPaintings } from "./src/modules/showPaintings";

document.body.appendChild(renderer.domElement);

showPaintings()
animate();
// //? Create scene

// import * as THREE from "three";
// import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
// const scene = new THREE.Scene();

// //? create camera,it takes the field of view and aspect ratio
// //? aspect ratio is width/ height

// const camera = new THREE.PerspectiveCamera(
//   75, //* field of view
//   window.innerWidth / window.innerHeight, //* aspect ratio
//   0.1, //* near clipping plane
//   1000 //* far clipping plane
// );

// //? add camera to scene
// scene.add(camera);

// //? aadjust camera positioning
// // camera.position.z = 10; //* it moves the camera back 5 units
// const camDefaultPos = 3;
// camera.position.z = camDefaultPos; //* it moves the camera back 5 units

// //? create a renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true }); //* Anti alias to give geometry smoot edges
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff, 1); //* background color

// //? Add renderer to html
// document.body.appendChild(renderer.domElement);

// //? Light up the scene
// const ambientLight = new THREE.AmbientLight(0x101010, 1.0); //* color of light, intensity, distance, decay
// //?  adjust position of the light
// // ambientLight.position = camera.position; //* light follow camera

// //? add light to scene
// scene.add(ambientLight);

// //? add directional light
// const sunLight = new THREE.DirectionalLight(0xddddd, 1.0); //* color of light, intensity,
// //?  adjust position of the light
// sunLight.position.y = 15; //* set light position

// //? add light to scene
// scene.add(sunLight);

// //? create aa geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1); //* size on x, y, z

// //? create a materia
// const materia = new THREE.MeshBasicMaterial({ color: "blue" }); //* color of the materia

// // //? create mesh
// // const cube = new THREE.Mesh(geometry, materia); //* takes in geometry and materia to create the object

// // //? add mesh to screen
// // scene.add(cube);

// //? Add texture loader
// const floorTexture = new THREE.TextureLoader();

// //? Create the floor plane
// const floor = new THREE.PlaneGeometry(50, 50);
// floorTexture.load("img/mud.jpeg", function (texture) {
//   // Create material with the loaded texture
//   const floorMaterial = new THREE.MeshBasicMaterial({
//     map: texture,
//     side: THREE.DoubleSide,
//   });
//   const floorMesh = new THREE.Mesh(floor, floorMaterial);

//   floorMesh.rotation.x = Math.PI / 2; //* rotate in 90 degrees
//   //   floorMesh.position.y = -Math.PI; //* rotate in 180 degrees
//   floorMesh.position.y = -10; //* rotate in 180 degrees
//   // Add the mesh to the scene
//   scene.add(floorMesh);
// }); //* Load the texture for the floor

// //? create walls
// const wallGroup = new THREE.Group(); //* create a group to hold walls
// scene.add(wallGroup);

// const createWall = (textureUrl, position, color, rotation) => {
//   const wallTexture = new THREE.TextureLoader();
//   const createGeometry = new THREE.BoxGeometry(50, 20, 0.001);
//   return new Promise((resolve, reject) => {
//     wallTexture.load(textureUrl, (texture) => {
//       const wallMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, color:color });
//       const wallMesh = new THREE.Mesh(createGeometry, wallMaterial);
//       if (position.x){
//         wallMesh.position.x = position.x
//       }
//       if (position.y){
//         wallMesh.position.y = position.y
//       }
//       if (position.z){
//         wallMesh.position.z = position.z
//       }
//       if (rotation.x){
//         wallMesh.rotation.x = rotation.x
//       }
//       if (rotation.y){
//         wallMesh.rotation.y = rotation.y
//       }
//       if (rotation.z){
//         wallMesh.rotation.z = rotation.z
//       }
//       wallMesh.geometry.computeBoundingBox();
//       wallMesh.Bbox = new THREE.Box3().setFromObject(wallMesh);
//       wallGroup.add(wallMesh);
//       resolve(wallMesh);
//     }, reject);
//   });
// };
// //? front walls
// createWall("img/hofaaw.png", {x:null, y:null, z:-25}, "white", {x:null, y: null, z:null})
// // createWall("img/gate.jpeg", {x:null, y:null, z:20}, "white")
// createWall("img/wall.jpeg", {x:-25, y:null, z:null}, "grey", {x:null, y:  Math.PI / 2, z:null})
// createWall("img/wall.jpeg", {x:25, y:null, z:null}, "grey", {x:null, y:  Math.PI / 2, z:null})

// //? Add bounding box to wall group items
// console.log(wallGroup.children)
// for (let i = 0; i < wallGroup.children.length; i++) {
//   wallGroup.children[i].Bbox = new THREE.Box3();
//   wallGroup.children[i].Bbox.setFromObject(wallGroup.children[i]);
//   console.log(wallGroup.children[i]);
// }

// //? check collision
// // const allWalls = [frontwall]
// // const checkCollision = () => {
// //   // Create a bounding box for the camera
// //   const cameraBoundingSphere = new THREE.Sphere(); // Consider using a Sphere for smoother collision detection
// //   camera.getWorldPosition(cameraBoundingSphere.center); // Store camera position as sphere center
// //   cameraBoundingSphere.radius = 0.5; // Adjust radius based on your camera size (e.g., player radius)
// //   // Retrieve the front wall's bounding box (assuming it's already loaded)
// //   const getBoundingBox = (mesh) => {
// //     const boundingBox = new THREE.Box3();

// //     mesh.geometry.computeBoundingBox(boundingBox);
// //     return {
// //       min: boundingBox.min,
// //       max: boundingBox.max
// //     }
// //   }
// //   const frontWallBoundingBox = getBoundingBox(frontWallMesh);
// //   const frontWallBox = new THREE.Box3(frontWallBoundingBox.min, frontWallBoundingBox.max);
// //   // Check for collision using sphere-box intersection
// //   return cameraBoundingSphere.intersectsBox(frontWallBox);
// // };

// const checkCollision = () => {
//   const playerBindingBox = new THREE.Box3()
//   const cameraWorldPosition = new THREE.Vector3()
//   camera.getWorldPosition(cameraWorldPosition)
//   playerBindingBox.setFromCenterAndSize(
//     cameraWorldPosition,
//     new THREE.Vector3(1,1,1)
//   )
//   for (let i = 0; i < wallGroup.children.length; i++) {
//     if (playerBindingBox.intersectsBox(wallGroup.children[i])){
//       return true
//     }
//   }
//   return false
// }
// //? Ceiling wall

// const ceilingTexture = new THREE.TextureLoader();
// const ceilingWall = new THREE.PlaneGeometry(50, 50);
// ceilingTexture.load("img/ceiling.png", function (texture) {
//   const ceilingWallMaterial = new THREE.MeshBasicMaterial({
//     map: texture,
//     color: "white",
//     side: THREE.DoubleSide,
//   });
//   const ceilingWallMesh = new THREE.Mesh(ceilingWall, ceilingWallMaterial);
//   ceilingWallMesh.rotation.x = Math.PI / 2; //* rotate in 90 degrees
//   //   ceilingWallMesh.position.y = -Math.PI; //* rotate in 180 degrees
//   ceilingWallMesh.position.y = 10;

//   scene.add(ceilingWallMesh);
// });

// //? Create painting
// const createPainting = (imageUrl, width, height, position) => {
//   const textureLoader = new THREE.TextureLoader();
//   return new Promise((resolve, reject) => {
//     textureLoader.load(
//       imageUrl,
//       (texture) => {
//         const paintingMaterial = new THREE.MeshBasicMaterial({
//           map: texture,
//         });
//         const paintingGeometry = new THREE.PlaneGeometry(width, height);
//         const paintingMesh = new THREE.Mesh(paintingGeometry, paintingMaterial);
//         paintingMesh.position.set(position.x, position.y, position.z);
//         resolve(paintingMesh); // Resolve the Promise with the mesh
//       },
//       reject
//     ); // Handle potential loading errors
//   });
// };

// const painting1 = createPainting(
//   "img/paintings/ope.jpg",
//   5,
//   5,
//   new THREE.Vector3(-24.8, 0, 5)
// );
// painting1.then((mesh) => {
//   mesh.rotation.y = Math.PI / 2;
//   scene.add(mesh);
// });
// const painting2 = createPainting(
//   "img/paintings/tecno.jpg",
//   5,
//   5,
//   new THREE.Vector3(24.8, 0, -10)
// );
// painting2.then((mesh) => {
//   mesh.rotation.y = -Math.PI / 2;
//   scene.add(mesh);
// });

// //? controls

// const controls = new PointerLockControls(camera, document.body);

// //? Lock the pointer
// //* Controlls are activated, hide the menu

// const startExperience = () => {
//   //* lock the pointer
//   controls.lock();
//   // camera.position.z = 18
//   //* Hide Menu
//   hideMenu();
// };
// const hideMenu = () => {
//   const menu = document.getElementById("main-wrap");
//   menu.style.display = "none";
// };

// const showMenu = () => {
//   const menu = document.getElementById("main-wrap");
//   menu.style.display = "block";
// };
// const playBtn = document.getElementById("enter");
// playBtn.addEventListener("click", startExperience, false);

// const clock = new THREE.Clock();

// const onKeyDown = (event) => {
//   // const moveSpead = clock.getDelta() * 3
//   const prevPosition = camera.position.clone()
//   const moveSpead = 0.05;
//   const keycode = event.which; //* get the key code
//   //! right arrow
//   if (keycode === 39 || keycode === 68) {
//     // camera.translateX(-0.05);
//     controls.moveRight(moveSpead);
//   }
//   //! left arrow
//   else if (keycode === 37 || keycode === 65) {

//     // camera.translateX(0.05);

//     controls.moveRight(-moveSpead);
//   }
//   //! up arrow
//   else if (keycode === 38 || keycode === 87) {
//     controls.moveForward(moveSpead);
//     console.log(checkCollision())
//     // camera.translateY(-0.05);
//   }
//   //! down arrow
//   else if (keycode === 40 || keycode === 83) {
//     controls.moveForward(-moveSpead);
//     // camera.translateY(0.05);
//   } else if (keycode === 27) {
//     showMenu();
//   }
//   if (checkCollision()){
//     camera.position.copy(prevPosition)
//   }
// };
// document.addEventListener("keydown", onKeyDown, false);
// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// //? animate the cube with a loop
// const animate = () => {
//   //? set the rotaation of the cube
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;
//   //? render
//   renderer.render(scene, camera);
//   ambientLight.position.copy(camera.position);
//   window.requestAnimationFrame(animate);
// };

// //? call the loop
// animate();
