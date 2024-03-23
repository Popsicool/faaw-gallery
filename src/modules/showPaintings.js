import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { paintings } from "./paintings";
import { wallGroup } from "./walls";
import { camera, renderer } from "./setup";


const showPaintings = () => {
    Promise.all(paintings).then(() => {
        const controls = new PointerLockControls(camera, renderer.domElement);
        const onKeyDown = (event) => {
          const prevPosition = camera.position.clone(); // Store previous position for collision check
          const moveSpeed = 0.1;
          switch (event.code) {
            case "ArrowUp":
            case "KeyW":
              controls.moveForward(moveSpeed);
              break;
            case "ArrowDown":
            case "KeyS":
              controls.moveForward(-moveSpeed);
              break;
            case "ArrowLeft":
            case "KeyA":
              controls.moveRight(-moveSpeed);
              break;
            case "ArrowRight":
            case "KeyD":
              controls.moveRight(moveSpeed);
              break;
            case "Escape":
            //   controls.dispose();
              controls.unlock()
            //   document.removeEventListener("keydown", onKeyDown);
              showMenu()
              break;
            default:
              break;
          }
      
          // const checkCollision = () => {
          //   const playerBoundingBox = new THREE.Box3();
          //   const cameraWorldPosition = new THREE.Vector3();
          //   camera.getWorldPosition(cameraWorldPosition);
          //   playerBoundingBox.setFromCenterAndSize(
          //     cameraWorldPosition,
          //     new THREE.Vector3(1, 1, 1)
          //   );
          //   for (let i = 0; i < wallGroup.children.length; i++) {
          //     if (
          //       wallGroup.children[i].material.map !== undefined &&
          //       playerBoundingBox.intersectsBox(wallGroup.children[i].Bbox)
          //     ) {
          //       return true;
          //     }
          //   }
          //   return false;
          // };
          const checkCollision = () => {
            const distanceThreshold = 10
            const playerBoundingBox = new THREE.Box3();
            const cameraWorldPosition = new THREE.Vector3();
            camera.getWorldPosition(cameraWorldPosition);
            playerBoundingBox.setFromCenterAndSize(
                cameraWorldPosition,
                new THREE.Vector3(1, 1, 1)
            );
        
            for (let i = 0; i < wallGroup.children.length; i++) {
                const wall = wallGroup.children[i];
                if (wall.material.map !== undefined) {
                    const distance = camera.position.distanceTo(wall.position);
                    if (distance <= distanceThreshold || playerBoundingBox.intersectsBox(wall.Bbox)) {
                        return true;
                    }
                }
            }
            return false;
        };
      
          if (checkCollision()) {
            camera.position.copy(prevPosition); // Revert to previous position if collision occurs
          }
        };
      
        document.addEventListener("keydown", onKeyDown);
      
        window.addEventListener("resize", () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
        const startExperience = (event) => {
          //* lock the pointer
          controls.lock();
          // camera.position.z = 18
          //* Hide Menu
          hideMenu();
          if (document.pointerLockElement === document.body || document.mozPointerLockElement === document.body || document.webkitPointerLockElement === document.body) {
            // Calculate mouse movement
            var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
      
            // Scale mouse movement
            movementX *= sensitivity;
            movementY *= sensitivity;
      
            // Apply rotation to controls
            controls.yawObject.rotation.y -= movementX;
            controls.pitchObject.rotation.x -= movementY;
      
            // Clamp vertical rotation to avoid flipping
            controls.pitchObject.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, controls.pitchObject.rotation.x));
        }
        };
        const hideMenu = () => {
          const menu = document.getElementById("main-wrap");
          menu.style.display = "none";
        };
      
        const showMenu = () => {
          const menu = document.getElementById("main-wrap");
          menu.style.display = "block";
        };
        // const playBtn = document.getElementById("enter");
        // playBtn.addEventListener("click", startExperience, false);
      });
}

export {showPaintings}