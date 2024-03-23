import * as THREE from "three";
import ope from "../img/paintings/ope.jpg";
import tecno from "../img/paintings/tecno.jpg";
import ariyike from "../img/ariyike.png";
import { wallGroup } from "./walls";
import { renderer, camera } from "./setup";
import kaftans from "../img/kaftans.png";
import { showText, hideText } from "./info";
import hof from "../img/hofaaw.png";
const screenWidth = window.innerWidth

const createPainting = (imageUrl, width, height, position) => {
  const textureLoader = new THREE.TextureLoader();
  return new Promise((resolve, reject) => {
    textureLoader.load(
      imageUrl,
      (texture) => {
        const paintingMaterial = new THREE.MeshBasicMaterial({ map: texture });
        const paintingGeometry = new THREE.PlaneGeometry(width, height);
        const paintingMesh = new THREE.Mesh(paintingGeometry, paintingMaterial);
        paintingMesh.position.set(position.x, position.y, position.z);
        resolve(paintingMesh);
      },
      reject
    );
  });
};

const paintings = [];

createPainting(ope, 3, 3, new THREE.Vector3(-24.8, 0, 5)).then((mesh) => {
  mesh.rotation.y = Math.PI / 2;
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  wallGroup.add(mesh);
  paintings.push({
    mesh: mesh,
    info: {
      title: "Two Piece",
      body: "Specially made for kings",
      img:ope,
    },
  });
});
createPainting(ope, 3, 3,screenWidth < 600 ? new THREE.Vector3(-9.8, 0, 15) : new THREE.Vector3(-24.8, -3, -20)).then((mesh) => {
  mesh.rotation.y = Math.PI / 2;
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  wallGroup.add(mesh);
  paintings.push({
    mesh: mesh,
    info: {
      title: "Agbolagade",
      body: "The attair for Royals",
      img:ope,
    },
  });
});
createPainting(ope, 3, 3,screenWidth < 600 ? new THREE.Vector3(-9.8, 0, 10) : new THREE.Vector3(-24.8, -3, -20)).then((mesh) => {
  mesh.rotation.y = Math.PI / 2;
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  wallGroup.add(mesh);
  paintings.push({
    mesh: mesh,
    info: {
      title: "Akinkanju",
      body: "Specially carved for the brave ones",
      img:ope,
    },
  });
});
createPainting(ope, 3, 3, screenWidth < 600 ? new THREE.Vector3(-9.8, 0, -15) : new THREE.Vector3(-24.8, 3, -10)).then((mesh) => {
  mesh.rotation.y = Math.PI / 2;
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  wallGroup.add(mesh);
  paintings.push({
    mesh: mesh,
    info: {
      title: "Eliaza",
      body: "The quieter you become, the louder you hear",
      img:ope,
    },
  });
});

createPainting(ope, 3, 3,screenWidth < 600 ? new THREE.Vector3(-9.8, 0, -3) : new THREE.Vector3(-24.8, 3, -3)).then((mesh) => {
  mesh.rotation.y = Math.PI / 2;
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  wallGroup.add(mesh);
  paintings.push({
    mesh: mesh,
    info: {
      title: "Mama Salewa",
      body: "The parfect outfit for a typical Yoruba woman",
    },
  });
});

createPainting(tecno, 3, 3, screenWidth < 600 ? new THREE.Vector3(9.8, 0, -15) : new THREE.Vector3(24.8, 0, -10)).then((mesh) => {
  mesh.rotation.y = -Math.PI / 2;
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  wallGroup.add(mesh);
  paintings.push({
    mesh: mesh,
    info: {
      title: "Chika",
      body: "Omo yibo with swags",
      img:tecno,
    },
  });
});

//? create banners
createPainting(ariyike, screenWidth < 600 ? 5 : 10, screenWidth < 600 ? 1 : 2, screenWidth < 600 ? new THREE.Vector3(-9.8, 3, 12) : new THREE.Vector3(-24.8, 9, 7.5)).then(
  (mesh) => {
    mesh.rotation.y = Math.PI / 2;
    mesh.geometry.computeBoundingBox();
    mesh.Bbox = new THREE.Box3().setFromObject(mesh);
    wallGroup.add(mesh);
  }
);
createPainting(ariyike, screenWidth < 600 ? 5 : 10, screenWidth < 600 ? 1 : 2, screenWidth < 600 ? new THREE.Vector3(-9.8, 3, 0) : new THREE.Vector3(-24.8, 9, -7.5)).then(
  (mesh) => {
    mesh.rotation.y = Math.PI / 2;
    mesh.geometry.computeBoundingBox();
    mesh.Bbox = new THREE.Box3().setFromObject(mesh);
    wallGroup.add(mesh);
  }
);
createPainting(ariyike, screenWidth < 600 ? 5 : 10, screenWidth < 600 ? 1 : 2, screenWidth < 600 ? new THREE.Vector3(-9.8, 3, -15) : new THREE.Vector3(-24.8, 9, -20)).then(
  (mesh) => {
    mesh.rotation.y = Math.PI / 2;
    mesh.geometry.computeBoundingBox();
    mesh.Bbox = new THREE.Box3().setFromObject(mesh);
    wallGroup.add(mesh);
  }
);

createPainting(kaftans, screenWidth < 600 ? 5 : 10, screenWidth < 600 ? 1 : 2, screenWidth < 600 ? new THREE.Vector3(9.8, 3, 12) : new THREE.Vector3(24.8, 9, 7.5)).then((mesh) => {
  mesh.rotation.y = -Math.PI / 2;
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  wallGroup.add(mesh);
});
createPainting(kaftans, screenWidth < 600 ? 5 : 10, screenWidth < 600 ? 1 : 2, screenWidth < 600 ? new THREE.Vector3(9.8, 3, 0) : new THREE.Vector3(24.8, 9, -7.5)).then(
  (mesh) => {
    mesh.rotation.y = -Math.PI / 2;
    mesh.geometry.computeBoundingBox();
    mesh.Bbox = new THREE.Box3().setFromObject(mesh);
    wallGroup.add(mesh);
  }
);
createPainting(kaftans, screenWidth < 600 ? 5 : 10, screenWidth < 600 ? 1 : 2, screenWidth < 600 ? new THREE.Vector3(9.8, 3, -15) : new THREE.Vector3(24.8, 9, -20)).then((mesh) => {
  mesh.rotation.y = -Math.PI / 2;
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  wallGroup.add(mesh);
});

createPainting(hof, screenWidth < 600 ? 10 : 20, 5, new THREE.Vector3(0, 0, screenWidth < 600 ? -18 : -24.8)).then((mesh) => {
  mesh.geometry.computeBoundingBox();
  mesh.Bbox = new THREE.Box3().setFromObject(mesh);
  wallGroup.add(mesh);
});

function meshClicked(event) {
  // Calculate mouse position in normalized device coordinates (-1 to +1) for raycasting
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Create a raycaster and cast a ray from the camera through the mouse position
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  // Check for intersections with the mesh
  let mckicked;
  for (let i = 0; i < paintings.length; i++) {
    const mesh = paintings[i].mesh;
    const intersects = raycaster.intersectObject(mesh);
    if (intersects.length > 0) {
      showText(paintings[i].info)
      mckicked = true
  }
  }
  if (!mckicked){
    hideText()
  }
}
renderer.domElement.addEventListener('click', meshClicked);
export { paintings };
