import * as THREE from "three";
import { camera } from "./setup";
import { showText, hideText } from "./info";
import { paintings } from "./paintings";
import { ambientLight } from "./lights";
import { renderer, scene } from "./setup";
const screenWidth = window.innerWidth

let distanceTo;
if (screenWidth < 600) {
  distanceTo = 3;
}
else{
  distanceTo = 8
}
const animate = () => {
    requestAnimationFrame(animate);
    const cameraWorldPosition = new THREE.Vector3();

    camera.getWorldPosition(cameraWorldPosition);
    let toShow;
    for (let i = 0; i < paintings.length; i++) {
      const paintingCenter = paintings[i].mesh.position.clone();
      const distanceToPainting = cameraWorldPosition.distanceTo(paintingCenter);
      if (distanceToPainting < distanceTo) {
        toShow = paintings[i].info;
      }
      paintings[i].mesh.addEventListener("click", () => {
        alert("clicked")
      })
    }
    if (toShow){
      showText(toShow)
    }
    // else{
    //   hideText()
    // }
    ambientLight.position.copy(camera.position); // Update ambient light position
    renderer.render(scene, camera);
  };
export {animate}