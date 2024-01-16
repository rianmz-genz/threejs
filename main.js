import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 74, window.innerWidth / window.innerHeight, 0.1, 1000 );
const orbit = new OrbitControls(camera, renderer.domElement)
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x141416)
// const axesHelper = new THREE.AxesHelper(5)
// scene.add(axesHelper)
camera.position.set( 0, 2, 5 );
orbit.update()

const planeGeometry = new THREE.PlaneGeometry(10,5)
const planeMaterial = new THREE.MeshBasicMaterial({color: 0x333, side: THREE.DoubleSide})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(plane)

// const gridHelper = new THREE.GridHelper(window.innerWidth, window.innerWidth / 40)
// scene.add(gridHelper)

function animate() {
    renderer.render( scene, camera );
}

renderer.setAnimationLoop(animate)