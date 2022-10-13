import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xfffffff);
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

      const controls = new OrbitControls( camera, renderer.domElement );
      const textureLoader = new THREE.TextureLoader();

      const wallTexture = textureLoader.load( "./assests/wall.jpg" );
      const planeGeometry = new THREE.PlaneGeometry( 1, 1 );
      const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
      const planeMesh = new THREE.Mesh( planeGeometry, planeMaterial );
      planeMaterial.map = wallTexture;
      scene.add( planeMesh );  


      
      const light = new THREE.DirectionalLight( 0xffff00, 1 );
      scene.add( light );

			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
			};

			animate();
