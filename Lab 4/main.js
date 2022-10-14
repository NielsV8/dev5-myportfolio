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
      const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
      const planeMesh = new THREE.Mesh( planeGeometry, planeMaterial );
      const planeMesh2 = new THREE.Mesh( planeGeometry, planeMaterial );
      const planeMesh3 = new THREE.Mesh( planeGeometry, planeMaterial );
      const planeMesh4 = new THREE.Mesh( planeGeometry, planeMaterial );
      planeMaterial.map = wallTexture;
      planeMesh.position.set(0.5, 0, 0);
      planeMesh.rotation.y = 90 * Math.PI / 180;
      planeMesh2.position.set(0, 0, -0.5);
      planeMesh3.rotation.y = 90 * Math.PI / 180;
      planeMesh3.position.set(0.5, 0, 1);
      planeMesh4.position.set(-1, 0, -0.5);
      scene.add( planeMesh ); 
      scene.add( planeMesh2 ); 
      scene.add( planeMesh3 ); 
      scene.add( planeMesh4 ); 
      
      //add floor
      const floorTexture = textureLoader.load( "./assests/floor.jpg" );
      const floorGeometry = new THREE.PlaneGeometry( 1, 1 );
      const floorMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
      const floorMesh1 = new THREE.Mesh( floorGeometry, floorMaterial );
      const floorMesh2 = new THREE.Mesh( floorGeometry, floorMaterial );
      const floorMesh3 = new THREE.Mesh( floorGeometry, floorMaterial );
      const floorMesh4 = new THREE.Mesh( floorGeometry, floorMaterial );
      floorMaterial.map = floorTexture;
      floorMesh1.rotation.x = Math.PI / 2;
      floorMesh1.position.y = -0.5;
      floorMesh2.position.y = -0.5;
      floorMesh2.rotation.x = Math.PI / 2;
      floorMesh2.position.z = 1;
      floorMesh3.position.y = -0.5;
      floorMesh3.rotation.x = Math.PI / 2;
      floorMesh3.position.x = -1;
      floorMesh4.position.y = -0.5;
      floorMesh4.rotation.x = Math.PI / 2;
      floorMesh4.position.x = -1;
      floorMesh4.position.z = 1;
      scene.add( floorMesh1 );
      scene.add( floorMesh2 );
      scene.add( floorMesh3 );
      scene.add( floorMesh4 );

      //add card
      const cardTexture = textureLoader.load( "./assests/logo.jpg" );
      const cardGeometry = new THREE.CircleGeometry( 0.2, 32 );
      const cardMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
      const cardMesh = new THREE.Mesh( cardGeometry, cardMaterial );
      cardMaterial.map = cardTexture;
      cardMesh.position.set(0, 0, -0.49);
      scene.add( cardMesh );

      //add roof
      const roofTexture = textureLoader.load( "./assests/roof.jpg" );
      const roofGeometry = new THREE.PlaneGeometry( 1, 1 );
      const roofMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
      const roofMesh = new THREE.Mesh( roofGeometry, roofMaterial );
      roofMaterial.map = roofTexture;
      roofMesh.position.set(0, 0.5, 0);
      roofMesh.rotation.x = Math.PI / 2;
      scene.add( roofMesh );

      //add roof cone
      const light = new THREE.DirectionalLight( 0xffff00, 1 );
      scene.add( light );

			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );

        
			};

			animate();
