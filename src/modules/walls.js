import * as THREE from "three";
import { scene } from "./setup";
import gate from "../img/gate.jpeg"
import brick from "../img/wall.jpeg"
import mud from "../img/mud.jpeg"
import ceiling from "../img/ceiling.png"

const wallGroup = new THREE.Group();
scene.add(wallGroup);


const screenWidth = window.innerWidth

const createWall = (textureUrl, position, color, rotation) => {
  const wallTexture = new THREE.TextureLoader();
  const createGeometry = new THREE.BoxGeometry(screenWidth < 600 ? 40 : 90, screenWidth < 600 ? 10 : 20, 0.001);
  return new Promise((resolve, reject) => {
    wallTexture.load(
      textureUrl,
      (texture) => {
        const wallMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          color: color,
        });
        const wallMesh = new THREE.Mesh(createGeometry, wallMaterial);
        if (position.x) {
          wallMesh.position.x = position.x;
        }
        if (position.y) {
          wallMesh.position.y = position.y;
        }
        if (position.z) {
          wallMesh.position.z = position.z;
        }
        if (rotation.x) {
          wallMesh.rotation.x = rotation.x;
        }
        if (rotation.y) {
          wallMesh.rotation.y = rotation.y;
        }
        if (rotation.z) {
          wallMesh.rotation.z = rotation.z;
        }
        wallMesh.geometry.computeBoundingBox();
        wallMesh.Bbox = new THREE.Box3().setFromObject(wallMesh);
        wallGroup.add(wallMesh);
        resolve(wallMesh);
      },
      reject
    );
  });
};

//? Add texture loader
const floorTexture = new THREE.TextureLoader();
const floor = new THREE.PlaneGeometry(screenWidth < 600 ? 20 : 50, screenWidth < 600 ? 40 : 90);
floorTexture.load(mud, function (texture) {
  // Create material with the loaded texture
  const floorMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const floorMesh = new THREE.Mesh(floor, floorMaterial);

  floorMesh.rotation.x = Math.PI / 2; //* rotate in 90 degrees
  //   floorMesh.position.y = -Math.PI; //* rotate in 180 degrees
  floorMesh.position.y = screenWidth < 600 ? -5 : -10;
  // Add the mesh to the scene
  scene.add(floorMesh);
});

//? Ceiling wall

const ceilingTexture = new THREE.TextureLoader();
const ceilingWall = new THREE.PlaneGeometry(screenWidth < 600 ? 20 : 50, screenWidth < 600 ? 40 : 90);
ceilingTexture.load(ceiling, function (texture) {
  const ceilingWallMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    color: "white",
    side: THREE.DoubleSide,
  });
  const ceilingWallMesh = new THREE.Mesh(ceilingWall, ceilingWallMaterial);
  ceilingWallMesh.rotation.x = Math.PI / 2; //* rotate in 90 degrees
  //   ceilingWallMesh.position.y = -Math.PI; //* rotate in 180 degrees
  ceilingWallMesh.position.y = screenWidth < 600 ? 5 : 10;
  scene.add(ceilingWallMesh);
  return ceilingWallMesh
});


// //? front walls




const frontWall = new THREE.BoxGeometry(screenWidth < 600 ? 20 : 50, screenWidth < 600 ? 11 : 20, 0.001)
const frontMaterial = new THREE.MeshBasicMaterial({
  color: "green"
})
const frontMesh = new THREE.Mesh(frontWall, frontMaterial)
frontMesh.position.z = screenWidth < 600 ? -20 : -25;

frontMesh.geometry.computeBoundingBox();
frontMesh.Bbox = new THREE.Box3().setFromObject(frontMesh);
wallGroup.add(frontMesh)


createWall(gate, { x: null, y: null, z: screenWidth < 600 ? 20 : 45 }, "white", {
  x: null,
  y: null,
  z: null,
});
createWall(brick, { x: screenWidth < 600 ? -10 : -25, y: null, z: null }, "brown", {
  x: null,
  y: Math.PI / 2,
  z: null,
});
createWall(brick, { x: screenWidth < 600 ? 10 : 25, y: null, z: null }, "brown", {
  x: null,
  y: Math.PI / 2,
  z: null,
});

//? create dividers

const createDivider = (position, size) => {
  const dividerGeometry = new THREE.BoxGeometry(size.width, size.height, 0.1)
  const dividerMaterial = new THREE.MeshBasicMaterial({
    color:"white",
    side: THREE.DoubleSide
  })
  
  const dividerMesh = new THREE.Mesh(dividerGeometry, dividerMaterial)
  if (position.x){
    dividerMesh.position.x = position.x
  }
  if (position.y){
    dividerMesh.position.y = position.y
  }
  if (position.z){
    dividerMesh.position.z = position.z
  }
  dividerMesh.geometry.computeBoundingBox();
  dividerMesh.Bbox = new THREE.Box3().setFromObject(dividerMesh);
  wallGroup.add(dividerMesh)
  return dividerMesh
}
createDivider({x: screenWidth < 600 ? -10 : -25, z: screenWidth < 600 ? 18: 0}, {width: 0.3, height: screenWidth < 600 ? 10 : 25})
createDivider({x: screenWidth < 600 ? -10 : -25, z:screenWidth < 600 ? -10: -10}, {width: 0.3, height: screenWidth < 600 ? 10 : 25})
createDivider({x: screenWidth < 600 ? -10 : -25, z:screenWidth < 600 ? 5: 10}, {width: 0.3, height: screenWidth < 600 ? 10 : 25})
createDivider({x: screenWidth < 600 ? 10 : 25, z: screenWidth < 600 ? 18: 0}, {width: 0.3, height: screenWidth < 600 ? 10 : 25})
createDivider({x: screenWidth < 600 ? 10 : 25, z:screenWidth < 600 ? -10: -10}, {width: 0.3, height: screenWidth < 600 ? 10 : 25})
createDivider({x: screenWidth < 600 ? 10 : 25, z:screenWidth < 600 ? 5: 10}, {width: 0.3, height: screenWidth < 600 ? 10 : 25})

//? vertical dividers

const vert1 = createDivider({x: screenWidth < 600 ? 10 : 25, z:screenWidth < 600 ? -10: -10}, {width: 0.3, height: screenWidth < 600 ? 40 : 90})
vert1.rotation.x = Math.PI / 2
vert1.position.y = 4
const vert2 = createDivider({x: screenWidth < 600 ? 10 : 25, z:screenWidth < 600 ? -10: -10}, {width: 0.3, height: screenWidth < 600 ? 40 : 90})
vert2.rotation.x = Math.PI / 2
vert2.position.y = 1
const vert3 = createDivider({x: screenWidth < 600 ? 10 : 25, z:screenWidth < 600 ? -10: -10}, {width: 0.3, height: screenWidth < 600 ? 40 : 90})
vert3.rotation.x = Math.PI / 2
vert3.position.y = -2

const vert4 = createDivider({x: screenWidth < 600 ? -10 : -25, z:screenWidth < 600 ? -10: -10}, {width: 0.3, height: screenWidth < 600 ? 40 : 90})
vert4.rotation.x = Math.PI / 2
vert4.position.y = 4
const vert5 = createDivider({x: screenWidth < 600 ? -10 : -25, z:screenWidth < 600 ? -10: -10}, {width: 0.3, height: screenWidth < 600 ? 40 : 90})
vert5.rotation.x = Math.PI / 2
vert5.position.y = 1
const vert6 = createDivider({x: screenWidth < 600 ? -10 : -25, z:screenWidth < 600 ? -10: -10}, {width: 0.3, height: screenWidth < 600 ? 40 : 90})
vert6.rotation.x = Math.PI / 2
vert6.position.y = -2


export {wallGroup}

