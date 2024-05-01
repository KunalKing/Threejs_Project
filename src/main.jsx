import * as THREE from 'three';
import './App.css'

// Scene
const scene = new THREE.Scene();

// Create sphere geometry
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: '#00ff83' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//light
const light = new THREE.PointLight(0xffffff, 100, 100)
light.position.set(0, 10, 10)
scene.add(light)


//Sizes
const sizes ={
  width: window.innerWidth,
  height: window.innerHeight,
}

// Camera
const canvas = document.querySelector('.webgl');
const aspectRatio = canvas.clientWidth / canvas.clientHeight; // Calculate aspect ratio
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 20; // Adjust camera position
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//resize
window.addEventListener('resize', ()=>{
 sizes.width = window.innerWidth
 sizes.height = window.innerHeight
})