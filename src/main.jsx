import * as THREE from 'three';
import './App.css';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

// Scene
const scene = new THREE.Scene();

// Create sphere geometry
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: '#00ff83' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Light
const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 20; // Adjust camera position
scene.add(camera);


// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// Render function
const render = () => {
  renderer.render(scene, camera);
};

//controls 
const controls = new OrbitControls(camera, canvas)

// Resize event handler
const handleResize = () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update renderer size
  renderer.setSize(sizes.width, sizes.height);

  // Update camera aspect ratio
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Render scene
  render();
};

// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Initial rendering
render();

const loop = () => {
  mesh.rotation.x += 0.2
  window.requestAnimationFrame(loop)
  renderer.render(scene,camera)
}

loop()
