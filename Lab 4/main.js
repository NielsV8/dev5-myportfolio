import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x87CEEB);
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

      const controls = new OrbitControls( camera, renderer.domElement );
      const textureLoader = new THREE.TextureLoader();
      const gltfLoader = new GLTFLoader();

      let grass;
      const addGrass = (x, y, z) => {
        gltfLoader.load("./assets/models/grass/scene.gltf", (gltf) => {
          grass = gltf.scene;
          grass.position.set(x, y, z);
          grass.scale.set(10, 10, 10);
          scene.add(gltf.scene);
        }); 
      }

      for(let i = 0; i < 20; i++){
        let sign = Math.random() < 0.5 ? -1 : 1;
        const x = Math.random() * 3 * sign;
      
        const y = -0.5;
      
        sign = Math.random() < 0.5 ? -1 : 1;
        const z = Math.random() * 3 * sign;
        addGrass(x, y, z);
      }

      //add pig to scene
      let pig;
      gltfLoader.load("./assets/models/pig/scene.gltf", (gltf) => {
        pig = gltf.scene;
        pig.position.set(-4, -0.5, 0);
        pig.scale.set(0.5, 0.5, 0.5);
        scene.add((gltf.scene));
      });


      const planeGeometry = new THREE.PlaneGeometry( 2, 1 );
      const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xAA4A44, side: THREE.DoubleSide} );
      const planeMesh = new THREE.Mesh( planeGeometry, planeMaterial );
      const planeMesh2 = new THREE.Mesh( planeGeometry, planeMaterial );
      const planeMesh3 = new THREE.Mesh( planeGeometry, planeMaterial );
      const planeMesh4 = new THREE.Mesh( planeGeometry, planeMaterial );
  
      planeMesh.position.set(0.5, 0, 0.5);
      planeMesh.rotation.y = 90 * Math.PI / 180;
      planeMesh2.position.set(-0.5, 0, -0.5);
      planeMesh3.position.set(-0.5, 0, 1.5);
      planeMesh4.position.set(-1.5, 0, 0.5);
      planeMesh4.rotation.y = 90 * Math.PI / 180;

      scene.add( planeMesh ); 
      scene.add( planeMesh2 );
      scene.add( planeMesh3 );  
      scene.add( planeMesh4 );
      
      //add floor
      const floorTexture = textureLoader.load( "./assets/textures/floor.jpg" );
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

      //add ground
      const groundTexture = textureLoader.load( "./assets/textures/grass.jpg" );
      const groundGeometry = new THREE.PlaneGeometry( 25, 25 );
      const groundMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
      const groundMesh = new THREE.Mesh( groundGeometry, groundMaterial );
      groundMesh.position.y = -0.51;
      groundMesh.rotation.x = Math.PI / 2;
      groundMaterial.map = groundTexture;
      scene.add( groundMesh );

      //add card
      const cardTexture = textureLoader.load( "./assets/textures/logo.jpg" );
      const cardGeometry = new THREE.CircleGeometry( 0.2, 32 );
      const cardMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
      const cardMesh = new THREE.Mesh( cardGeometry, cardMaterial );
      cardMaterial.map = cardTexture;
      cardMesh.position.set(0, 0, -0.49);
      scene.add( cardMesh );

      //add roof cone
      const roofTexture = textureLoader.load( "./assets/textures/roof.jpg" );
      const roofConeGeometry = new THREE.ConeGeometry( 1.5, 1, 4 );
      const roofConeMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
      const roofConeMesh = new THREE.Mesh( roofConeGeometry, roofConeMaterial );
      roofConeMaterial.map = roofTexture;
      roofConeMesh.position.set(-0.5, 1, 0.5);
      roofConeMesh.rotation.y = 45 * Math.PI / 180;
      scene.add( roofConeMesh );

      //add door
      const doorTexture = textureLoader.load( "./assets/textures/door.jpg" );
      const doorGeometry = new THREE.PlaneGeometry( 0.5, 1 );
      const doorMaterial = new THREE.MeshBasicMaterial( {color: 0x8B4513, side: THREE.DoubleSide} );
      const doorMesh = new THREE.Mesh( doorGeometry, doorMaterial );
      doorMesh.position.set(-0.5, 0, 1.51);
      doorMaterial.map = doorTexture;
      scene.add( doorMesh );

      const nameTexture = textureLoader.load( "./assets/textures/naam.jpg" );
      const nameGeometry = new THREE.PlaneGeometry( 0.5, 0.5 );
      const nameMaterial = new THREE.MeshBasicMaterial( {color: 0x8B4513, side: THREE.DoubleSide} );
      const nameMesh = new THREE.Mesh( nameGeometry, nameMaterial );
      nameMesh.position.set(0.12, 0, 1.51);
      nameMaterial.map = nameTexture;
      scene.add( nameMesh );

      //add light
      const light = new THREE.AmbientLight( 0xffffff, 1, 100 );
      light.position.set( 0, 0, 0 );
      scene.add( light );

			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );

        if(pig) pig.rotation.y += 0.01;
      };
			animate();
